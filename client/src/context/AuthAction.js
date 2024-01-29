export const getAuthStart=()=>({
    type:"GET_AUTH_START"
})
export const getAuthSuccess=(auth)=>({
    type:"GET_AUTH_SUCCESS",
    payload:auth,
})
export const getAuthFail=()=>({
    type:"GET_AUTH_FAIL"
})