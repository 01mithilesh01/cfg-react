import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosInstance from "../axios"  
const Register = () => {
  let formStyle={
    background: 'white',
    padding: '1.5em',
    borderRadius: '1em'
  }
  let formGroupStyle={
    justifyContent:'center',
    alignItems: 'center'
  }
  let nameStyle={
    width: '35%',
    display: 'inline',
    margin: '0px 15px'
  }
  let labelStyle={
    float: 'left',
    margin: '7px 0px',
    fontWeight: '500',
    fontFamily: 'Fira Sans, sans-serif'
  }
  let textStyle={
    width: '95%'
  }
  let headingStyle={
    fontWeight: '500',
    fontFamily: 'Fira Sans, sans-serif'
  }
  let containerStyle={
    display: 'flex',
    fontWeight: '400',
    fontFamily: 'Fira Sans, sans-serif',
    width: '100%',
    height: '100%'
  }
  let rootStyle={
    width: '35vw',
    margin: '55px 490px',
    background: '#e1edf7',
    borderRadius:'1em',
    padding: '30px 20px'
  }
  const history = useHistory();
  const initialFormData=Object.freeze({
    username:"",
    email:"",
    password:""
  });
  const [formData,updateFormData]=useState(initialFormData);
  const handleChange= (e) =>{
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  }
  const handleSubmit = () =>{
    console.log(formData);
    axiosInstance.post('api/user/create',{
      username: formData.username,
      email: formData.email,
      password: formData.password,
    })
    .then((res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      axiosInstance.defaults.headers["Authorization"] =
        "JWT " + localStorage.getItem("access_token");
      history.push("/");
      console.log(res);
      //console.log(res.data);
    });
  }
  return (
    <div style={rootStyle}>
    <div className='container' style={containerStyle}>
    <form className="register" id="register" style = {formStyle} onClick={handleSubmit}>
      <h2 className="form-title" style={headingStyle}>Register</h2><br /><br />

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="name" style={labelStyle}><i class="zmdi zmdi-account material-icons-name"></i>
        &nbsp; Username&nbsp;  
        </label>
        <input
          type="text"
          name="username"
          className="form-control name"
          autoComplete="off"
          placeholder="First name" 
          style={nameStyle}
          onChange={handleChange}
        />
        {/* <input
          type="text"
          name="name"
          className="form-control name"
          autoComplete="off"
          placeholder="Last name"
          style={nameStyle}
        /> */}
      </div>
      <br />

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="email" style={labelStyle}>
          <i class="zmdi zmdi-email material-icons-name"></i>
          &nbsp; Email Address
        </label>
        <input
          type="email"
          name="email"
          className="form-control email"
          autoComplete="off"
          placeholder="Your email"
          style={textStyle}
          onChange={handleChange}
        />
      </div>
      <br />

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="password" style={labelStyle}>
          <i class="zmdi zmdi-lock material-icons-name"></i>
          &nbsp; Password
        </label>
        <input
          type="password"
          name="password"
          className="form-control password"
          autoComplete="off"
          placeholder="Enter your password"
          style={textStyle}
          onChange={handleChange}
        ></input>
      </div>
      <br />

      <div className="form-group" style = {formGroupStyle}>
        <label htmlFor="cpassword" style={labelStyle}>
          <i class="zmdi zmdi-lock material-icons-name"></i>
          &nbsp; Confirm Password
        </label>
        <input
          type="cpassword"
          name="cpassword"
          className="form-control password"
          autoComplete="off"
          placeholder="Confirm your password"
          style={textStyle}
        ></input>
      </div>
      <br />

      <div className="form-group" style = {formGroupStyle}>
        <button type="submit" className="btn btn-primary btn-block" on>
          Sign Up
        </button>
        <p className="text-right">
          Already registered? <a href="/">Sign in</a>
        </p>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Register;