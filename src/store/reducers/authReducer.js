import actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: null,
    isAuthenticated: false,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Logout
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                tokens: '',
                isAuthenticated: false
            }

        // Get user when Login
        case actionTypes.GET_USER:
            return {
                ...state,
                user: action.userInfo
            }

        default:
            return state;
    }
}

export default authReducer;
