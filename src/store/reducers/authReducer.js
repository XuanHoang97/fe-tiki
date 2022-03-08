import actionTypes from '../actions/actionTypes';

const initialState = {
    tokens: null,
    isAuthenticated: false,
    user: null,
    notify: [],
    notifyUnread: []
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        // Logout
        case actionTypes.LOGOUT:
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

            // Update user when update
        case actionTypes.UPDATE_USER:
            return {
                ...state,
                user: action.userInfo
            }

            // get notify unread
        case actionTypes.GET_NOTIFY_UNREAD:
            return {
                ...state,
                notifyUnread: action.payload
            }

            // get all notify
        case actionTypes.GET_ALL_NOTIFY:
            return {
                ...state,
                notify: action.payload
            }

            // filter notify 
        case actionTypes.FILTER_NOTIFY:
            return {
                ...state,
                notify: action.payload
            }

        default:
            return state;
    }
}
export default authReducer;
