import React, { useState } from 'react'
import "./user.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {rows} from "../../dummyData";
import { Link } from 'react-router-dom';
const User = () => {
    const [data, setData] = useState(rows);
    const handleDelete=(id)=>{

        let d=data.filter((item)=>item.id!==id);
        setData(d);

    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'username', headerName: 'Username', width: 130, renderCell: (params) => {
                return (
                    <div className="userList">
                        <img className="userImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 130 },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                         <Link to={`/users/edit/${params.row.id}`}>
                        <button className='userEdit'>Edit</button>
                        </Link>
                        <DeleteOutline className='userDeleteButton' onClick={()=>{handleDelete(params.row.id)}}/>
                    </>
                )
            }
        }
    ];

    


    return (
        <div className="userComponent">
            <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default User