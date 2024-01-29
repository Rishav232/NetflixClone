import React, { useState } from 'react'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);

    return () => (window.scrollY = null)

  };
  const handleClick=(e)=>{
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="Netflix-Logo.png" alt="" />
          <Link to="/" className='link'>
            <span>Homepage</span>
          </Link>
          <Link to="/series" className='link'>
            <span className='navbarmainlink'>Series</span>
          </Link>
          <Link to="/movies" className='link'>
            <span className='navbarmainlink'>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className='icons' />
          <span>KID</span>
          <Notifications className='icons' />
          <img src="blank-profile-picture.jpg" alt="" />
          <div className="profile">
            <ArrowDropDown className='icons' />
            <div className="options">
              <span>Profile</span>
              <span>Settings</span>
              <span onClick={handleClick}>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar