import axios from 'axios';
import { path } from 'utils';

// get all rating   
const getAllRating = (inputId) => {
    return axios.get(`${path.PORT}/get-rating?id=${inputId}`)
}

// add discount
const addDiscount = (data) => {
    return axios.post(`${path.PORT}/add-discount`, data);
}

// get all discount
const getAllDiscount = (discountId) => {
    return axios.get(`${path.PORT}/get-discount?id=${discountId}`);
}

export { 
    getAllRating,
    addDiscount,
    getAllDiscount

};