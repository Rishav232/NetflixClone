import axios from "axios";
import { loginSuccess, loginfail, loginstart } from "./authAction";

export const login=async(user,dispatch)=>{
    dispatch(loginstart());
    try {
        const res=await axios.post("/auth/login",user);
        // console.log(res.data.user);
        dispatch(loginSuccess(res.data.user));
    } catch (error) {
        dispatch(loginfail());
    }
}