import actionTypes from './actionTypes';
import {
    logout,
} from '../../services/authService';

import { toast } from "react-toastify";

// Logout
export const logoutAccount = () => {
    return async (dispatch) => {
        try {
            await logout();
            dispatch({
                type: actionTypes.LOGOUT
            });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            }
        }
    }
}

// get user
export const getUser = (userInfo) => ({
    type: actionTypes.GET_USER,
    userInfo: userInfo,
})



