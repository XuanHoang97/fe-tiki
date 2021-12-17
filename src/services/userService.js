import axios from 'axios';
//login
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8085/api/login', { email: userEmail, password: userPassword });
}

//display all users
const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8085/api/get-all-users?id=${inputId}`)
}

// create new user
const createNewUserService = (data) => {
    return axios.post(`http://localhost:8085/api/create-new-user`, data)
}

//delete user
const deleteUserService = (userId) => {
    return axios.delete(`http://localhost:8085/api/delete-user`, {
        data: {
            id: userId
        }
    })
}

//edit user
const editUserService = (inputData) => {
    return axios.put(`http://localhost:8085/api/edit-user`, inputData)
}

//getAllCode
const getAllCodeService = (inputType) => {
    return axios.get(`http://localhost:8085/api/allcode?type=${inputType}`)
}

//detail user
const getDetailUser = (userId) => {
    return axios.get(`http://localhost:8085/api/detail-user?id=${userId}`)
}

//search user
const searchUser= (keyword) => {
    return axios.post(`http://localhost:8085/api/search?keyword=${keyword}`)
}

//get all product
const getAllProduct = (inputId) => {
    return axios.get(`http://localhost:8085/api/get-all-products?id=${inputId}`)
}

// create new product
const createNewProduct = (data) => {
    return axios.post(`http://localhost:8085/api/create-new-product`, data)
}

// edit product
const editProduct = (inputData) => {
    return axios.put(`http://localhost:8085/api/edit-product`, inputData)
}

//delete product
const deleteProduct = (productId) => {
    return axios.delete(`http://localhost:8085/api/delete-product`, {
        data: {
            id: productId
        }
    })
}


// get all category
const getAllCategory = (categoryId) => {
    return axios.get(`http://localhost:8085/api/get-all-category?id=${categoryId}`)
}

//get all news and event
const getAllNewsAndEvent = (newId) => {
    return axios.get(`http://localhost:8085/api/get-all-news?id=${newId}`)
}

//create new news and event
const createNews = (data) => {
    return axios.post(`http://localhost:8085/api/create-news`, data)
}

//edit news and event
const editNews = (inputData) => {
    return axios.put(`http://localhost:8085/api/edit-news`, inputData)
}

//delete news and event
const deleteNews = (newsId) => {
    return axios.delete(`http://localhost:8085/api/delete-news`, {
        data: {
            id: newsId
        }
    })
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
    getAllCategory,
    getAllNewsAndEvent,
    createNewProduct,
    editProduct,
    deleteProduct,
    createNews,
    editNews,
    deleteNews
};