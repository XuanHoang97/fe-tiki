import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllNewsAndEvent,
    createNews,
    editNews,
    deleteNews,
    paginationNewsAndEvent,
} from "../../services/userService"
import { toast } from "react-toastify"

//fetch all news and event
export const fetchAllNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllNewsAndEvent('ALL');

            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_NEWS,
                    payload: res.data.news.reverse()
                })
            } 
        } catch (e) {
            console.log('fetchAllNewsFailed error', e)
        }
    }
}

// pagination news and event
export const paginationNews = (inputData) => {
    return async(dispatch, getState) => {
        try {
            let res = await paginationNewsAndEvent(inputData);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_NEWS,    
                    payload: res.data.result.reverse()
                })
            }
        } catch (e) {
            toast.error('pagination news and event error !')
        }
    }
}

//fetch allCode news and event
export const fetchStatusNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('STATUS_NEWS');
            if(res && res.data.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_CODE_NEWS,
                    payload: res.data.data
                })
            }
        } catch (e) {
            toast.error('fetch all code news error !')
        }
    }
}

//create news and event
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

//edit news and event
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

//delete news and event
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