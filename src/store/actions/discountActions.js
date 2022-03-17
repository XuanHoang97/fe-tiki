import actionTypes from './actionTypes';
import {
    addDiscount,
    getAllDiscount,
} from "../../services/adminService";
import { toast } from "react-toastify";

// add discount
export const AddGift = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await addDiscount(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.ADD_DISCOUNT,
                })
                toast.success('Thêm khuyến mãi thành công');
                dispatch(GetAllDiscount());
            }
        } catch (e) {
            toast.error('add discount fail', e)
        }
    }
}

// get all discount
export const GetAllDiscount = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllDiscount('ALL');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DISCOUNT,
                    payload: res.data.discount
                })
            }
        } catch (e) {
            toast.error('get all discount fail', e)
        }
    }
}
