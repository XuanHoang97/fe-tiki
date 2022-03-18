import actionTypes from './actionTypes';
import {
    sendBill
} from "../../services/adminService";
import { toast } from "react-toastify";

// Send bill
// add discount
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