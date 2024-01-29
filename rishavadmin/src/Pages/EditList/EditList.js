import React from 'react'
import "./editlist.css";
import { Link, useLocation } from 'react-router-dom';
const EditList = () => {
    const location = useLocation();
    const movies = location.state.list;

    return (
        <div className='editProduct'>
            <div className="Editheader">
                <h1>LIST</h1>
                <Link to="/newlist">
                    <button className='productCreate'>Create</button>
                </Link>
            </div>
            <div className="editProductWrapper">
                <div className="editProductitem">
                    <div className="editProductitems">
                        <div className="productmembers">
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
                                <div className="productvalueactive">{movies.type}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editProductitemform">
                    <form action="" className='productForm'>
                        <div className="productformLeft">

                            <div className="productEditDetails">
                                <label>List Title</label>
                                <input type="text" placeholder={movies.title} className="producttext" />
                            </div>
                            <div className="productEditDetails">
                                <label>Type</label>
                                <input type="text" placeholder={movies.type} className="producttext" />
                            </div>
                            <div className="productEditDetails">
                                <label>Genre</label>
                                <input type="text" placeholder={movies.genre} className="producttext" />
                            </div>
                        </div>
                        <div className="productformRight">
                            <button className='productformCreate'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditList