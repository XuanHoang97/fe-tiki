import axios from 'axios';
import { path } from 'utils';

// get all rating   
const getAllRating = (inputId) => {
    return axios.get(`${path.PORT}/get-rating?id=${inputId}`)
}

export { 
    getAllRating
};