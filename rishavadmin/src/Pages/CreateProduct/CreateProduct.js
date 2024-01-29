import React, { useContext, useState } from 'react'
import "./createproduct.css";
import storage from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { MovieContext } from '../../context/movieContext/MovieContext';
import { createMovie } from '../../context/movieContext/getapicalls';
import {useNavigate} from "react-router-dom";
const CreateProduct = () => {

    const {dispatch}=useContext(MovieContext);
    const navigate=useNavigate();
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [imgTitle, setimgTitle] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    const [uploaded, setuploaded] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value });
        console.log(e.target.name,value);
    }
    const upload = (items) => {

        items.forEach(item => {

            const store = ref(storage, `/items/${item.file.name}`);
            const storageTask = uploadBytesResumable(store, item.file);
            storageTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
            }, (err) => {
                console.log(err)
            }, () => {
                getDownloadURL(storageTask.snapshot.ref).then(url => {

                    setMovie((prev)=>{return {...prev,[item.label]:url}})

                    setuploaded((prev) => prev + 1);
                })
            })

        });

    }
    const handleClick = (e) => {
        e.preventDefault();

        upload([
            { file: img, label: "img" },
            { file: imgSm, label: "imgSm" },
            { file: imgTitle, label: "imgTitle" },
            { file: trailer, label: "trailer" },
            { file: video, label: "video" }
        ])
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        createMovie(movie,dispatch);
        navigate("/products");

    }
    return (
        <div className='createProductcontainer'>
            <h1>New Movie</h1>
            <form action="" className='createproductForm'>
                <div className="createproductEditDetails">
                    <label htmlFor='productfileImg'>Image</label>
                    <input type="file" id="productfileImg" name='img' onChange={(e) => { setImg(e.target.files[0]) }} />
                </div>
                <div className="createproductEditDetails">
                    <label htmlFor='productfileTitleImg'>Title Image</label>
                    <input type="file" id="productfileTitleImg" name='imgTitle' onChange={(e) => { setImgSm(e.target.files[0]) }} />
                </div>
                <div className="createproductEditDetails">
                    <label htmlFor='productfileThumbImg'>Thumbnail Image</label>
                    <input type="file" id="productfileThumbImg" name='imgSm' onChange={(e) => { setimgTitle(e.target.files[0]) }}/>
                </div>
                <div className="createproductEditDetails">
                    <label>Title</label>
                    <input type="text" placeholder="Title" className="createproducttext" name="title" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Description</label>
                    <input type="text" placeholder="Description" className="createproducttext" name="description" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Year</label>
                    <input type="text" placeholder="Year" className="createproducttext" name="year" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Genre</label>
                    <input type="text" placeholder="Genre" className="createproducttext" name="genre" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Limit</label>
                    <input type="text" placeholder="Limit" className="createproducttext" name="limit" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label>Duration</label>
                    <input type="text" placeholder="Duration" className="createproducttext" name="duration" onChange={(e) => { handleChange(e) }} />
                </div>
                <div className="createproductEditDetails">
                    <label htmlFor='isSeries'>Is Series</label>
                    <select className="newproductSelect" name="isSeries" id="isSeries" onChange={(e) => { handleChange(e) }}>
                        <option value=""></option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="createproductEditDetails">
                    <label htmlFor='trailer'>Trailer</label>
                    <input type="file" id="trailer" name="trailer" onChange={(e) => { setTrailer(e.target.files[0]) }} />
                </div>
                <div className="createproductEditDetails">
                    <label htmlFor='video'>Video</label>
                    <input type="file" id="video" name="video" onChange={(e) => { setVideo(e.target.files[0]) }} />
                </div>
                {uploaded === 5 ? (
                    <button className='createproductformCreate' onClick={handleSubmit}>Create</button>
                ) : (
                    <button className='createproductformCreate' onClick={handleClick}>Upload</button>
                )}

            </form>
        </div>
    )
}

export default CreateProduct