import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CartCard from '../cart-card/cart-card.components'


export default class CartModal extends Component {
  constructor(){
    super();

    this.state = {
        cart: [],
        subId:[]
    }
} 
subserviceKIID=[];
AddId(){
  this.state.cart.map(({subservice_id})=>{
  if (this.subserviceKIID.indexOf(subservice_id) === -1) 
    this.subserviceKIID.push(subservice_id)
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

    
  this.AddId()   
}
componentDidUpdate(){
  this.refreshlist(); 
  this.AddId()   
  }
 
  render() {
    
    
    
    return (

      <div>
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
          <Button>Place Order</Button>
          {/* <Button onClick={this.props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
            </div>
        )
      }
    }
    // console.log(this.state);




