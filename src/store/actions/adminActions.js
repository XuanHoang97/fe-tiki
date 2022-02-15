import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllUsers,
    createUser,
    deleteUserService,
    editUserService,
    search,
    FilterProductByPrice,
} from "../../services/userService"
import { toast } from "react-toastify"

// Login admin
export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo,
})

export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

//fetch gender
export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('GENDER');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_GENDER_SUCCESS,
                    payload: res.data.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_GENDER_FAILED
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_GENDER_FAILED
            });
            console.log('fetchGenderStart error', e)
        }
    }
}

//fetch role 
export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ROLE_SUCCESS,
                    payload: res.data.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ROLE_FAILED
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ROLE_FAILED
            });
            console.log('fetchRoleStart error', e)
        }
    }
}

//fetch position
export const fetchPositionStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_POSITION_SUCCESS,
                    payload: res.data.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_POSITION_FAILED
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_POSITION_FAILED
            });
            console.log('fetchPositionStart error', e)
        }
    }
}

//create a new user
export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createUser(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveUserSuccess());
                dispatch(fetchAllUser());
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
export const fetchAllUser = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');

            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
                    payload: res.data.users.reverse()
                })
            } else {
                toast.error('fetch all user error !')
                dispatch({
                    type: actionTypes.FETCH_ALL_USERS_FAILED
                });
            }
        } catch (e) {
            toast.error('fetch all user error !')
            dispatch({
                type: actionTypes.FETCH_ALL_USERS_FAILED
            });
            console.log('fetchAllUSersFailed error', e)
        }
    }
}

//delete user 
export const deleteUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_USER_SUCCESS,
                });
                dispatch(fetchAllUser());
                toast.success('Xoá thành viên thành công !')
            } else {
                dispatch({
                    type: actionTypes.DELETE_USER_FAILED
                });
                toast.error('delete the user error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.DELETE_USER_FAILED
            });
            console.log('deleteUserFailed error', e)
        }
    }
}

//edit user
export const editUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_USER_SUCCESS,
                });
                dispatch(fetchAllUser());
                toast.success('update user succeed !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_USER_FAILED
                });
                toast.error('update the user error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_USER_FAILED
            });
            toast.error('update the user error !')
        }
    }
}

//SEARCH

// keyword search
export const keywordSearch = (data) => {
    return ({
        type: actionTypes.SEARCH_KEYWORD,
        payload: data
    })
}

export const urlSearch = (data) => {
    return ({
        type: actionTypes.SEARCH_URL,
        payload: data
    })
}

export const searchResult = (keyword) => {
    return async(dispatch, getState) => {
        try {
            let res = await search(keyword);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.SEARCH_SUCCESS,
                    payload: res.data.info
                })
            } else {
                dispatch({
                    type: actionTypes.SEARCH_FAILED
                });
                toast.error('search error !')
            }
        } catch (e) {
            toast.error('search error !')
            dispatch({
                type: actionTypes.SEARCH_FAILED
            });
            console.log('searchFailed error', e)
        }
    }
}

// Filter product by price
export const filterProductByPrice = (keyword, price, priceFrom, priceTo) => {
    return async(dispatch, getState) => {
        try {
            let res = await FilterProductByPrice(keyword, price, priceFrom, priceTo);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FILTER_PRODUCT_SUCCESS,
                    payload: res.data.info
                })
            } else {
                dispatch({
                    type: actionTypes.FILTER_PRODUCT_FAILED
                });
                toast.error('filter error !')
            }
        } catch (e) {
            toast.error('filter error !')
            dispatch({
                type: actionTypes.FILTER_PRODUCT_FAILED
            });
            console.log('filterFailed error', e)
        }
    }
}









