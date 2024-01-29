const MovieReducer=(state,action)=>{
     switch(action.type){
        case "GET_MOVIE_START":
            return{
                movies:[],
                isFetching:true,
                error:false
        }
        case "GET_MOVIE_SUCCESS":
            return{
                movies:action.payload,
                isFetching:false,
                error:false
        }
        case "GET_MOVIE_FAIL":
            return{
                movies:[],
                isFetching:false,
                error:true
        }
        case "DELETE_MOVIE_START":
            return{
                movies:[...state.movies],
                isFetching:true,
                error:false
        }
        case "DELETE_MOVIE_SUCCESS":
            return{
                movies:state.movies.filter((m)=>m._id!==action.payload),
                isFetching:false,
                error:false
        }
        case "DELETE_MOVIE_FAIL":
            return{
                movies:[...state.movies],
                isFetching:false,
                error:true
        }
        case "CREATE_MOVIE_START":
            return{
                movies:[...state.movies],
                isFetching:true,
                error:false
        }
        case "CREATE_MOVIE_SUCCESS":
            return{
                movies:[...state.movies,action.payload],
                isFetching:false,
                error:false
        }
        case "CREATE_MOVIE_FAIL":
            return{
                movies:[...state.movies],
                isFetching:false,
                error:true
        }
        case "UPDATE_MOVIE_START":
            return{
                movies:[...state.movies],
                isFetching:true,
                error:false
        }
        case "UPDATE_MOVIE_SUCCESS":
            return{
                movies:state.movies.map((m)=>{
                    if(m._id===action.payload.id)
                    return action.payload.movie;

                    return m;
                }),
                isFetching:false,
                error:false
        }
        case "UPDATE_MOVIE_FAIL":
            return{
                movies:[...state.movies],
                isFetching:false,
                error:true
        }

        default:
            return {...state};
     }
}
export default MovieReducer;