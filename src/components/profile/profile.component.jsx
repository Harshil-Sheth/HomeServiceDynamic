import React, { Component } from 'react'
import './profile.styles.css'

export default class Profile extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            details: [],
            firstname: '',
            lastname:'',
            gender: '',
            email:'',
            mobile_no: '',
            address:'',
            area: '',
            city:''
            
        }
        this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange= (event)=>{
        this.setState({firstname: event.target.defaultValue});
    }
    componentDidMount() {
        var requestOptions = {
        method: 'GET',
        };
    fetch("http://localhost:4000/api/ViewCustomer/1", requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ details : data}))
    //   .then(result => (this.state.details.map(({firstname})=>(console.log(firstname)))))
    .catch(error => console.log('error', error));
}


handleSubmit = (event) =>{
    alert('A name was submitted: ' + this.state.firstname)
    event.preventDefault();
}



updateCustomer(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("firstname", this.state.firstname);
    urlencoded.append("lastname", "Savaliya");
    urlencoded.append("gender", "female");
    urlencoded.append("mobile_no", "9436789548");
    urlencoded.append("email", "vrunda@gmail.com");
    urlencoded.append("address", "s.g. Highway");
    urlencoded.append("image", "abc.jpg");
    urlencoded.append("area", "Bodakdev");
    urlencoded.append("city", "Ahmedabad");
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("http://localhost:4000/api/Updatecustomer/1", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    }
    
    
    
    
    render() {
    
        return (
            <div className='profilePage'>
                <div className="container">
                    <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="cardi h-100">
	                            <div className="cardi-body">
		                            <div className="account-settings">
			                            <div className="user-profile">
				                            <div className="user-avatar">
					                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
				                            </div>
				                            <h5 className="user-name">{this.state.details.map(({firstname,lastname})=>firstname+' '+lastname)}</h5>
				                            <h6 className="user-mobile_no">{this.state.details.map(({mobile_no})=>mobile_no)}</h6>
				                            <h6 className="user-email">{this.state.details.map(({email})=>email)}</h6>
			                            </div>
			                            {/* <div className="about">
				                            <h5>Address</h5>
				                            <p>Address Line: {this.state.details.map(({address})=>address)}</p>
				                            <p>Area :{this.state.details.map(({area})=>area)}</p>
				                            <p>City :{this.state.details.map(({city})=>city)}</p>
			                            </div> */}
		                            </div>
	                            </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <form onSubmit={this.handleSubmit}>
                            <div className="cardi h-100">
	                            <div className="cardi-body">
		                            <div className="row gutters">
                                       
			                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				                            <h6 className="mb-2 text-primary">Personal Details</h6>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="firstName">First Name</label>
					                            <input type="text" name='firstname' defaultValue={this.state.details.map(({firstname})=>firstname)} onChange={this.handleChange} className="form-control" id="firstName" placeholder="Enter First Name" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="lastName">Last Name</label>
					                            <input type="text" name='lastname' defaultValue={this.state.details.map(({lastname})=>lastname)} onChange={this.handleChange} className="form-control" id="lastName" placeholder="Enter Last Name" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="gender">Gender</label>
					                            <input type="text" name='gender' defaultValue={this.state.details.map(({gender})=>gender)} onChange={this.handleChange} className="form-control" id="gender" placeholder="Enter Gender" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="email">Email</label>
					                            <input type="email" name='email' defaultValue={this.state.details.map(({email})=>email)} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Email ID" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="phone">Mobile Number</label>
					                            <input type="text" name='mobile_no' defaultValue={this.state.details.map(({mobile_no})=>mobile_no)} onChange={this.handleChange} className="form-control" id="mobile" placeholder="Enter Mobile Number" />
				                            </div>
			                            </div>
		                            </div>
		                            <div className="row gutters">
		                            	<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                            		<h6 className="mt-3 mb-2 text-primary">Address</h6>
		                            	</div>
		                            	<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
				                            	<label htmlFor="Street">Address Line</label>
				                            	<input type="name" name='address' defaultValue={this.state.details.map(({address})=>address)} onChange={this.handleChange} className="form-control" id="Street" placeholder="Enter Address" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                            	<div className="form-group">
			                            		<label htmlFor="area">Area</label>
			                            		<input type="text" name='area' defaultValue={this.state.details.map(({area})=>area)} onChange={this.handleChange} className="form-control" id="sTate" placeholder="Enter Area" />
			                            	</div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                            	<div className="form-group">
			                            		<label htmlFor="ciTy">City</label>
			                            		<input type="name" name='city' defaultValue={this.state.details.map(({city})=>city)} onChange={this.handleChange} className="form-control" id="ciTy" placeholder="Enter City" />
			                            	</div>
			                            </div>
		                            </div>
		                            <div className="row gutters">
		                            	<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                            		<div className="text-right">
		                            			{/* <button type="button" id="submit" name="submit" className="btn btn-secondary cancle">Cancel</button> */}
		                            			<button type="submit" id="submit" name="submit" className="btn btn-primary" onClick={() => this.updateCustomer()}>Update</button>
		                            		</div>
		                            	</div>
		                            </div>
	                            </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
