import MovieReducer from "./MovieReducer";
import {createContext, useReducer} from "react";
const INIT_STATE = {
    movies: [],
    isFetching: true,
    error: false
};

export const MovieContext=createContext(INIT_STATE);

export const MovieContextProvider=({children})=>{
     
    const [state,dispatch]=useReducer(MovieReducer,INIT_STATE);

    return <MovieContext.Provider value={
        {movie:state.movies,
        isFetching:state.isFetching,
        error:state.error,
        dispatch}
    }>
        {children}
    </MovieContext.Provider>
}