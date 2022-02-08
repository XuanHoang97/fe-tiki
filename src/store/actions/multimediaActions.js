import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllSlides,
    createSlides,
    editSlides,
    deleteSlides,
    getAllSpecialCategory,
    createSpecialCategory,
    editSpecialCategory,
    deleteSpecialCategory,
} from "../../services/userService"
import { toast } from "react-toastify"

//get all slide
export const fetchAllSlide = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllSlides('ALL');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_SLIDE_SUCCESS,
                    payload: res.data.slides.reverse()
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_SLIDE_FAILED,
                    payload: res.data.errMessage
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_SLIDE_FAILED,
            });
            console.log('fetchAllSlideFailed error', e)
        }
    }
}

//create slide
export const CreateSlide = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createSlides(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_SLIDE_SUCCESS,
                });
                dispatch(fetchAllSlide());
                toast.success('Thêm mới slide thành công !')
            } else {
                dispatch({
                    type: actionTypes.CREATE_SLIDE_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CREATE_SLIDE_FAILED,
            });
            console.log('saveSlideFailed error', e)
        }
    }
}

//edit slide
export const EditSlide = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editSlides(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_SLIDE_SUCCESS,
                });
                dispatch(fetchAllSlide());
                toast.success('Cập nhật slide thành công !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_SLIDE_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_SLIDE_FAILED,
            });
            console.log('editSlideFailed error', e)
        }
    }
}

//delete slide
export const DeleteSlide = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteSlides(id);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_SLIDE_SUCCESS,
                });
                dispatch(fetchAllSlide());
                toast.success('Xóa slide thành công !')
            } else {
                dispatch({
                    type: actionTypes.DELETE_SLIDE_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.DELETE_SLIDE_FAILED,
            });
            console.log('deleteSlideFailed error', e)
        }
    }
}

//get all special category
export const fetchAllSpecialCategory = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllSpecialCategory('ALL');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_SPECIAL_CATEGORY_SUCCESS,
                    payload: res.data.specialCategories.reverse()
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_SPECIAL_CATEGORY_FAILED,
                    payload: res.data.errMessage
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_SPECIAL_CATEGORY_FAILED,
            });
            console.log('fetchAllSpecialCategoryFailed error', e)
        }
    }
}

//create special category
export const CreateSpecialCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createSpecialCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_SPECIAL_CATEGORY_SUCCESS,
                });
                dispatch(fetchAllSpecialCategory());
                toast.success('Thêm mới danh mục thành công !')
            } else {
                dispatch({
                    type: actionTypes.CREATE_SPECIAL_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CREATE_SPECIAL_CATEGORY_FAILED,
            });
            console.log('saveSpecialCategoryFailed error', e)
        }
    }
}

//edit special category
export const EditSpecialCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editSpecialCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_SPECIAL_CATEGORY_SUCCESS,
                });
                dispatch(fetchAllSpecialCategory());
                toast.success('Cập nhật danh mục thành công !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_SPECIAL_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_SPECIAL_CATEGORY_FAILED,
            });
            console.log('editSpecialCategoryFailed error', e)
        }
    }
}

//delete special category
export const DeleteSpecialCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteSpecialCategory(id);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_SPECIAL_CATEGORY_SUCCESS,
                });
                dispatch(fetchAllSpecialCategory());
                toast.success('Xóa danh mục thành công !')
            } else {
                dispatch({
                    type: actionTypes.DELETE_SPECIAL_CATEGORY_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.DELETE_SPECIAL_CATEGORY_FAILED,
            });
            console.log('deleteSpecialCategoryFailed error', e)
        }
    }
}

//get all status slide
export const getStatusSlide = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ACTIVE');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_STATUS_SLIDE_SUCCESS,
                    payload: res.data.data
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_STATUS_SLIDE_FAILED,
                    payload: res.data.errMessage
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_STATUS_SLIDE_FAILED,
            });
            console.log('getStatusSlideFailed error', e)
        }
    }
}