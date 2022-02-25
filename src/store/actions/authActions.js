import actionTypes from './actionTypes';
import {
    logout,
    updateUser
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


// update user
export const EditUSer = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await updateUser(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_USER,
                    userInfo: res.data.user
                });
                toast.success('Cập nhật tài khoản thành công !')
            }
        } catch (e) {
            toast.error('update the user error !')
        }
    }
}




