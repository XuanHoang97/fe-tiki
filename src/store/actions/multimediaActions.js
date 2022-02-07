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
                dispatch(fetchAllSlideSuccess(res.data.slides.reverse()))
            } else {
                dispatch(fetchAllSlideFailed());
            }
        } catch (e) {
            dispatch(fetchAllSlideFailed());
            console.log('fetchAllSlideFailed error', e)
        }
    }
}

export const fetchAllSlideSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_SLIDE_SUCCESS,
    listSlide: data
})

export const fetchAllSlideFailed = () => ({
    type: actionTypes.FETCH_ALL_SLIDE_FAILED,
})

//create slide
export const CreateSlide = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createSlides(data);
            if (res && res.data.errCode === 0) {
                dispatch(createSlideSuccess());
                dispatch(fetchAllSlide());
                toast.success('Thêm mới slide thành công !')
            } else {
                dispatch(createSlideFailed());
            }
        } catch (e) {
            dispatch(createSlideFailed());
            console.log('saveSlideFailed error', e)
        }
    }
}

export const createSlideSuccess = () => ({
    type: actionTypes.CREATE_SLIDE_SUCCESS,
})

export const createSlideFailed = () => ({
    type: actionTypes.CREATE_SLIDE_FAILED,
})

//edit slide
export const EditSlide = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editSlides(data);
            if (res && res.data.errCode === 0) {
                dispatch(editSlideSuccess());
                dispatch(fetchAllSlide());
                toast.success('Cập nhật slide thành công !')
            } else {
                dispatch(editSlideFailed());
            }
        } catch (e) {
            dispatch(editSlideFailed());
            console.log('editSlideFailed error', e)
        }
    }
}

export const editSlideSuccess = () => ({
    type: actionTypes.EDIT_SLIDE_SUCCESS,
})

export const editSlideFailed = () => ({
    type: actionTypes.EDIT_SLIDE_FAILED,
})

//delete slide
export const DeleteSlide = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteSlides(id);
            if (res && res.data.errCode === 0) {
                dispatch(deleteSlideSuccess());
                dispatch(fetchAllSlide());
                toast.success('Xóa slide thành công !')
            } else {
                dispatch(deleteSlideFailed());
            }
        } catch (e) {
            dispatch(deleteSlideFailed());
            console.log('deleteSlideFailed error', e)
        }
    }
}

export const deleteSlideSuccess = () => ({
    type: actionTypes.DELETE_SLIDE_SUCCESS,
})

export const deleteSlideFailed = () => ({
    type: actionTypes.DELETE_SLIDE_FAILED,
})

//get all special category
export const fetchAllSpecialCategory = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllSpecialCategory('ALL');
            if (res && res.data.errCode === 0) {
                dispatch(fetchAllSpecialCategorySuccess(res.data.specialCategories.reverse()))
            } else {
                dispatch(fetchAllSpecialCategoryFailed());
            }
        } catch (e) {
            dispatch(fetchAllSpecialCategoryFailed());
            console.log('fetchAllSpecialCategoryFailed error', e)
        }
    }
}

export const fetchAllSpecialCategorySuccess = (data) => ({
    type: actionTypes.FETCH_ALL_SPECIAL_CATEGORY_SUCCESS,
    listSpecialCategory: data
})

export const fetchAllSpecialCategoryFailed = () => ({
    type: actionTypes.FETCH_ALL_SPECIAL_CATEGORY_FAILED,
})


//create special category
export const CreateSpecialCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createSpecialCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch(createSpecialCategorySuccess());
                dispatch(fetchAllSpecialCategory());
                toast.success('Thêm mới danh mục thành công !')
            } else {
                dispatch(createSpecialCategoryFailed());
            }
        } catch (e) {
            dispatch(createSpecialCategoryFailed());
            console.log('saveSpecialCategoryFailed error', e)
        }
    }
}

export const createSpecialCategorySuccess = () => ({
    type: actionTypes.CREATE_SPECIAL_CATEGORY_SUCCESS,
})

export const createSpecialCategoryFailed = () => ({
    type: actionTypes.CREATE_SPECIAL_CATEGORY_FAILED,
})

//edit special category
export const EditSpecialCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editSpecialCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch(editSpecialCategorySuccess());
                dispatch(fetchAllSpecialCategory());
                toast.success('Cập nhật danh mục thành công !')
            } else {
                dispatch(editSpecialCategoryFailed());
            }
        } catch (e) {
            dispatch(editSpecialCategoryFailed());
            console.log('editSpecialCategoryFailed error', e)
        }
    }
}

export const editSpecialCategorySuccess = () => ({
    type: actionTypes.EDIT_SPECIAL_CATEGORY_SUCCESS,
})

export const editSpecialCategoryFailed = () => ({
    type: actionTypes.EDIT_SPECIAL_CATEGORY_FAILED,
})


//delete special category
export const DeleteSpecialCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteSpecialCategory(id);
            if (res && res.data.errCode === 0) {
                dispatch(deleteSpecialCategorySuccess());
                dispatch(fetchAllSpecialCategory());
                toast.success('Xóa danh mục thành công !')
            } else {
                dispatch(deleteSpecialCategoryFailed());
            }
        } catch (e) {
            dispatch(deleteSpecialCategoryFailed());
            console.log('deleteSpecialCategoryFailed error', e)
        }
    }
}

export const deleteSpecialCategorySuccess = () => ({
    type: actionTypes.DELETE_SPECIAL_CATEGORY_SUCCESS,
})

export const deleteSpecialCategoryFailed = () => ({
    type: actionTypes.DELETE_SPECIAL_CATEGORY_FAILED,
})

//get all status slide
export const getStatusSlide = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ACTIVE');
            if (res && res.data.errCode === 0) {
                dispatch(getStatusSlideSuccess(res.data.data));
            } else {
                dispatch(getStatusSlideFailed());
            }
        } catch (e) {
            dispatch(getStatusSlideFailed());
            console.log('getStatusSlideFailed error', e)
        }
    }
}

export const getStatusSlideSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_STATUS_SLIDE_SUCCESS,
    listStatus: data
})

export const getStatusSlideFailed = () => ({
    type: actionTypes.FETCH_ALL_STATUS_SLIDE_FAILED,
})