import actionTypes from './actionTypes';
import {
    getOrder,
} from "../../services/clientService";
import { getAllCodeService } from 'services/userService';

//add product to cart
export const addProduct = (payload) => {
    return ({
        type: actionTypes.ADD_PRODUCT,
        payload
    })
}

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
                dispatch(getAllOrderSuccess(res.data.result));
            }else{
                dispatch(getAllOrderFailed());
            }
        }catch(e){
            dispatch(getAllOrderFailed());
            console.log('getAllOrder error', e)
        }
    }
}

export const getAllOrderSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_ORDER_SUCCESS,
    dataOrder: data
})

export const getAllOrderFailed = () => ({
    type: actionTypes.FETCH_ALL_ORDER_FAILED,
})





