import actionTypes from './actionTypes';
import {
    getAllCategory,
    createCategory,
    deleteCategory,
    editCategory,
    detailCategory
} from "../../services/userService"
import { toast } from "react-toastify"

//fetch all category
export const fetchAllCategory = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCategory('ALL');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
                    listCategory: res.data.category
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_CATEGORIES_FAILED,
                });
                toast.error('fetch all category error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_CATEGORIES_FAILED,
            });
            toast.error('fetch all category error !')
        }
    }
}

//create category
export const CreateCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_CATEGORY_SUCCESS,
                });
                dispatch(fetchAllCategory());
                toast.success('Thêm danh mục thành công !')
            } else {
                dispatch({
                    type: actionTypes.CREATE_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CREATE_CATEGORY_FAILED,
            });
            console.log('createCategoryFailed error', e)
        }
    }
}

export const createCategorySuccess = () => ({
    type: actionTypes.CREATE_CATEGORY_SUCCESS,
})

export const createCategoryFailed = () => ({
    type: actionTypes.CREATE_CATEGORY_FAILED,
})

//edit category
export const EditCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_CATEGORY_SUCCESS,
                });
                dispatch(fetchAllCategory());
                toast.success('Sửa danh mục thành công !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_CATEGORY_FAILED,
            });
            console.log('editCategoryFailed error', e)
        }
    }
}

//delete category
export const DeleteCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteCategory(id);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_CATEGORY_SUCCESS,
                });
                dispatch(fetchAllCategory());
                toast.success('Xóa danh mục thành công !')
            } else {
                dispatch({
                    type: actionTypes.DELETE_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.DELETE_CATEGORY_FAILED,
            });
            console.log('deleteCategoryFailed error', e)
        }
    }
}

//detail category
export const DetailCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await detailCategory(id);
            if (res) {
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_IN_CATEGORY_SUCCESS,
                    payload: res.data.categoryData
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_IN_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_PRODUCT_IN_CATEGORY_FAILED,
            });
            console.log('detailCategoryFailed error', e)
        }
    }
}