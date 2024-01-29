import { useEffect, useState } from "react"
import FeaturedMovie from "../Components/featuredMovies/FeaturedMovie"
import List from "../Components/list/List"
import Navbar from "../Components/navbar/Navbar"
import axios from"axios";
import "./home.scss"
import { useNavigate } from "react-router-dom";

const Home = ({type}) => {
  const [list, setlist] = useState([]);
  const [genre, setgenre] = useState(null);
  const navigate=useNavigate();
  const getList=async()=>{
    try {
      const data=await axios.get(`list${type ?"?type="+type:""}${type&genre?"&genre="+genre:""}`,
      {
        headers:{
          token:localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user")).accesssToken
        }
      })
      setlist(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if(!localStorage.getItem("user"))
    {
      navigate("/login")
    }
    
  }, [])
  useEffect(() => {
    getList();
  }, [type,genre])
  
  
  // console.log(list);
  return (
    <div className="home">
        <Navbar/> 
        <FeaturedMovie type={type} setgenre={setgenre}/>
        {list.map((list)=>(
          <List key={list._id} list={list}/>
        ))}
        
    </div>
  )
}

export default Home