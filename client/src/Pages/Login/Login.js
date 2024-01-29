import React, { useContext, useState } from 'react'
import "./login.scss"
import { login } from '../../context/getapicalls';
import {AuthContext} from "../../context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const {dispatch}=useContext(AuthContext);
    const handleClick=(e)=>{
        e.preventDefault();
        login(email,password,dispatch)
        navigate("/");
    }
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            </div>
        </div>
        <div className="container">
                <form  className="email">
                <h1>SIGN IN</h1>
                <input type="email" placeholder='Email or Phone Number' onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=>setpassword(e.target.value)}/>
                <button className='button' onClick={handleClick}>Get Started</button>
                <span>New to Netflix? <Link to="/register"><b>Sign up now</b></Link></span>
                <span>This page is protected by Google reCAPTCHA to ensure you are 
                not a bot. <b>Learn More</b></span>
                </form>
                
        </div>
    </div>
  )
}

export default Login