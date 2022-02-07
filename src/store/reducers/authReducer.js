import actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: null,
    isAuthenticated: false,


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
