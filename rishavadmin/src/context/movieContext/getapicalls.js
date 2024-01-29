import { CreateMovieFail, CreateMovieStart, CreateMovieSuccess, deleteMovieFail, deleteMovieStart, deleteMovieSuccess, getMovieFail, getMovieStart, getMovieSuccess, updateMovieFail, updateMovieStart, updateMovieSuccess } from "./MovieAction"
import axios from "axios";
export const getMovies=async(dispatch)=>{
    dispatch(getMovieStart());
    try {
        const res=await axios.get("movies/",{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        // console.log(res.data);
        dispatch(getMovieSuccess(res.data.movies));
    } catch (error) {
        dispatch(getMovieFail());
    }
}
export const deleteMovies=async(id,dispatch)=>{
    dispatch(deleteMovieStart());
    try {
        await axios.delete(`movies/${id}`,{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        
        dispatch(deleteMovieSuccess(id));
    } catch (error) {
        dispatch(deleteMovieFail());
    }
}
export const createMovie=async(movie,dispatch)=>{
    dispatch(CreateMovieStart());
    
    try {
        const res=await axios.post(`movies/`,movie,{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        // console.log(res.data);
        dispatch(CreateMovieSuccess(res.data.newMovie));
    } catch (error) {
        dispatch(CreateMovieFail());
    }
}
export const updateMovie=async(id,movie,dispatch)=>{
     dispatch(updateMovieStart());
     console.log(movie);
     try {
        const res=await axios.put(`http://localhost:5000/api/movies/${id}`,movie,{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        // console.log(res.data.updateMovie);
        dispatch(updateMovieSuccess(id,res.data.updateMovie));
     } catch (error) {
        dispatch(updateMovieFail());
     }
}