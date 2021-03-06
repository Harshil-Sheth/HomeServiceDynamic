import React,{useState,useEffect} from 'react'
import './profile.styles.css'

const Profile = () => {


const[firstname,setfirstname]=useState();
const[lastname,setlastname]=useState();
const[gender,setgender]=useState();
const[email,setemail]=useState();
const[mno,setmno]=useState();
const[address,setaddress]=useState();
const[area,setarea]=useState();
const[city,setcity]=useState();
const[image,setimage]=useState();


    const[details,setdetails]=useState('');
useEffect(()=>{
    var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  body: urlencoded,
  redirect: 'follow'
};
var id=1
fetch("http://localhost:4000/api/ViewCustomer/"+id, requestOptions)
.then(response => setdetails(response.data),console.log(response.data))
//   .then(response => response.json())
  .catch(error => console.log('error', error));
},[setdetails])


function handleSubmit(event){
    var myHeaders = new Headers();
    alert(firstname+lastname+gender)
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("firstname", firstname);
    urlencoded.append("lastname", lastname);
    urlencoded.append("gender", gender);
    urlencoded.append("mobile_no", mno);
    urlencoded.append("email", email);
    urlencoded.append("address", address);
    urlencoded.append("image", "abc.jpg");
    urlencoded.append("area", area);
    urlencoded.append("city", city);
    
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
				                            <h5 className="user-name">{details.map(({firstname,lastname})=>firstname+' '+lastname)}</h5>
				                            <h6 className="user-mobile_no">{details.map(({mobile_no})=>mobile_no)}</h6>
				                            <h6 className="user-email">{details.map(({email})=>email)}</h6>
			                            </div>
			                            {/* <div className="about">
				                            <h5>Address</h5>
				                            <p>Address Line: {details.map(({address})=>address)}</p>
				                            <p>Area :{details.map(({area})=>area)}</p>
				                            <p>City :{details.map(({city})=>city)}</p>
			                            </div> */}
		                            </div>
	                            </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
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
					                            <input type="text" name='firstname' defaultValue={details.map(({firstname})=>firstname)} onChange={e=>setfirstname(e.target.value)} className="form-control" id="firstName" placeholder="Enter First Name" />
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
					                            <input type="text" name='gender' defaultValue={details.map(({gender})=>gender)} onChange={e=>setgender(e.target.value)} className="form-control" id="gender" placeholder="Enter Gender" />
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
		                            			{/* <button type="button" id="submit" name="submit" className="btn btn-secondary cancle">Cancel</button> */}
		                            			<button type="submit" id="submit" name="submit" className="btn btn-primary" >Update</button>
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

export default Profile
