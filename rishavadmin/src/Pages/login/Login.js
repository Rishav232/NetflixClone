import React, { useContext, useState } from 'react'
import "./login.css";
import { login } from '../../context/authContext/apicalls';
import { AuthContext } from '../../context/authContext/authContext';

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const {isFetching,dispatch}=useContext(AuthContext);


    const handleClick=(e)=>{
    e.preventDefault();

    login({email,password},dispatch)
    }
    return (
        <div className="login-wrapper">
            <form className="login" action="">
                <input type="text" placeholder='email' className='loginInput' onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder='password' onChange={(e)=>setpassword(e.target.value)} className='loginInput'/>
                <button className='loginButton' onClick={(e)=>handleClick(e)} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}

export default Login