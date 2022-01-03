import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllNewsAndEvent,
    createNews,
    editNews,
    deleteNews,
} from "../../services/userService"
import { toast } from "react-toastify"


//fetch all news and event
export const fetchAllNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllNewsAndEvent('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllNewsSuccess(res.data.news.reverse()))
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

//fetch allCode news and event
export const fetchStatusNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('STATUS_NEWS');
            if(res && res.data.errCode === 0){
                dispatch(fetchStatusNewsSuccess(res.data.data))
            }else{
                toast.error('fetch all code news error !')
                dispatch(fetchStatusNewsFailed());
            }
        } catch (e) {
            toast.error('fetch all code news error !')
            dispatch(fetchStatusNewsFailed());
            console.log('fetchStatusNewsFailed error', e)
        }
    }
}

export const fetchStatusNewsSuccess = (data) => ({
    type: actionTypes.FETCH_ALLCODE_NEWS_SUCCESS,
    statusCodeNews: data
})

export const fetchStatusNewsFailed = () => ({
    type: actionTypes.FETCH_ALLCODE_NEWS_FAILED,
})




//create news and event
export const CreateNews = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNews(data);
            if (res && res.data.errCode === 0) {
                dispatch(createNewsSuccess());
                dispatch(fetchAllNews());
                toast.success('Thêm mới tin tức thành công !')
            } else {
                dispatch(createNewsFailed());
            }
        } catch (e) {
            dispatch(createNewsFailed());
            console.log('saveNewsFailed error', e)
        }
    }
}

export const createNewsSuccess = () => ({
    type: actionTypes.CREATE_NEWS_SUCCESS,
})

export const createNewsFailed = () => ({
    type: actionTypes.CREATE_NEWS_FAILED,
})

//edit news and event
export const EditNews = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editNews(data);
            if (res && res.data.errCode === 0) {
                dispatch(editNewsSuccess());
                dispatch(fetchAllNews());
                toast.success('Sửa tin tức thành công !')
            } else {
                dispatch(editNewsFailed());
            }
        } catch (e) {
            dispatch(editNewsFailed());
            console.log('editNewsFailed error', e)
        }
    }
}

export const editNewsSuccess = () => ({
    type: actionTypes.EDIT_NEWS_SUCCESS,
})

export const editNewsFailed = () => ({
    type: actionTypes.EDIT_NEWS_FAILED,
})

//delete news and event
export const DeleteNews = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteNews(id);
            if (res && res.data.errCode === 0) {
                dispatch(deleteNewsSuccess());
                dispatch(fetchAllNews());
                toast.success('Xóa tin tức thành công !')
            } else {
                dispatch(deleteNewsFailed());
            }
        } catch (e) {
            dispatch(deleteNewsFailed());
            console.log('deleteNewsFailed error', e)
        }
    }
}

export const deleteNewsSuccess = () => ({
    type: actionTypes.DELETE_NEWS_SUCCESS,
})

export const deleteNewsFailed = () => ({
    type: actionTypes.DELETE_NEWS_FAILED,
})