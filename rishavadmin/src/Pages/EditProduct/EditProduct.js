import React, { useContext, useState } from 'react'
import "./editproduct.css";
import { CloudUpload } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import storage from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { MovieContext } from '../../context/movieContext/MovieContext';
import { updateMovie } from '../../context/movieContext/getapicalls';
const EditProduct = () => {
    const location = useLocation();
    const movies = location.state.movie;
    
    const {dispatch}=useContext(MovieContext);
    const navigate=useNavigate();
    const [editMovie, seteditMovie] = useState(null);
    const [trailer, settrailer] = useState(null);
    const [video, setvideo] = useState(null);
    const [img, setImg] = useState(null);
    const [upload, setupload] = useState(0);

    const handleChange=(e)=>{
        seteditMovie({...editMovie,[e.target.name]:e.target.value})
    }
    const handleUpload=(e)=>{
        e.preventDefault();
        uploaded([
            {file:video,label:"video"},
            {file:trailer,label:"trailer"},
            {file:img,label:"img"},
        ])
    }
    const uploaded = (items) => {

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

                    seteditMovie((prev)=>{return {...prev,[item.label]:url}})
                    setupload((prev) => prev + 1);
                })
            })

        });

    }
    const handleUpdate=(e)=>{
        e.preventDefault();
        updateMovie(movies._id,editMovie,dispatch);
        navigate("/products");
    }
    return (
        <div className='editProduct'>
            <div className="Editheader">
                <h1>MOVIE</h1>
                <Link to="/newproducts">
                    <button className='productCreate'>Create</button>
                </Link>
            </div>
            <div className="editProductWrapper">
                <div className="editProductitem">
                    <div className="editProductitems">
                        <div className="productmembers">
                            <div className="productmemberImg">
                                <img src={movies.img} alt="" className="productPic" />
                            </div>
                            <div className="productmemberName">
                                <span className='name'>{movies.title}</span>
                            </div>
                        </div>
                        <div className="productDetailsBottom">
                            <div className="productDetails">
                                <div className="productKey">ID:</div>
                                <div className="productvalue">{movies._id}</div>
                            </div>
                            <div className="productDetails">
                                <div className="productKey">Genre:</div>
                                <div className="productvalue">{movies.genre}</div>
                            </div>
                            <div className="productDetails">
                                <div className="productKey">Year:</div>
                                <div className="productvalueactive">{movies.year}</div>
                            </div>
                            <div className="productDetails">
                                <div className="productKey">Limit:</div>
                                <div className="productvalueinstock">{movies.limit}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editProductitemform">
                    <form action="" className='productForm'>
                        <div className="productformLeft">

                            <div className="productEditDetails">
                                <label>Movie Title</label>
                                <input type="text" placeholder={movies.title} name="title" className="producttext" onChange={handleChange}/>
                            </div>
                            <div className="productEditDetails">
                                <label>Year</label>
                                <input type="text" placeholder={movies.year} name="year" className="producttext" onChange={handleChange}/>
                            </div>
                            <div className="productEditDetails">
                                <label>Genre</label>
                                <input type="text" placeholder={movies.genre} name="genre" className="producttext" onChange={handleChange}/>
                            </div>
                            <div className="productEditDetails">
                                <label>Limit</label>
                                <input type="number" placeholder={movies.limit} name="limit" className="producttext" onChange={handleChange}/>
                            </div>
                            <div className="productEditDetails">
                                <label>Trailer</label>
                                <input type="file" className="producttexter" onChange={(e)=>{settrailer(e.target.files[0])}}/>
                            </div>
                            <div className="productEditDetails">
                                <label>Video</label>
                                <input type="file" className="producttexter" onChange={(e)=>{setvideo(e.target.files[0])}}/>
                            </div>
                        </div>
                        <div className="productformRight">
                            <div className="productformImgDetails">
                                <img src={movies.img} alt="" className="productformImg" />

                                <label htmlFor='fileImg'><CloudUpload className='productImgDownload' /></label>
                                <input type="file" id="fileImg" style={{ display: "none" }} onChange={(e)=>{setImg(e.target.files[0])}}/>
                            </div>
                            {
                                upload===3?(
                                    <button className='productformCreate' onClick={handleUpdate}>Update</button>
                                ):(
                                <button className='productformCreate' onClick={handleUpload}>Upload</button>
                                )
                            }
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct