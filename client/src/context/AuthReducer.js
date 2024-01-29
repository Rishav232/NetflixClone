const AuthReducer = (state, action) => {

    switch (action.type) {
        case "GET_AUTH_START":
            return {
                user: [],
                isFetching: true,
                error: false
            }
        case "GET_AUTH_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_AUTH_FAIL":
            return {
                user: [],
                isFetching: false,
                error: true
            }
        default:
            return { ...state };
    }
}
export default AuthReducer;