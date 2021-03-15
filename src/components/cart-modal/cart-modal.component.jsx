import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CartCard from '../cart-card/cart-card.components'


export default class CartModal extends Component {
  constructor(){
    super();

    this.state = {
        cart: [],
        subId:[],
        orderaddress:[],
        totalamount:null
    }
} 
totalPrice=0
subserviceKIID=[];
AddId(){
  this.state.cart.map(({subservice_id,price})=>{
    if (this.subserviceKIID.indexOf(subservice_id) === -1) {
      this.subserviceKIID.push(subservice_id)
     this.totalPrice=this.totalPrice+price
    }
    // console.log(this.subserviceKIID)
  })}
  componentDidMount() {
    this.refreshlist();
  }
  refreshlist(){
    var customer_id = '1';
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:4000/api/ViewFromCart/"+customer_id, requestOptions)
  .then(response => response.json())
    .then(result =>{this.setState({cart: result})
  }
  )
  .catch(error => console.log('error', error));

  fetch("http://localhost:4000/api/ViewOrderAddress/"+customer_id, requestOptions)
  .then(response => response.json())
    .then(result =>{this.setState({orderaddress: result})
  })
  .catch(error => console.log('error', error));
      
  // this.AddId()   
}
componentDidUpdate(){
  this.refreshlist(); 
  this.AddId()   
  }
  placeorder(e){
    alert(this.subserviceKIID)
  }
  render() {
    
    
    
    return (

      <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
        <Modal
              
              {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  
                  Your Cart
               
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="container-fluid d-flex row nthcard">
               
              {this.state.cart.map(({ cart_id, ...otherCartProps}) => (
                 
              <CartCard key={cart_id} {...otherCartProps} cart_id={cart_id} />
                 ))}  
      
              </Modal.Body>
              <Modal.Footer>
                <div>
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                {this.state.orderaddress.map(({ customer_id,address,area,city}) => (
                            // this.totalPrice=this.totalPrice+price
                              <form>
                                  <div className="cardi h-100">
                                    <div className="cardi-body">
                                      <div className="row gutters">
                                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                          <div className="form-group">
                                            <label htmlFor="Street">Address</label>
                                            <input type="name" name='address' defaultValue={address} className="form-control" id="Street" placeholder="Enter Address" />
                                          </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                          <div className="form-group">
                                            <label htmlFor="Pincode">Pincode</label>
                                            <input type="text" name='pincode' className="form-control" defaultValue={area} id="sTate" placeholder="Enter Pincode" />
                                          </div>
      
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                          <div className="form-group">
                                            <label htmlFor="ciTy">City</label>
                                            <input type="name" name='city' defaultValue={city}  className="form-control" id="ciTy" placeholder="Enter City" />
                                          </div>
                                        </div>
                </div></div></div></form> ))}  
                </div>
                </div>
                <div style={{marginTop:0}}>
                <label style={{fontWeight:"bold",marginRight:15,fontSize:20}}>Total Amount: ₹{this.totalPrice}</label>
                <Button type="submit" onClick={(e)=>this.placeorder(e)}> Place Order</Button>
                </div>
               
               
                
              </Modal.Footer>
            </Modal>
      </form>
            </div>
        )
      }
    }
    // console.log(this.state);




