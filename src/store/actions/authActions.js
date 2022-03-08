import actionTypes from './actionTypes';
import {
    logout,
    updateUser,
    getNotify,
    getAllNotify,
    updateStatusNotify,
    MarkAllNotifyAsRead,
    filterNotify
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

// get notify unread
export const GetNotify = (userId, status) => {
    return async(dispatch, getState) => {
        try {
            let res = await getNotify(userId,status);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_NOTIFY_UNREAD,
                    payload: res.notify
                });
            }
        } catch (e) {
            toast.error('get notify error !')
        }
    }
}

export const GetAllNotify = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllNotify(userId);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_ALL_NOTIFY,
                    payload: res.notify.reverse()
                });
            }
        } catch (e) {
            toast.error('get notify error !')
        }
    }
}

// update status notify
export const UpdateStatusNotify = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await updateStatusNotify(data);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_NOTIFY,
                });
            }
        } catch (e) {
            toast.error('update status notify error !')
        }
    }
}

// mark all notify as read
export const MarkAllNotify = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await MarkAllNotifyAsRead(data);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.MARK_ALL_AS_READ,
                });
            }
        } catch (e) {
            toast.error('mark all notify as read error !')
        }
    }
}
// filterNotify
export const FilterNotify = (userId, type) => {
    return async(dispatch, getState) => {
        try {
            let res = await filterNotify(userId, type);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FILTER_NOTIFY,
                    payload: res.notify
                });
            }
        } catch (e) {
            toast.error('filter notify error !')
        }
    }
}


