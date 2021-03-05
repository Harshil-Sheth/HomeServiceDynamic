import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CartCard from '../cart-card/cart-card.components'


export default class CartModal extends Component {
  constructor(){
    super();

    this.state = {
        cart: []
    }
} 

componentDidMount() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  var customer_id = '1';
  var urlencoded = new URLSearchParams();
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

  fetch("http://localhost:4000/api/ViewFromCart/"+customer_id, requestOptions)
    .then(response => response.json())
    .then(data => {this.setState({ cart : data.msg[0]});console.log(this.state.cart)})
    // .then(data => this.setState({cart : data},console.log(data)))
    .catch(error => console.log('error', error));
    // console.log(result)
    
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
            {console.log("cartid"+this.state.cart.cart_id)}
         {this.state.cart.cart_id}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.state.cart.map(({ cart_id, ...otherCartProps}) => (
                
        <CartCard key={cart_id}/>
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




