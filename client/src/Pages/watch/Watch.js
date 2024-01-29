import { ArrowBackOutlined } from '@mui/icons-material'
import React from 'react'
import "./watch.scss";
import { Link, useLocation } from 'react-router-dom';

const Watch = () => {
  const location = useLocation();
  const movies = location.state.movies;
  return (
    <div className='watch'>
      <Link to="/">
        <div className="watchhome">
          <ArrowBackOutlined />
          <span>Home</span>
        </div>
      </Link>

      <video autoPlay progress="true" controls={true} src={movies.video}></video>

    </div>
  )
}

export default Watch