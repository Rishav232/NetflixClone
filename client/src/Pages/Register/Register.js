import React, { useRef, useState } from 'react'
import "./register.scss"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
    const navigate=useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [username, setusername] = useState("");
    const emailRef = useRef();
    const handleClick = () => {
        setemail(emailRef.current.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("/auth/register", { email, password, username });
            if(res.data.success)
            navigate("/login");

        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <button className='signin'>Sign in</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited TV Shows and more.</h1>
                <h2>Watch Anywhere.Cancel Anytime</h2>
                <p>Ready to watch?Enter your email to create or restart your membership.</p>
                {!email ? (
                    <div className="email">
                        <input type="email" placeholder='email address' ref={emailRef} />
                        <button className='loginButton' onClick={handleClick}>Get Started</button>
                    </div>
                ) : (
                    <form className="email">
                        <input type="text" placeholder='username' onChange={(e) => setusername(e.target.value)} />
                        <input type="password" placeholder='password' onChange={(e) => setpassword(e.target.value)} />
                        <button className='loginButton' onClick={handleSubmit}>Get Started</button>
                    </form>
                )}

            </div>
        </div>
    )
}

export default Register