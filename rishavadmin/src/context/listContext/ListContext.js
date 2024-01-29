import ListReducer from "./ListReducer";
import {createContext, useReducer} from "react";
const INIT_STATE = {
    list: [],
    isFetching: true,
    error: false
};

export const ListContext=createContext(INIT_STATE);

export const ListContextProvider=({children})=>{
     
    const [state,dispatch]=useReducer(ListReducer,INIT_STATE);

    return <ListContext.Provider value={
        {list:state.list,
        isFetching:state.isFetching,
        error:state.error,
        dispatch}
    }>
        {children}
    </ListContext.Provider>
}