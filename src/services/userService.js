import axios from 'axios';
//login
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8081/api/login', { email: userEmail, password: userPassword });
}

//display all users
const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8081/api/get-all-users?id=${inputId}`)
}

// create new user
const createNewUserService = (data) => {
    return axios.post(`http://localhost:8081/api/create-new-user`, data)
}

//delete user
const deleteUserService = (userId) => {
    return axios.delete(`http://localhost:8081/api/delete-user`, {
        data: {
            id: userId
        }
    })
}

//edit user
const editUserService = (inputData) => {
    return axios.put(`http://localhost:8081/api/edit-user`, inputData)
}

//getAllCode
const getAllCodeService = (inputType) => {
    return axios.get(`http://localhost:8081/api/allcode?type=${inputType}`)
}

//detail user
const getDetailUser = (userId) => {
    return axios.get(`http://localhost:8081/api/detail-user?id=${userId}`)
}

//search user
const searchUser= (keyword) => {
    return axios.post(`http://localhost:8081/api/search?keyword=${keyword}`)
}

//get all product
const getAllProduct = (inputId) => {
    return axios.get(`http://localhost:8081/api/get-all-products?id=${inputId}`)
}

// get all category
const getAllCategory = (categoryId) => {
    return axios.get(`http://localhost:8081/api/get-all-category?id=${categoryId}`)
}


export { 
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getDetailUser,
    searchUser,
    getAllProduct,
    getAllCategory

};