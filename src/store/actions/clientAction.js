import actionTypes from './actionTypes';
import {
    getAllCart,
    addItemToCart,
    deleteItemCart,
    getOrder,
} from "../../services/clientService";
import { toast } from "react-toastify";

import { getAllCodeService } from 'services/userService';

//QUANTITY
export const countProduct = (numberCart) => {
    return ({
        type: actionTypes.NUMBER_CART,
        numberCart
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

//Get all cart
export const GetAllCart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCart('ALL');
            if (res && res.data.errCode === 0) {
                dispatch(getAllCartSuccess(res.data.result))
            } else {
                toast.error('fetch all cart error !')
                dispatch(getAllCartFailed());
            }
        } catch (e) {
            toast.error('fetch all cart error !')
            dispatch(getAllCartFailed());
        }
    }
}

export const getAllCartSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_CART_SUCCESS,
    dataCart: data
})

export const getAllCartFailed = () => ({
    type: actionTypes.FETCH_ALL_CART_FAILED,
})

//Add to cart
export const addToCart = (data) => {
    return async(dispatch, getState) => {
        try{
            let res = await addItemToCart(data);
            if(res && res.data.errCode === 0){
                dispatch(addToCartSuccess());
                toast.success('Sản phẩm đã được thêm vào giỏ hàng');
                dispatch(GetAllCart());
            }else{
                dispatch(addToCartFailed());
            }
        }catch(e){
            dispatch(addToCartFailed());
            console.log('addToCart error', e)
        }
    }
}

export const addToCartSuccess = () => ({
    type: actionTypes.ADD_TO_CART_SUCCESS,

})

export const addToCartFailed = () => ({
    type: actionTypes.ADD_TO_CART_FAILED
})

//delete item cart
export const DeleteItemCart = (productId) => {
    return async(dispatch, getState) => {
        try{
            let res = await deleteItemCart(productId);
            if(res && res.data.errCode === 0){
                dispatch(deleteItemCartSuccess());
                dispatch(GetAllCart());
                toast.success('Sản phẩm đã được xóa khỏi giỏ hàng');
            }else{
                dispatch(deleteItemCartFailed());
            }
        }catch(e){
            dispatch(deleteItemCartFailed());
            console.log('deleteItemCart error', e)
        }
    }
}

export const deleteItemCartSuccess = () => ({
    type: actionTypes.DELETE_ITEM_CART_SUCCESS,
})

export const deleteItemCartFailed = () => ({
    type: actionTypes.DELETE_ITEM_CART_FAILED,
})

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





