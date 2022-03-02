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
export const fetchGender = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('GENDER');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_GENDER,
                    payload: res.data.data
                })
            }
        } catch (e) {
            console.log('fetchGender error', e)
        }
    }
}

//fetch role 
export const fetchRole = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ROLE,
                    payload: res.data.data
                })
            }
        } catch (e) {
            console.log('fetchRole error', e)
        }
    }
}

//fetch position
export const fetchPosition = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_POSITION,
                    payload: res.data.data
                })
            }
        } catch (e) {
            console.log('fetchPosition error', e)
        }
    }
}

//create a new user
export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createUser(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_USER,
                });
                dispatch(fetchAllUser());
                toast.success('Thêm mới thành viên thành công !')
            }
        } catch (e) {
            console.log('saveUserFailed error', e)
        }
    }
}


//get all users
export const fetchAllUser = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');

            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_USERS,
                    payload: res.data.users.reverse()
                })
            }
        } catch (e) {
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
                    type: actionTypes.DELETE_USER,
                });
                dispatch(fetchAllUser());
                toast.success('Xoá thành viên thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.EDIT_USER,
                });
                dispatch(fetchAllUser());
                toast.success('Cập nhật tài khoản thành công !')
            }
        } catch (e) {
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

export const URLSearch = (data) => {
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
                    type: actionTypes.SEARCH,
                    payload: res.data.info
                })
            }
        } catch (e) {
            console.log('searchFailed error', e)
        }
    }
}

// Filter product by price
export const filterPrice = (keyword, price, priceFrom, priceTo) => {
    return async(dispatch, getState) => {
        try {
            let res = await FilterProductByPrice(keyword, price, priceFrom, priceTo);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FILTER_PRODUCT,
                    payload: res.data.info
                })
            }
        } catch (e) {
            console.log('filterFailed error', e)
        }
    }
}

// get all range price
export const getAllRangePrice = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('PRICE_RANGE');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.ALL_RANGE_PRICE,
                    payload: res.data.data
                })
            }
        } catch (e) {
            console.log('getAllRangePrice error', e)
        }
    }
}












