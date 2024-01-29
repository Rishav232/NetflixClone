import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import "./listitems.scss"
import { useEffect, useState } from "react"
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const ListItems = ({ item, index }) => {
  const navigate=useNavigate();
  const [mouseHover, setmouseHover] = useState(false);
  const [movies, setMovies] = useState({});
  const getMovies = async () => {
    try {
      const res = await axios.get(`movies/find/${item}`, {

        headers: {
          token: JSON.parse(localStorage.getItem("user")).accesssToken
        }
      })

      setMovies(res.data.getMovie);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMovies();
  }, [item])
  const handleClick=()=>{
    navigate("/watch",{state:{movies:movies}});
  }
  const trailer = movies.video;
  return (
      <div onClick={handleClick} className="listItems" onMouseEnter={() => setmouseHover(true)} onMouseLeave={() => setmouseHover(false)}
        style={{ left: mouseHover && index * 225 - 50 + index * 2.5 }}>
        <img src={movies.imgSm} alt="" />

        {mouseHover && (
          <>
            <video src={trailer} autoPlay={true} loop />
            <div className="iteminfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="details">
                <span className="limit">{movies.limit}</span>
                <span>{movies.year}</span>
              </div>
              <div className="movieInfo">
                {movies.desc}
              </div>
              <div className="genre">{movies.genre}</div>

            </div>
          </>
        )}
      </div>
  )
}

export default ListItems