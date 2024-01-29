import React from 'react'
import "./userEdit.css";
import UserDetails from '../UserDetails/UserDetails';
import EditForm from '../UserEditForm/EditForm';
import { Link } from 'react-router-dom';
const UserEdit = () => {
  return (
    <div className='userEditPage'>
      <div className="userHeader">
        <h1>Edit User</h1>
        <Link to="/newuser">
          <button className='userCreate'>Create</button>
        </Link>
      </div>
      <div className="userEditPageDetails">
        <UserDetails />
        <EditForm />
      </div>

    </div>
  )
}

export default UserEdit