import actionTypes from './actionTypes';
import {
    logout,
} from '../../services/authService';

import { toast } from "react-toastify";

// Register

// Login

// Logout
export const logoutAccount = () => {
    return async (dispatch) => {
        try {
            await logout();
            dispatch({
                type: actionTypes.LOGOUT_SUCCESS
            });
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            }
        }
    }
}

export const getUser = (userInfo) => ({
    type: actionTypes.GET_USER,
    userInfo: userInfo,
})

// Refresh Token
// export const refreshToken = () => {
//     return async (dispatch) => {
//         try {
//             const response = await verifyToken();
//             dispatch({
//                 type: actionTypes.REFRESH_TOKEN_SUCCESS,
//                 payload: response.data.accessToken
//             });
//         } catch (error) {
//             if (error.response) {
//                 toast.error(error.response.data.message);
//             }
//         }
//     }
// }


