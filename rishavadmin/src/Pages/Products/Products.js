import React, { useContext,useEffect } from 'react'
import "./products.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {MovieContext} from "../../context/movieContext/MovieContext";
import {deleteMovies, getMovies} from  "../../context/movieContext/getapicalls";
const Products = () => {
    const navigate=useNavigate();
    const {movie,dispatch} = useContext(MovieContext);

    const handleDelete=(id)=>{
        // console.log(id);
        deleteMovies(id,dispatch);
    }
    const handleClick=(m)=>{
        
        // console.log("hello");
        navigate(`/products/edit/${m._id}`,{state:{movie:m}});
    }
    useEffect(() => {
      getMovies(dispatch)
    }, [dispatch])
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 70 },
        {
            field: 'movies', headerName: 'Movies', width: 250, renderCell: (params) => {
                return (
                    <div className="productList">
                        <img className="productImg" src={params.row.imgSm} alt="" />
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'genre', headerName: 'Genre', width: 130 },
        {
            field: 'year',
            headerName: 'Year',
            width: 90,
        },
        {
            field: 'limit',
            headerName: 'Limit',
            width: 160,
        },
        {
            field: 'isSeries',
            headerName: 'isSeries',
            width: 160,
        },

        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <button className='productEdit' onClick={()=>handleClick(params.row)}>Edit</button>
                        
                        <DeleteOutline className='productDeleteButton' onClick={()=>{handleDelete(params.row._id)}}/>
                    </>
                )
            }
        }
    ];

//    console.log(movie);
    return (
        <div className="ProductComponent">

            {movie&&
            <DataGrid
                rows={movie}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                getRowId={(r)=>r._id}
            />}
        </div>
    )
}

export default Products