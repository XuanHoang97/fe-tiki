import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    searchUser
} from "../../services/userService"
import { toast } from "react-toastify"

//fetch gender
export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService('GENDER');
            if (res && res.data.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


//fetch role 
export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.data.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error', e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//create a new user
export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
                toast.success('Thêm mới thành viên thành công !')
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

//get all users
export const fetchAllUsersStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllUSersSuccess(res.data.users.reverse()))
            } else {
                toast.error('fetch all user error !')
                dispatch(fetchAllUSersFailed());
            }
        } catch (e) {
            toast.error('fetch all user error !')
            dispatch(fetchAllUSersFailed());
            console.log('fetchAllUSersFailed error', e)
        }
    }
}

export const fetchAllUSersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    listUser: data
})

export const fetchAllUSersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})

//delete user 
export const deleteUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
                toast.success('Xoá thành viên thành công !')
            } else {
                toast.error('delete the user error !')
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})


//edit user
export const editUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.data.errCode === 0) {
                toast.success('update user succeed !')
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('update the user error !')
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error('update the user error !')
            dispatch(editUserFailed());
            console.log('editUserFailed error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

//SEARCH USER
export const searchUserInfo = (keyword) => {
    return async(dispatch, getState) => {
        try {
            let res = await searchUser(keyword);
            if (res && res.data.errCode === 0) {
                dispatch(searchUserSuccess(res.data.users))
            } else {
                toast.error('search user error !')
                dispatch(searchUserFailed());
            }
        } catch (e) {
            toast.error('search user error !')
            dispatch(searchUserFailed());
            console.log('searchUserFailed error', e)
        }
    }
}

export const searchUserSuccess = (data) => ({
    type: actionTypes.SEARCH_USER_SUCCESS,
    listUser: data
})

export const searchUserFailed = () => ({
    type: actionTypes.SEARCH_USER_FAILED,
})

