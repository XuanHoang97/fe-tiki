import actionTypes from './actionTypes';
import {
    getAllRating
    
} from "../../services/adminService";
import { toast } from "react-toastify";

// get all rating
export const fetchRating = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllRating('ALL');
            dispatch({
                type: actionTypes.FETCH_ALL_RATING,
                payload: res.data.result.reverse()
            })
        } catch (e) {
            toast.error('fetch rating error', e)
        }
    }
}