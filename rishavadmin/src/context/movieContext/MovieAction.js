export const getMovieStart=()=>({
    type:"GET_MOVIE_START"

});
export const getMovieSuccess=(movies)=>({
    
        type:"GET_MOVIE_SUCCESS",
        payload:movies
});
export const getMovieFail=()=>({
    type:"GET_MOVIE_FAIL"

});
export const CreateMovieStart=()=>({
    type:"CREATE_MOVIE_START"

});
export const CreateMovieSuccess=(movie)=>({
    
        type:"CREATE_MOVIE_SUCCESS",
        payload:movie
});
export const CreateMovieFail=()=>({
    type:"CREATE_MOVIE_FAIL"
});
export const deleteMovieStart=()=>({
    type:"DELETE_MOVIE_START"

});
export const deleteMovieSuccess=(id)=>({
    
        type:"DELETE_MOVIE_SUCCESS",
        payload:id
});
export const deleteMovieFail=()=>({
    type:"DELETE_MOVIE_FAIL"
});
export const updateMovieStart=()=>({
    type:"UPDATE_MOVIE_START"

});
export const updateMovieSuccess=(id,movie)=>({
    
        type:"UPDATE_MOVIE_SUCCESS",
        payload:{id,movie}
});
export const updateMovieFail=()=>({
    type:"UPDATE_MOVIE_FAIL"
});
