import axios from 'axios';
import { path } from 'utils';

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


export{
    addItemToCart,
    getAllCart,
    deleteItemCart
}