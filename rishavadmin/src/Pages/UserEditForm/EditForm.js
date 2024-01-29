import React from 'react'
import "./editform.css";
import {  FileUpload } from '@mui/icons-material';
const EditForm = () => {
  
  return (
    <div className='editform'>
      <div className="userTitleHeader">
        <h3>Edit</h3>
      </div>
      <form action="" className='userForm'>
        <div className="formLeft">
          
            <div className="userEditDetails">
              <label>Username</label>
              <input type="text" placeholder="Messi232" className="text" />
            </div>
            <div className="userEditDetails">
              <label>FullName</label>
              <input type="text" placeholder="20.10.1999" className="text" />
            </div>
            <div className="userEditDetails">
              <label>Email</label>
              <input type="email" placeholder="+8266409751" className="text" />
            </div>
            <div className="userEditDetails">
              <label>Phone</label>
              <input type="number" placeholder="dummy@yahoo.com" className="text" />
            </div>
            <div className="userEditDetails">
              <label>Address</label>
              <input type="text" placeholder="Gotham City|America" className="text" />
            </div>
        </div>
        <div className="formRight">
              <div className="formImgDetails">
                <img src="https://images4.alphacoders.com/667/667463.jpg" alt="" className="formImg" />

                <label htmlFor='fileImg'><FileUpload /></label>
                <input type="file" id="fileImg" style={{ display: "none" }} />
              </div>
              <button className='fromCreate'>Update</button>
        </div>
        </form>
    </div>
  )
}

export default EditForm