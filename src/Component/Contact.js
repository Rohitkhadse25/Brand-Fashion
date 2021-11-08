import React, { useState } from 'react'

const Contact = () => {
const [data, setData]= useState({
  fullname:'',
  email:'',
  phone:'',
})

const InputEvent =(event)=> {
const {name, value}= event.target;
setData((preVal)=> {
  return{
    ...preVal,
    [name]: value,
  }
})
}

  const formSubmit= (e) => {
e.preventDefault();
alert(`My name is ${data.fullname}. My email is ${data.email}. My mobile no. is ${data.phone}`)
  }
    return (
      <div>
        <div className='my-5'>
        <h1 className='text-center'> Contact Us </h1>
        </div>
        <div className="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto"> 
        <form onSubmit={formSubmit}>
        <div className="mb-3 mx-3">
          <label htmlFor="exampleInputName" className="form-label">Your Name</label>
          <input type="text" className="form-control" id="exampleInputName" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name " />
          <div id="" className="form-text"></div>
        </div>
        <div className="mb-3 mx-3">
        <label HtmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email}  onChange={InputEvent} placeholder="Enter your email here"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone lse.</div>
      </div>
        <div className="mb-3 mx-3" >
          <label HtmlFor="exampleInputNumber" className="form-label">Mobile No.</label>
          <input type="Number" className="form-control" id="" name="phone" value={data.phone}  onChange={InputEvent} placeholder="Enter your mobile number"/>
        </div>
        <div className="mb-3 mx-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" HtmlFor="exampleCheck1">You must agree before submitting</label>
        </div>
        <button type="submit" className="btn btn-outline-primary mx-3">Submit Form</button>
      </form>
      </div>
        </div>
        </div>
        </div>
    )
}

export default Contact
