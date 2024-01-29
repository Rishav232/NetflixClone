import { getAuthFail, getAuthStart, getAuthSuccess } from "./AuthAction"
import axios from "axios";
export const login=async(email,password,dispatch)=>{
    dispatch(getAuthStart());
    try {
        const res=await axios.post("/auth/login",{email,password});
        // console.log(res.data)
        dispatch(getAuthSuccess(res.data.user));
    } catch (error) {
        dispatch(getAuthFail());
        console.log(error);
    }
}