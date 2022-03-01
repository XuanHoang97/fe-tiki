import instance from '../axios';
import axios from 'axios';
import { path } from 'utils';

// Register
const registerAcc = (data) => {
    return axios.post(`${path.PORT}/auth/register`, data)
} 

// Login
const loginAcc = (data) => {
    return axios.post(`${path.PORT}/auth/login`, data)
}

// Logout
const logout = () => {
    return axios.delete(`${path.PORT}/auth/logout`)
}

// Verify token
const verifyToken = () => {
    return axios.get(`${path.PORT}/auth/token`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

// update user
const updateUser = (data) => {
    return axios.put(`${path.PORT}/update-user`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

// change password
const ChangePass= (data) => {
    return instance.put(`/change-password`, data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

// get all notify
const getAllNotify = (userId) => {
    return instance.get(`/notify?userId=${userId}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

// get notify unread
const getNotify = (userId, status) => {
    return instance.get(`/notify?userId=${userId}&status=${status}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

//update status notify
const updateStatusNotify = (data) => {
    return instance.put(`/update-notify`,data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

// mark all notify as read
const MarkAllNotifyAsRead = (data) => {
    return instance.put(`/mark-all-as-read`,data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export{
    registerAcc,
    loginAcc,
    logout,
    verifyToken,
    updateUser,
    ChangePass,
    getNotify,
    getAllNotify,
    updateStatusNotify,
    MarkAllNotifyAsRead
}