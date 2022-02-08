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
                    payload: res.data.category
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
                dispatch(createCategorySuccess());
                dispatch(fetchAllCategory());
                toast.success('Thêm danh mục thành công !')
            } else {
                dispatch(createCategoryFailed());
            }
        } catch (e) {
            dispatch(createCategoryFailed());
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
                dispatch(editCategorySuccess());
                dispatch(fetchAllCategory());
                toast.success('Sửa danh mục thành công !')
            } else {
                dispatch(editCategoryFailed());
            }
        } catch (e) {
            dispatch(editCategoryFailed());
            console.log('editCategoryFailed error', e)
        }
    }
}

export const editCategorySuccess = () => ({
    type: actionTypes.EDIT_CATEGORY_SUCCESS,
})

export const editCategoryFailed = () => ({
    type: actionTypes.EDIT_CATEGORY_FAILED,
})


//delete category
export const DeleteCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteCategory(id);
            if (res && res.data.errCode === 0) {
                dispatch(deleteCategorySuccess());
                dispatch(fetchAllCategory());
                toast.success('Xóa danh mục thành công !')
            } else {
                dispatch(deleteCategoryFailed());
            }
        } catch (e) {
            dispatch(deleteCategoryFailed());
            console.log('deleteCategoryFailed error', e)
        }
    }
}

export const deleteCategorySuccess = () => ({
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
})

export const deleteCategoryFailed = () => ({
    type: actionTypes.DELETE_CATEGORY_FAILED,
})

//detail category
export const DetailCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await detailCategory(id);
            if (res) {
                dispatch({
                    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
                    payload: res.data.categoryData
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_CATEGORIES_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_CATEGORIES_FAILED,
            });
            console.log('detailCategoryFailed error', e)
        }
    }
}