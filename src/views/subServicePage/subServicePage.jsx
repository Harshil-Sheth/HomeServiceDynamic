import React, { Component } from 'react';

import Navbar from '../../components/navabar/navbar.components';
import Footer from '../../components/footer/footer.components';
import SubserveiceList from '../../components/subserviceList/subservicelist.component';


class SubServicePage extends Component {
    

    render() {
        return(
        <div>
            <SubserveiceList />
            </div>
            )  }
        }

export default SubServicePage;