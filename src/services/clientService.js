import axios from 'axios';
import { path } from 'utils';

//get all cart
const getAllCart = (inputId) => {
    return axios.get(`${path.PORT}/get-all-cart?id=${inputId}`)
}

//add to cart
const addToCart = (inputData) => {
    return axios.post(`${path.PORT}/add-to-cart`, inputData)
}


export{
    getAllCart,
    addToCart
}