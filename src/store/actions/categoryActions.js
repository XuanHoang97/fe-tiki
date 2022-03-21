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
            dispatch({
                type: actionTypes.FETCH_CATEGORIES,
                listCategory: res.data.category
            })
        } catch (e) {
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
                    type: actionTypes.CREATE_CATEGORY,
                });
                dispatch(fetchAllCategory());
                toast.success('Thêm danh mục thành công !')
            }
        } catch (e) {
            console.log('createCategoryFailed error', e)
        }
    }
}

//edit category
export const EditCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_CATEGORY,
                });
                dispatch(fetchAllCategory());
                toast.success('Sửa danh mục thành công !')
            } 
        } catch (e) {
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
                    type: actionTypes.DELETE_CATEGORY,
                });
                dispatch(fetchAllCategory());
                toast.success('Xóa danh mục thành công !')
            } 
        } catch (e) {
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
                    type: actionTypes.FETCH_PRODUCT_IN_CATEGORY,
                    payload: res.data.categoryData
                });
            }
        } catch (e) {
            console.log('detailCategoryFailed error', e)
        }
    }
}