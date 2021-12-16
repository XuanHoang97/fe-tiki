import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    searchUser,
    getAllProduct,
    getAllCategory,
    getAllNewsAndEvent,
    createNewProduct
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

//fetch all product
export const fetchProducts = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllProduct('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllProductsSuccess(res.data.products))
            } else {
                toast.error('fetch all product error !')
                dispatch(fetchAllProductsFailed());
            }
        } catch (e) {
            toast.error('fetch all product error !')
            dispatch(fetchAllProductsFailed());
            console.log('fetchAllProductsFailed error', e)
        }
    }
}

export const fetchAllProductsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    listProduct: data
})

export const fetchAllProductsFailed = () => ({
    type: actionTypes.FETCH_ALL_PRODUCTS_FAILED,
})

//create a new product
export const CreateNewProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveProductSuccess());
                dispatch(fetchProducts());
                toast.success('Thêm mới sản phẩm thành công !')
            } else {
                dispatch(saveProductFailed());
            }
        } catch (e) {
            dispatch(saveProductFailed());
            console.log('saveProductFailed error', e)
        }
    }
}

export const saveProductSuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
})

export const saveProductFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_FAILED,
})

//fetch status product
export const fetchStatusProduct = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('STATUS_PRODUCT');
            if(res && res.data.errCode === 0){
                dispatch(fetchStatusProductSuccess(res.data.data))
            }else{
                toast.error('fetch status product error !')
                dispatch(fetchStatusProductFailed());
            }
        } catch (e) {
            toast.error('fetch status product error !')
            dispatch(fetchStatusProductFailed());
            console.log('fetchStatusProductFailed error', e)
        }
    }
}

export const fetchStatusProductSuccess = (data) => ({
    type: actionTypes.FETCH_STATUS_PRODUCT_SUCCESS,
    listStatus: data
})

export const fetchStatusProductFailed = () => ({
    type: actionTypes.FETCH_STATUS_PRODUCT_FAILED,
})   

//fetch supplier product
export const fetchSupplierProduct = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('PROVINCE');
            if(res && res.data.errCode === 0){
                dispatch(fetchSupplierProductSuccess(res.data.data))
            }else{
                toast.error('fetch supplier product error !')
                dispatch(fetchSupplierProductFailed());
            }
        } catch (e) {
            toast.error('fetch supplier product error !')
            dispatch(fetchSupplierProductFailed());
            console.log('fetchSupplierProductFailed error', e)
        }
    }
}

export const fetchSupplierProductSuccess = (data) => ({
    type: actionTypes.FETCH_SUPPLIER_PRODUCT_SUCCESS,
    listSupplier: data
})

export const fetchSupplierProductFailed = () => ({
    type: actionTypes.FETCH_SUPPLIER_PRODUCT_FAILED,
}) 


//fetch all category
export const fetchAllCategory = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCategory('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllCategorySuccess(res.data.category))
            } else {
                toast.error('fetch all category error !')
                dispatch(fetchAllCategoryFailed());
            }
        } catch (e) {
            toast.error('fetch all category error !')
            dispatch(fetchAllCategoryFailed());
            console.log('fetchAllCategoryFailed error', e)
        }
    }
}

export const fetchAllCategorySuccess = (data) => ({
    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    listCategory: data
})

export const fetchAllCategoryFailed = () => ({
    type: actionTypes.FETCH_ALL_CATEGORIES_FAILED,
})

//fetch all news and event
export const fetchAllNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllNewsAndEvent('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllNewsSuccess(res.data.news))
            } else {
                toast.error('fetch all news and event error !')
                dispatch(fetchAllNewsFailed());
            }
        } catch (e) {
            toast.error('fetch all news and event error !')
            dispatch(fetchAllNewsFailed());
            console.log('fetchAllNewsFailed error', e)
        }
    }
}

export const fetchAllNewsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_NEWS_SUCCESS,
    listNews: data
})

export const fetchAllNewsFailed = () => ({
    type: actionTypes.FETCH_ALL_NEWS_FAILED,
})



