import actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: null,
    isAuthenticated: false,
    user: null

}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Register
        // Login
        // Logout
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                tokens: '',
                isAuthenticated: false
            }
            case actionTypes.GET_USER:
                return {
                    ...state,
                    user: action.userInfo
                }
        // Refresh Token
        case actionTypes.REFRESH_TOKEN_SUCCESS:
            return {
                ...state,
                tokens: action.payload,
                isAuthenticated: true
            }



        default:
            return state;
    }
}

export default authReducer;
