import axios from 'axios';
import _ from 'lodash';
import { path } from 'utils';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});


instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if(error.response.status === 401){
            return instance.get(`${path.PORT}/auth/token`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => {
                localStorage.setItem('token', res.data.accessToken);
                const { config } = error.response;
                config.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
                return instance(config);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
);

export default instance;