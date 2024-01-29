import axios from "axios";
import { CreateListFail, CreateListStart, CreateListSuccess, deleteListFail, deleteListStart, deleteListSuccess, getListFail, getListStart, getListSuccess } from "./ListAction";
export const getList=async(dispatch)=>{
    dispatch(getListStart());
    try {
        const res=await axios.get("list/",{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        dispatch(getListSuccess(res.data));
    } catch (error) {
        dispatch(getListFail());
    }
}
export const deleteList=async(id,dispatch)=>{
    dispatch(deleteListStart());
    try {
        await axios.delete(`list/${id}`,{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFail());
    }
}
export const createList=async(list,dispatch)=>{
    dispatch(CreateListStart());
    
    try {
        const res=await axios.post(`list/`,list,{
            headers:{
                token:JSON.parse(localStorage.getItem("user")).accesssToken
            }
        })
        // console.log(res.data);
        dispatch(CreateListSuccess(res.data.newList));
    } catch (error) {
        dispatch(CreateListFail());
    }
}