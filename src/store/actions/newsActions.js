import actionTypes from './actionTypes';
import {
    getAllNewsAndEvent,
    createNews,
    editNews,
    deleteNews,
} from "../../services/userService"
import { toast } from "react-toastify"

// fetch news
export const fetchAllNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllNewsAndEvent('ALL');
            dispatch({
                type: actionTypes.FETCH_ALL_NEWS,
                payload: res.data.news.reverse()
            })
        } catch (e) {
            console.log('fetchAllNewsFailed error', e)
        }
    }
}

//create news
export const CreateNews = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNews(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_NEWS,
                });
                dispatch(fetchAllNews());
                toast.success('Thêm mới tin tức thành công !')
            }
        } catch (e) {
            console.log('saveNewsFailed error', e)
        }
    }
}

//edit news
export const EditNews = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editNews(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_NEWS,
                });
                dispatch(fetchAllNews());
                toast.success('Sửa tin tức thành công !')
            }
        } catch (e) {
            console.log('editNewsFailed error', e)
        }
    }
}

//delete news
export const DeleteNews = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteNews(id);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_NEWS,
                });
                dispatch(fetchAllNews());
                toast.success('Xóa tin tức thành công !')
            }
        } catch (e) {
            console.log('deleteNewsFailed error', e)
        }
    }
}