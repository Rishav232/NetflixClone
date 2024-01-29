export const getListStart=()=>({
    type:"GET_LIST_START"

});
export const getListSuccess=(list)=>({
    
        type:"GET_LIST_SUCCESS",
        payload:list
});
export const getListFail=()=>({
    type:"GET_LIST_FAIL"

});
export const CreateListStart=()=>({
    type:"CREATE_LIST_START"

});
export const CreateListSuccess=(list)=>({
    
        type:"CREATE_LIST_SUCCESS",
        payload:list
});
export const CreateListFail=()=>({
    type:"CREATE_LIST_FAIL"
});
export const deleteListStart=()=>({
    type:"DELETE_LIST_START"

});
export const deleteListSuccess=(id)=>({
    
        type:"DELETE_LIST_SUCCESS",
        payload:id
});
export const deleteListFail=()=>({
    type:"DELETE_LIST_FAIL"
});
