export const loginstart=()=>({
        type:"LOGIN_START"
});
export const loginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
});
export const loginfail=()=>({
    type:"LOGIN_FAIL"
});