import actionTypes from './actionTypes';
import {
    getOrder,
    filterOrder,
    updateOrder,
} from "../../services/clientService";
import { getAllCodeService } from 'services/userService';
import { toast } from 'react-toastify';

//QUANTITY
export const countProduct = (payload) => {
    return ({
        type: actionTypes.COUNT,
        payload
    })
}

export const increment = () => {
    return ({
        type: actionTypes.INCREMENT_QUANTITY
    })
}

export const decrement = () => {
    return ({
        type: actionTypes.DECREMENT_QUANTITY
    })
}


//when user not login
//add to cart
export const addToCart = (payload) => {
    return ({
        type: actionTypes.ADD_TO_CART,
        payload
    })
}

//delete item cart
export const deleteItemCart = (id) => {
    return ({
        type: actionTypes.DELETE_ITEM_CART,
        payload: id
    })
}

//delete all item cart
export const deleteAllItemCart = () => {
    return ({
        type: actionTypes.DELETE_ALL_ITEM_CART,
    })
}


//get all delivery
export const getAllDelivery = () => {
    return async(dispatch, getState) => {
        try{
            let res = await getAllCodeService('DELIVERY');
            if(res && res.data.errCode === 0){
                dispatch(getAllDeliverySuccess(res.data.data));
            }else{
                dispatch(getAllDeliveryFailed());
            }
        }catch(e){
            dispatch(getAllDeliveryFailed());
            console.log('getAllDelivery error', e)
        }
    }
}

export const getAllDeliverySuccess = (data) => ({
    type: actionTypes.FETCH_ALL_DELIVERY_SUCCESS,
    dataDelivery: data
})

export const getAllDeliveryFailed = () => ({
    type: actionTypes.FETCH_ALL_DELIVERY_FAILED,
})

//get all payment
export const getAllPayment = () => {
    return async(dispatch, getState) => {
        try{
            let res = await getAllCodeService('PAYMENT');
            if(res && res.data.errCode === 0){
                dispatch(getAllPaymentSuccess(res.data.data));
            }else{
                dispatch(getAllPaymentFailed());
            }
        }catch(e){
            dispatch(getAllPaymentFailed());
            console.log('getAllPayment error', e)
        }
    }
}

export const getAllPaymentSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_PAYMENT_SUCCESS,
    dataPayment: data
})

export const getAllPaymentFailed = () => ({
    type: actionTypes.FETCH_ALL_PAYMENT_FAILED,
})

//get all order
export const getAllOrder = () => {
    return async(dispatch, getState) => {
        try{
            let res = await getOrder('ALL');
            if(res && res.data.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALL_ORDER_SUCCESS,
                    payload: res.data.result.reverse()
                });
            }else{
                dispatch({
                    type: actionTypes.FETCH_ALL_ORDER_FAILED,
                });
            }
        }catch(e){
            dispatch({
                type: actionTypes.FETCH_ALL_ORDER_FAILED,
            });
            console.log('getAllOrder error', e)
        }
    }
}

// get status order
export const getStatusOrder = () => {
    return async (dispatch) => {
        try {
            const res = await getAllCodeService('ORDER_STATUS');
            dispatch({
                type: actionTypes.FETCH_STATUS_ORDER_SUCCESS,
                payload: res.data.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}


// Filter order by status
export const filterOrderByStatus = (status) => {
    return async (dispatch) => {
        try {
            const res = await filterOrder(status);
            dispatch({
                type: actionTypes.FILTER_ORDER_BY_STATUS_SUCCESS,
                payload: res.data.result
            });
        } catch (error) {
            console.log(error);
        }
    }
}

// Update order
export const updateOrderStatus = (id, status) => {
    return async (dispatch) => {
        try {
            const res = await updateOrder(id, status);
            dispatch({
                type: actionTypes.UPDATE_ORDER_SUCCESS,
                payload: res.data.result
            });
            dispatch(getAllOrder());
            dispatch(filterOrderByStatus('S0'))
            toast.success('Xác nhận đơn hàng thành công');
        } catch (error) {
            console.log(error);
        }
    }
}








