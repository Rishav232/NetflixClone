import React, { useContext,useEffect } from 'react'
import "./listpage.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {ListContext} from "../../context/listContext/ListContext";
import { deleteList, getList} from  "../../context/listContext/getapicalls";
const ListPage = () => {
    const navigate=useNavigate();
    const {list,dispatch} = useContext(ListContext);

    const handleDelete=(id)=>{
        // console.log(id);
        deleteList(id,dispatch);
    }
    const handleClick=(m)=>{
        
        // console.log("hello");
        navigate(`/list/edit/${m._id}`,{state:{list:m}});
    }
    useEffect(() => {
      getList(dispatch)
    }, [dispatch])
    
    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },
        {
            field: 'title',
            headerName: 'Title',
            width: 250,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 160,
        },
        { field: 'genre', headerName: 'Genre', width: 200 },
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
        <div className="listpage">

            {list&&
            <DataGrid
                rows={list}
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

export default ListPage;