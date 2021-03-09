import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import React, { Component } from 'react'
import "./orders.styles.css"



export default class Orders extends Component {
    


    constructor(props){
        super(props);

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
            .then(response => response.json())
            .then(data => this.setState({ orders : data}))
            .catch(error => console.log('error', error));
    }
    render() {
        return (
            <div >
                 <div className='header'>
                     Your Orders
                     </div>
                     <div className='container-fluid, row nthcard, list'>
                {this.state.orders.map(({ placeorder_id,sub_servicename,price,time_duration,order_status}) => (
               <div key={placeorder_id} className='orderCard'>
               <Card key={placeorder_id}  className= 'card'>
                 <CardActionArea>
                   {/* <CardMedia
                     component="img"
                     alt="Contemplative Reptile"
                     height="140"
                     image={image}
                     title="Contemplative Reptile"
                   /> */}
                   <CardContent>
                     <Typography  gutterBottom variant="h5" component="h2">
                     {sub_servicename}
                     </Typography>
                     
                     <Typography className="spanTag" variant="body2" color="textSecondary" display="inline">
                       <span className='price'>₹{price}</span><span>Duration: {time_duration}</span>
                     </Typography>
                     
                   </CardContent>
                 </CardActionArea>
                 <CardActions className="baton">
                   <Button size="small" className="baton">
                     Status - {order_status}
                   </Button>
                 </CardActions>
               </Card>
               </div>
                 ))}
                 </div>
            </div>
        )
    }
}
