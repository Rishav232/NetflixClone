import React, { useEffect, useState } from 'react'
import "./widgetsm.css"
import { Visibility } from '@mui/icons-material'
import axios from 'axios';
const WidgetSm = () => {

  const [users, setusers] = useState([]);

  const getUsers = async () => {

    const res = await axios.get("user/", {
      headers: {
        token: JSON.parse(localStorage.getItem("user")).accesssToken
      }
    })
    // console.log(res.data);
    setusers(res.data.user);
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className='widgetsm'>
      <span className="widgetTitle">
        New Join Members
      </span>
      <div className="widgetWrapper">
        {
          users.map((item) => {
            return <div key={item._id} className="members">
              <div className="memberImg">
                <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="memberPic" />
              </div>
              <div className="memberName">
                <span className='name'>{item.username}</span>
                {/* <span className='designation'>{item.email}</span> */}
              </div>
              <div className="memberbutton">
                <Visibility />
                <span className="memberAction">Display</span>
              </div>

            </div>

          })
        }
        {/* <div className="members">
          <div className="memberImg">
            <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="memberPic" />
          </div>
          <div className="memberName">
            <span className='name'>Rishav</span>
            <span className='designation'>Software Engineer</span>
          </div>
          <div className="memberbutton">
            <Visibility />
            <span className="memberAction">Display</span>
          </div>

        </div>
        <div className="members">
          <div className="memberImg">
            <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="memberPic" />
          </div>
          <div className="memberName">
            <span className='name'>Rishav</span>
            <span className='designation'>Software Engineer</span>
          </div>
          <div className="memberbutton">
            <Visibility />
            <span className="memberAction">Display</span>
          </div>

        </div>
        <div className="members">
          <div className="memberImg">
            <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="memberPic" />
          </div>
          <div className="memberName">
            <span className='name'>Rishav</span>
            <span className='designation'>Software Engineer</span>
          </div>
          <div className="memberbutton">
            <Visibility />
            <span className="memberAction">Display</span>
          </div>

        </div>
        <div className="members">
          <div className="memberImg">
            <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="memberPic" />
          </div>
          <div className="memberName">
            <span className='name'>Rishav</span>
            <span className='designation'>Software Engineer</span>
          </div>
          <div className="memberbutton">
            <Visibility />
            <span className="memberAction">Display</span>
          </div>

        </div> */}
      </div>
    </div>
  )
}

export default WidgetSm