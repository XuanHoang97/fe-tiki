import actionTypes from './actionTypes';
import {
    getAllCart,
    addToCart
} from "../../services/clientService";
import { toast } from "react-toastify";

//get all cart
export const fetchAllCart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCart('ALL');
            if (res && res.data.errCode === 0) {
                dispatch(fetchAllCartSuccess(res.data.cart))
            } else {
                dispatch(fetchAllCartFailed());
            }
        } catch (e) {
            dispatch(fetchAllCartFailed());
            console.log('fetchPositionStart error', e)
        }
    }
}

export const fetchAllCartSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_CART_SUCCESS,
    listCart: data,
})

export const fetchAllCartFailed = () => ({
    type: actionTypes.FETCH_ALL_CART_FAILED
})

//add to cart
export const AddToCart= (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await addToCart(data);
            if (res && res.data.errCode === 0) {
                dispatch(addToCartSuccess())
                toast.success('Sản phẩm đã được thêm vào giỏ hàng');
                dispatch(fetchAllCart());
            } else {
                dispatch(addToCartFailed());
                toast.error('Lỗi thêm sản phẩm vào giỏ hàng');
            }
        } catch (e) {
            dispatch(addToCartFailed());
            console.log('fetchPositionStart error', e)
        }
    }
}

export const addToCartSuccess = () => ({
    type: actionTypes.ADD_TO_CART_SUCCESS,
})

export const addToCartFailed = () => ({
    type: actionTypes.ADD_TO_CART_FAILED
})



