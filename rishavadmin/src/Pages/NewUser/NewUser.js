import React from 'react'
import "./newuser.css";
const NewUser = () => {
  return (
    <div className='newuser'>
      <div className="newuserwrapper">
        <h1>New User</h1>
        <form className='newuserform'>
          <div className="newuserDetails">
            <label>Username</label>
            <input type="text" className='newtext' />
          </div>
          <div className="newuserDetails">
            <label>Full Name</label>
            <input type="text" className='newtext' />
          </div>
          <div className="newuserDetails">
            <label>Email</label>
            <input type="email" className='newtext' />
          </div>
          <div className="newuserDetails">
            <label>Password</label>
            <input type="password" className='newtext' />
          </div>
          <div className="newuserDetails">
            <label>Phone Number</label>
            <input type="number" className='newtext' />
          </div>
          <div className="newuserDetails">
            <label>Address</label>
            <input type="text" className='newtext' />
          </div>
          <div className="newuserDetails">
            <label>Gender</label>
            <div className="userGender">

              <input type="radio" id="male" name='male' value="male" />
              <label htmlFor="male">Male</label>

              <input type="radio" id="female" name='female' value="female" />
              <label htmlFor="female">Female</label>

              <input type="radio" id="others" name='others' value="others" />
              <label htmlFor="others">Others</label>
            </div>
          </div>

          <div className="newuserDetails">
            <label>Active</label>
            <select className="newuserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button className="newUserButton">Create</button>

        </form>
      </div>
    </div>
  )
}

export default NewUser