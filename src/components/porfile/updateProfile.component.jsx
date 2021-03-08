import React, { Component } from 'react'
import './profile.styles.css'

export default class updateProfile extends Component {
    constructor(props){
        super(props);
       
        this.state = {
            firstname: '',
            lastname:'',
            gender: '',
            email:'',
            mobile_no: '',
            address:'',
            area: '',
            city:''
            
        }
       
    }

    // handleSubmit(){
    //     alert(firstname+lastname+gender+mno+email+address+area+city)
	// 	var myHeaders = new Headers();
	// 		myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	// 		var urlencoded = new URLSearchParams();
	// 		urlencoded.append("firstname", firstname);
	// 		urlencoded.append("lastname", lastname);
	// 		urlencoded.append("gender", gender);
	// 		urlencoded.append("mobile_no", mno);
	// 		urlencoded.append("email", email);
	// 		urlencoded.append("address", address);
	// 		urlencoded.append("image", "abc.jpg");
	// 		urlencoded.append("area", area);
	// 		urlencoded.append("city", city);

	// 		var requestOptions = {
	// 		method: 'PUT',
	// 		headers: myHeaders,
	// 		body: urlencoded,
	// 		redirect: 'follow'
	// 		};

	// 		fetch("http://localhost:4000/api/Updatecustomer/1", requestOptions)
	// 		.then(response => response.text())
	// 		.then(result => console.log(result))
	// 		.catch(error => console.log('error', error));
    // }


    render() {
        return (
            <div>
                { console.log("val"+this.props.firstname)}
                {/* <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <form onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
                            <div className="cardi h-100">
	                            <div className="cardi-body">
		                            <div className="row gutters">
                                       
			                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				                            <h6 className="mb-2 text-primary">Personal Details</h6>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="firstName">First Name</label>
					                            <input type="text" name='firstname' defaultValue={details.map(({firstname})=>firstname)}  onChange={e=>setfirstname(e.target.value)}  className="form-control" id="firstName" placeholder="Enter First Name" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="lastName">Last Name</label>
					                            <input type="text" name='lastname' defaultValue={details.map(({lastname})=>lastname)} onChange={e=>setlastname(e.target.value)} className="form-control" id="lastName" placeholder="Enter Last Name" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="gender">Gender</label>
					                            <input type="text" name='gender' defaultValue={details.map(({gender})=>gender)}  onChange={e=>setgender(e.target.value)} className="form-control" id="gender" placeholder="Enter Gender" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="email">Email</label>
					                            <input type="email" name='email' defaultValue={details.map(({email})=>email)} onChange={e=>setemail(e.target.value)} className="form-control" id="email" placeholder="Enter Email ID" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				                            <div className="form-group">
					                            <label htmlFor="phone">Mobile Number</label>
					                            <input type="text" name='mobile_no' defaultValue={details.map(({mobile_no})=>mobile_no)} onChange={e=>setmno(e.target.value)} className="form-control" id="mobile" placeholder="Enter Mobile Number" />
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
				                            	<input type="name" name='address' defaultValue={details.map(({address})=>address)} onChange={e=>setaddress(e.target.value)} className="form-control" id="Street" placeholder="Enter Address" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                            	<div className="form-group">
			                            		<label htmlFor="area">Area</label>
			                            		<input type="text" name='area' defaultValue={details.map(({area})=>area)} onChange={e=>setarea(e.target.value)} className="form-control" id="sTate" placeholder="Enter Area" />
			                            	</div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                            	<div className="form-group">
			                            		<label htmlFor="ciTy">City</label>
			                            		<input type="name" name='city' defaultValue={details.map(({city})=>city)} onChange={e=>setcity(e.target.value)} className="form-control" id="ciTy" placeholder="Enter City" />
			                            	</div>
			                            </div>
		                            </div>
		                            <div className="row gutters">
		                            	<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
		                            		<div className="text-right">
		                            			<button type="submit" id="submit" name="submit" className="btn btn-primary" >Update</button>
		                            		</div>
		                            	</div>
		                            </div>
	                            </div>
                            </div>
                            </form>
                        </div> */}
		                            			{/* <button type="button" id="submit" name="submit" className="btn btn-secondary cancle">Cancel</button> */}
            </div>
        )
    }
}
