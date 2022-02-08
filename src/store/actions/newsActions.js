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
                    type: actionTypes.FETCH_ALL_NEWS_SUCCESS,
                    payload: res.data.news.reverse()
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_NEWS_FAILED,
                    payload: res.data.errMessage
                });
                toast.error('fetch all news and event error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_NEWS_FAILED,
            });
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
                    type: actionTypes.FETCH_ALL_NEWS_SUCCESS,    
                    payload: res.data.result.reverse()
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_NEWS_FAILED,
                    payload: res.data.errMessage
                });
                toast.error('pagination news and event error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_NEWS_FAILED,
            });
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
                    type: actionTypes.FETCH_ALLCODE_NEWS_SUCCESS,
                    payload: res.data.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_NEWS_FAILED,
                    payload: res.data.errMessage
                });
                toast.error('fetch all code news error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_NEWS_FAILED,
            });
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
                    type: actionTypes.CREATE_NEWS_SUCCESS,
                });
                dispatch(fetchAllNews());
                toast.success('Thêm mới tin tức thành công !')
            } else {
                dispatch({
                    type: actionTypes.CREATE_NEWS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CREATE_NEWS_FAILED,
            });
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
                    type: actionTypes.EDIT_NEWS_SUCCESS,
                });
                dispatch(fetchAllNews());
                toast.success('Sửa tin tức thành công !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_NEWS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_NEWS_FAILED,
            });
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
                    type: actionTypes.DELETE_NEWS_SUCCESS,
                });
                dispatch(fetchAllNews());
                toast.success('Xóa tin tức thành công !')
            } else {
                dispatch({
                    type: actionTypes.DELETE_NEWS_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.DELETE_NEWS_FAILED,
            });
            console.log('deleteNewsFailed error', e)
        }
    }
}