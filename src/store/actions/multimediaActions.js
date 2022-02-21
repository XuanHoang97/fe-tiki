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
                    type: actionTypes.FETCH_ALL_SLIDE,
                    payload: res.data.slides.reverse()
                })
            }
        } catch (e) {
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
                    type: actionTypes.CREATE_SLIDE,
                });
                dispatch(fetchAllSlide());
                toast.success('Thêm mới slide thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.EDIT_SLIDE,
                });
                dispatch(fetchAllSlide());
                toast.success('Cập nhật slide thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.DELETE_SLIDE,
                });
                dispatch(fetchAllSlide());
                toast.success('Xóa slide thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.FETCH_SPECIAL_CATEGORY,
                    payload: res.data.specialCategories.reverse()
                })
            }
        } catch (e) {
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
                    type: actionTypes.CREATE_SPECIAL_CATEGORY,
                });
                dispatch(fetchAllSpecialCategory());
                toast.success('Thêm mới danh mục thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.EDIT_SPECIAL_CATEGORY,
                });
                dispatch(fetchAllSpecialCategory());
                toast.success('Cập nhật danh mục thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.DELETE_SPECIAL_CATEGORY,
                });
                dispatch(fetchAllSpecialCategory());
                toast.success('Xóa danh mục thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.FETCH_ALL_STATUS_SLIDE,
                    payload: res.data.data
                });
            }
        } catch (e) {
            console.log('getStatusSlideFailed error', e)
        }
    }
}