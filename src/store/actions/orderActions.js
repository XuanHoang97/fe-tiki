import actionTypes from './actionTypes';
import {
    sendBill,
    getBill
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