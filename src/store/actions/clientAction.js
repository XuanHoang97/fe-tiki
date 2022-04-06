import actionTypes from './actionTypes';
import {
    getOrder,
    filterOrder,
    updateOrder,
    addItemToCartWithLogin,
    getCartByUser,
    deleteItemCartWithLogin,
    updateItemCartWithLogin,
    checkOutOrder,
    filterMyOrder
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

// Option 1: Order without login
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
            dispatch({
                type: actionTypes.FETCH_ALL_DELIVERY,
                payload: res.data.data
            })
        }catch(e){
            console.log('getAllDelivery error', e)
        }
    }
}

//get all payment
export const getAllPayment = () => {
    return async(dispatch, getState) => {
        try{
            let res = await getAllCodeService('PAYMENT');
            dispatch({
                type: actionTypes.FETCH_ALL_PAYMENT,
                payload: res.data.data
            })
        }catch(e){
            console.log('getAllPayment error', e)
        }
    }
}

//get all order
export const getAllOrder = () => {
    return async(dispatch, getState) => {
        try{
            let res = await getOrder('ALL');
            if(res && res.data.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_ALL_ORDER,
                    payload: res.data.result.reverse()
                });
            }
        }catch(e){
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
                type: actionTypes.FETCH_STATUS_ORDER,
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
                type: actionTypes.FILTER_ORDER_BY_STATUS,
                payload: res.data.result.reverse()
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
                type: actionTypes.UPDATE_ORDER,
                payload: res.data.result
            });
            toast.success('Xác nhận đơn hàng thành công');
        } catch (error) {
            console.log(error);
        }
    }
}

// ----------------------------------------------------
// Option 2: Order with login
//add to cart
export const addToCartLogin = (data, userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await addItemToCartWithLogin(data);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.ADD_TO_CART_LOGIN,
                    payload: res.result 
                });
                toast.success('Sản phẩm đã được thêm vào giỏ hàng !')
            }
        } catch (e) {
            console.log('add to cart fail', e)
        }
    }
}

// Get cart by user
export const GetCartByUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await getCartByUser(userId);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.GET_CART_BY_USER,
                    payload: res.result
                });
            }
        } catch (e) {
            console.log('get cart by user fail', e)
        }
    }
}

// Delete item cart
export const DeleteItemCartByUser = (productId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteItemCartWithLogin(productId);
                dispatch({
                    type: actionTypes.DELETE_ITEM_CART_LOGIN,
                });
                toast.success('Đã xoá sản phẩm khỏi giỏ hàng !')
        } catch (e) {
            console.log('delete item cart fail', e)
        }
    }
}

// update item cart
export const UpdateItemCartByUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await updateItemCartWithLogin(data);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_ITEM_CART_LOGIN,
                });
            }
        } catch (e) {
            console.log('update item cart fail', e)
        }
    }
}

// checkout order
export const CheckoutOrder = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await checkOutOrder(data);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.CHECKOUT_ORDER,
                });
                toast.success('Đặt hàng thành công !')
            }
        } catch (e) {
            toast.error('Đặt hàng thất bại !')
        }
    }
}

// Order by user
export const FilterMyOrder = (userId, status) => {
    return async(dispatch, getState) => {
        try {
            let res = await filterMyOrder(userId, status);
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FILTER_MY_ORDER,
                    payload: res.result.reverse()
                });
            }
        } catch (e) {
            console.log('filter my order fail', e)
        }
    }
}

















