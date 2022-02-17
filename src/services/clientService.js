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
    return axios.get(`${path.PORT}/get-order?id=${orderId}`)
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

// ...................................
// Option 2: Order with login
// add to cart
const addItemToCartWithLogin = (data) => {
    return axios.post(`${path.PORT}/add-item-to-cart`, data)
}

// Get cart by user
const getCartByUser = (userId) => {
    return axios.get(`${path.PORT}/cart?userId=${userId}`)
}

// delete item cart
const deleteItemCartWithLogin = (productId) => {
    return axios.delete(`${path.PORT}/delete-item-cart`, {
        data: {
            id: productId,
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
    deleteItemCartWithLogin
}