import React, { useContext, useEffect, useState } from 'react'
import "./newlist.css";
import { MovieContext } from '../../context/movieContext/MovieContext';
import { getMovies } from '../../context/movieContext/getapicalls';
import { useNavigate } from "react-router-dom";
import { ListContext } from '../../context/listContext/ListContext';
import { createList } from '../../context/listContext/getapicalls';
const NewList = () => {

    const { movie, dispatch: disptachMovie } = useContext(MovieContext);
    const { dispatch } = useContext(ListContext);
    const navigate = useNavigate();
    const [list, setList] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value;
        setList({ ...list, [e.target.name]: value });
    }
    const handleSelect = (e) => {
        let arr=Array.from(e.target.selectedOptions,(option)=>option.value);
        setList({ ...list, [e.target.name]: arr });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        createList(list, dispatch);
        navigate("/list");

    }
    useEffect(() => {
        getMovies(disptachMovie);

    }, [disptachMovie])

    return (
        <div className='createProductcontainer'>
            <h1>New List</h1>
            <form action="" className='createproductForm'>
                <div className="createproductEditDetails">
                    <label>Title</label>
                    <input type="text" placeholder="Title" className="createproducttext" name="title" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" className="createproducttext" name="genre" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Type</label>
                    <select className="newproductSelect" name="type" id="active" onChange={(e) => { handleChange(e) }}>
                        <option value="type">Type</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                    </select>
                </div>
                <div className="createproductEditDetails">
                    <label>Content</label>
                    <select multiple className="newproductSelect" name="content" id="active" style={{height:"5rem"}} onChange={(e) => { handleSelect(e) }}>
                        {
                            movie.map((m) => {
                                return (<option key={m._id} value={m._id}>{m.title}</option>)

                            })
                        }

                    </select>
                </div>

                <button className='createproductformCreate' onClick={handleSubmit}>Create</button>

            </form>
        </div>
    )
}

export default NewList