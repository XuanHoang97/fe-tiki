import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    users: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //login
        case actionTypes.USER_LOGIN_SUCCESS:
            let copyState = {...state };
            return {
                ...copyState,
            }

            //fetch gender
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = [];
            return {
                ...state,
            }

            //fetch role
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state,
            }

            //fetch all user
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.listUser;
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;