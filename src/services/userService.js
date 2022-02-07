import axios from 'axios';
import { path } from 'utils';

//login
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post(`${path.PORT}/login`, { email: userEmail, password: userPassword });
}

//display all users
const getAllUsers = (inputId) => {
    return axios.get(`${path.PORT}/get-all-users?id=${inputId}`)
}

// create new user
const createUser = (data) => {
    return axios.post(`${path.PORT}/create-new-user`, data)
}

//delete user
const deleteUserService = (userId) => {
    return axios.delete(`${path.PORT}/delete-user`, {
        data: {
            id: userId
        }
    })
}

//edit user
const editUserService = (inputData) => {
    return axios.put(`${path.PORT}/edit-user`, inputData)
}

//getAllCode
const getAllCodeService = (inputType) => {
    return axios.get(`${path.PORT}/allcode?type=${inputType}`)
}

//search user
const searchUser= (keyword) => {
    return axios.post(`${path.PORT}/search?keyword=${keyword}`)
}

//get all product
const getAllProduct = (inputId) => {
    return axios.get(`${path.PORT}/get-all-products?id=${inputId}`)
}

// create new product
const createNewProduct = (data) => {
    return axios.post(`${path.PORT}/create-new-product`, data)
}

// edit product
const editProduct = (inputData) => {
    return axios.put(`${path.PORT}/edit-product`, inputData)
}

//delete product
const deleteProduct = (productId) => {
    return axios.delete(`${path.PORT}/delete-product`, {
        data: {
            id: productId
        }
    })
}

//detail product
const getDetailProduct = (productId) => {
    return axios.get(`${path.PORT}/get-detail-product?id=${productId}`)
}

// product similar
const getProductSimilar = (productId) => {
    return axios.get(`${path.PORT}/similar-product?id=${productId}`)
}


//save info product
const saveInfoProduct = (data) => {
    return axios.post(`${path.PORT}/save-info-product`, data)
}

//edit info product
const editInfoProduct = (inputData) => {
    return axios.put(`${path.PORT}/edit-info-product`, inputData)
}

//save option product
const saveOptionProduct = (data) => {
    return axios.post(`${path.PORT}/save-option-product`, data)
}

//get all article
const getAllArticle = (articleId) => {
    return axios.get(`${path.PORT}/get-article-product?id=${articleId}`)
}

// get all category
const getAllCategory = (categoryId) => {
    return axios.get(`${path.PORT}/get-all-category?id=${categoryId}`)
}

//create new category
const createCategory = (data) => {
    return axios.post(`${path.PORT}/create-new-category`, data)
}

//edit category
const editCategory = (inputData) => {
    return axios.put(`${path.PORT}/edit-category`, inputData)
}

//delete category
const deleteCategory = (categoryId) => {
    return axios.delete(`${path.PORT}/delete-category`, {
        data: {
            id: categoryId
        }
    })
}


//get all news and event
const getAllNewsAndEvent = (newId) => {
    return axios.get(`${path.PORT}/get-all-news?id=${newId}`)
}

// pagination news and event
const paginationNewsAndEvent = (inputData) => {
    return axios.get(`${path.PORT}/get-all-news/:page`, inputData)
}

//create new news and event
const createNews = (data) => {
    return axios.post(`${path.PORT}/create-news`, data)
}

//edit news and event
const editNews = (inputData) => {
    return axios.put(`${path.PORT}/edit-news`, inputData)
}

//delete news and event
const deleteNews = (newsId) => {
    return axios.delete(`${path.PORT}/delete-news`, {
        data: {
            id: newsId
        }
    })
}

//get all slides
const getAllSlides = (slideId) => {
    return axios.get(`${path.PORT}/get-all-slide?id=${slideId}`)
}

//create new slides
const createSlides = (data) => {
    return axios.post(`${path.PORT}/create-slide`, data)
}

//edit slides
const editSlides = (inputData) => {
    return axios.put(`${path.PORT}/edit-slide`, inputData)
}

//delete slides
const deleteSlides = (slidesId) => {
    return axios.delete(`${path.PORT}/delete-slide`, {
        data: {
            id: slidesId
        }
    })
}

//get all special category
const getAllSpecialCategory = (specialCategoryId) => {
    return axios.get(`${path.PORT}/get-all-specialCategory?id=${specialCategoryId}`)
}

// create new special category
const createSpecialCategory = (data) => {
    return axios.post(`${path.PORT}/create-specialCategory`, data)
}

// edit special category
const editSpecialCategory = (inputData) => {
    return axios.put(`${path.PORT}/edit-specialCategory`, inputData)
}

//delete special category
const deleteSpecialCategory = (specialCategoryId) => {
    return axios.delete(`${path.PORT}/delete-specialCategory`, {
        data: {
            id: specialCategoryId
        }
    })
}

//get all product in category
const detailCategory = (productId) => {
    return axios.get(`${path.PORT}/get-detail-category?id=${productId}`)
}



export { 
    handleLoginApi,
    getAllUsers,
    createUser,
    deleteUserService,
    editUserService,
    getAllCodeService,
    searchUser,

    getAllProduct,
    getAllCategory,
    createCategory,
    getAllNewsAndEvent,
    createNewProduct,
    editProduct,
    deleteProduct,
    getDetailProduct,
    
    paginationNewsAndEvent,
    createNews,
    editNews,
    deleteNews,
    saveInfoProduct,
    editInfoProduct,
    saveOptionProduct,

    deleteCategory,
    editCategory,
    detailCategory,

    getAllArticle,
    getAllSlides,
    createSlides,
    editSlides,
    deleteSlides,
    getAllSpecialCategory,
    createSpecialCategory,
    editSpecialCategory,
    deleteSpecialCategory,
    getProductSimilar
};