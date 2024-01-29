import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import "./featured.scss"
import { useEffect, useState } from "react"
import axios from "axios";

const FeaturedMovie = ({type,setgenre}) => {
  
  const [featured, setFeatured] = useState({});
  const getRandom=async()=>{
    try {
      const res=await axios.get(`/movies/random?type=${type}`,{
        headers:{
          token: JSON.parse(localStorage.getItem("user")).accesssToken
        }
      })
      setFeatured(res.data.movies[0]);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getRandom();
  }, [type])
  
  return (
    <div className="featured">
      {
        type&&(
          <div className="category">
            <span>{type==="movie"?"Movie":"Series"}</span>
            <select name="Genre" id="genre" onChange={(e)=>setgenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
          </div>
        )
      }
      <img src={featured.img} alt=""  />
      <div className="info">
        <img src={featured.img} alt="" />
         <span className="desc">
         {featured.desc}
         </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined/>
            <span>info</span>
          </button>
        </div>
      </div>
      
    </div>

  )
}

export default FeaturedMovie