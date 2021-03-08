
import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'

export default class Orders extends Component {
    constructor(){
        super();

        this.state = {
            orders: []
        }
    }
    componentDidMount(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          var customer_id=1;
          fetch("http://localhost:4000/api/Vieworder/"+customer_id, requestOptions)
            .then(response => response.text())
            .then(data => this.setState({ orders : data}))
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <div>
                {this.state.orders.map(({ placeorder_id,sub_servicename}) => (
               <Card key={placeorder_id}>
                    <Card.Header as="h5">Featured</Card.Header>
                    <Card.Body>
                    <Card.Title>{sub_servicename}</Card.Title>
                    <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                 ))}
            </div>
        )
    }
}
