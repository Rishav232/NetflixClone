import React from 'react'
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@mui/icons-material';
const Topbar = () => {
  return (
    <div className='topbar'>
        <div className="topbarwrapper">
            <div className="topleft">
              <span className="logo">Admin Dashboard</span>
            </div>
            <div className="topright">
              <div className="notification">
                <NotificationsNone/>
                <span className='logobadge'>2</span>
              </div>
              <div className="notification">
                <Language/>
                <span className='logobadge'>2</span>
              </div>
              <div className="notification">
                <Settings/>          
              </div>

              <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="profilePic"/>
            </div>
        </div>
    </div>
  )
}

export default Topbar