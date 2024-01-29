import React from 'react'
import "./userdetails.css";
import { PersonOutline,  Email,  CalendarToday, Smartphone, GpsNotFixed } from '@mui/icons-material';

const UserDetails = () => {
  return (
    <div className='userdetails'>
      <div className="userWrapper">
        <div className="usermembers">
          <div className="usermemberImg">
            <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="memberPic" />
          </div>
          <div className="usermemberName">
            <span className='name'>Rishav</span>
            <span className='designation'>Software Engineer</span>
          </div>
        </div>
        <div className="usermenu">
          <div className="userlistTitle">
            Account Details
          </div>
          <ul className="userlist">
            <li className='userlistItem'><PersonOutline className='userIcons'/>
              <span className='userlistContent'>Messi232</span>
            </li>
            <li className='userlistItem'><CalendarToday className='userIcons'/>
              <span className='userlistContent'>20.10.1999</span>
            </li>
          </ul>
        </div>
        <div className="usermenu">
          <div className="userlistTitle">
            Contact
          </div>
          <ul className="userlist">
            <li className='userlistItem'><Smartphone className='userIcons'/>
              <span className='userlistContent'>+8266409751</span>
            </li>
            <li className='userlistItem'><Email className='userIcons'/>
              <span className='userlistContent'>dummy@yahoo.com</span>
            </li>
            <li className='userlistItem'>
              <GpsNotFixed className='userIcons'/>
              <span className='userlistContent'>Gotham City|America</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserDetails