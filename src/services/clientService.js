import instance from '../axios';
import axios from 'axios';
import { path } from 'utils';

// Option 1: Order without login 
//add to cart
const addItemToCart = (data) => {
    return axios.post(`${path.PORT}/add-item-to-cart`, data)
}

//get all cart
const getAllCart = (cardId) => {
    return axios.get(`${path.PORT}/cart?id=${cardId}`)
}

//delete item cart
const deleteItemCart = (productId) => {
    return axios.delete(`${path.PORT}/delete-item-cart`, {
        data: {
            id: productId
        }
    })
}

//create order
const createOrder = (data) => {
    return axios.post(`${path.PORT}/create-order`, data)
}

//get order
const getOrder = (orderId) => {
    return axios.get(`${path.PORT}/orders?id=${orderId}`)
}

//verify order
const verifyOrder = (data) => {
    return axios.post(`${path.PORT}/verify-order`, data)
}

// Filter order by status
const filterOrder = (status) => {
    return axios.get(`${path.PORT}/filter-order?status=${status}`)
}

// update order
const updateOrder = (data) => {
    return axios.put(`${path.PORT}/update-order`, data)
}

// Option 2: Order with login
// add to cart
const addItemToCartWithLogin = (data) => {
    return instance.post(`/add-item-to-cart`, data,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

// Get cart by user
const getCartByUser = (userId) => {
    return instance.get(`/cart?userId=${userId}`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

// delete item cart
const deleteItemCartWithLogin = (productId) => {
    return axios.delete(`${path.PORT}/delete-item-cart`, {
        data: {
            id: productId,
        }
    })
}

// update item cart
const updateItemCartWithLogin = (data) => {
    return instance.put(`/update-item-cart`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

// check out order
const checkOutOrder = (data) => {
    return instance.post(`/checkout`, data,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

// get order by user
const getOrderByUser = (userId) => {
    return instance.get(`/get-order-by-user?userId=${userId}`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

// filter my order
const filterMyOrder = (userId, status) => {
    return instance.get(`/filterMyOrder?userId=${userId}&status=${status}`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export{
    // Option 1: Order without login
    addItemToCart,
    getAllCart,
    deleteItemCart,

    createOrder,
    getOrder,
    verifyOrder,
    filterOrder,
    updateOrder,
    
    // Option 2: Order with login
    addItemToCartWithLogin,
    getCartByUser,
    deleteItemCartWithLogin,
    updateItemCartWithLogin,
    checkOutOrder,
    getOrderByUser,
    filterMyOrder

}