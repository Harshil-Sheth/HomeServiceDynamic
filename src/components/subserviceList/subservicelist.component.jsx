import React, { Component } from 'react'
import SubserviceCard from '../subserviceCard/subserviceCard.component'
import "./subservicelist.styles.css"

export default class SubserveiceList extends Component {
    constructor(){
        super();

        this.state = {
            sections: []
        }
    }


    componentDidMount() {
        const apiUrl = 'http://localhost:4000/api/getCategoryByName/Home Cleaning';
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => this.setState({ sections : data}));
      }
    render() {
        return (
            <div className='cards'>
            <div className="container-fluid d-flex cardlist">
                {this.state.sections.map(({ subservice_id, ...otherSectionProps}) => (
                <div key={subservice_id}  className="d-flex cardlist">
                <SubserviceCard  key={subservice_id} {...otherSectionProps}/>
                </div>))}
                {/* // <SubserviceCard /> */}
            </div>
            </div>
        )
    }
}
