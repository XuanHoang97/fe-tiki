import actionTypes from './actionTypes';
import {
    sendBill,
    getBill,
    getOrderToday,
    revenueToday
} from "../../services/adminService";
import { toast } from "react-toastify";

// Send bill
export const SendBillCustomer = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await sendBill(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.SEND_BILL,
                })
                toast.success('Gửi hoá đơn thành công');
            }
        } catch (e) {
            toast.error('Send bill fail', e)
        }
    }
}

// get bill
export const GetBill = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getBill('ALL');
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_BILL,
                    payload: res.data.result
                })
            }
        } catch (e) {
            toast.error('Get bill fail', e)
        }
    }
}

// get order today
export const GetOrderToday = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getOrderToday();
            dispatch({
                type: actionTypes.GET_ORDER_TODAY,
                payload: res.data.length
            })
        } catch (e) {
            toast.error('Get order today fail', e)
        }
    }
}

// revenue today
export const RevenueToday = () => {
    return async(dispatch, getState) => {
        try {
            let res = await revenueToday();
            dispatch({
                type: actionTypes.REVENUE_TODAY,
                payload: res.data.result
            })
        } catch (e) {
            toast.error('Get revenue today fail', e)
        }
    }
}

