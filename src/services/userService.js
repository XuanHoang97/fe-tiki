import axios from 'axios';


//login
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('http://localhost:8080/api/login', { email: userEmail, password: userPassword });
}

//display all users
const getAllUsers = (inputId) => {
    return axios.get(`http://localhost:8080/api/get-all-users?id=${inputId}`)
}

// create new user
const createUser = (data) => {
    return axios.post(`http://localhost:8080/api/create-new-user`, data)
}

//delete user
const deleteUserService = (userId) => {
    return axios.delete(`http://localhost:8080/api/delete-user`, {
        data: {
            id: userId
        }
    })
}

//edit user
const editUserService = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-user`, inputData)
}

//getAllCode
const getAllCodeService = (inputType) => {
    return axios.get(`http://localhost:8080/api/allcode?type=${inputType}`)
}

//detail user
const getDetailUser = (userId) => {
    return axios.get(`http://localhost:8080/api/detail-user?id=${userId}`)
}

//search user
const searchUser= (keyword) => {
    return axios.post(`http://localhost:8080/api/search?keyword=${keyword}`)
}

//get all product
const getAllProduct = (inputId) => {
    return axios.get(`http://localhost:8080/api/get-all-products?id=${inputId}`)
}

// create new product
const createNewProduct = (data) => {
    return axios.post(`http://localhost:8080/api/create-new-product`, data)
}

// edit product
const editProduct = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-product`, inputData)
}

//delete product
const deleteProduct = (productId) => {
    return axios.delete(`http://localhost:8080/api/delete-product`, {
        data: {
            id: productId
        }
    })
}

//detail product
const getDetailProduct = (productId) => {
    return axios.get(`http://localhost:8080/api/get-detail-product?id=${productId}`)
}

// product similar
const getProductSimilar = (productId) => {
    return axios.get(`http://localhost:8080/api/similar-product?id=${productId}`)
}

//get all product by category
const getAllProductByCategory = (categoryId) => {
    return axios.get(`http://localhost:8080/api/get-product-by-category?id=${categoryId}`)
}

//save info product
const saveInfoProduct = (data) => {
    return axios.post(`http://localhost:8080/api/save-info-product`, data)
}

//edit info product
const editInfoProduct = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-info-product`, inputData)
}

//get some product
const getSomeProduct = (productId) => {
    return axios.get(`http://localhost:8080/api/get-some-product?id=${productId}`)
}

//get all article
const getAllArticle = (articleId) => {
    return axios.get(`http://localhost:8080/api/get-article-product?id=${articleId}`)
}



// get all category
const getAllCategory = (categoryId) => {
    return axios.get(`http://localhost:8080/api/get-all-category?id=${categoryId}`)
}

//create new category
const createCategory = (data) => {
    return axios.post(`http://localhost:8080/api/create-new-category`, data)
}

//edit category
const editCategory = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-category`, inputData)
}

//delete category
const deleteCategory = (categoryId) => {
    return axios.delete(`http://localhost:8080/api/delete-category`, {
        data: {
            id: categoryId
        }
    })
}


//get all news and event
const getAllNewsAndEvent = (newId) => {
    return axios.get(`http://localhost:8080/api/get-all-news?id=${newId}`)
}

//create new news and event
const createNews = (data) => {
    return axios.post(`http://localhost:8080/api/create-news`, data)
}

//edit news and event
const editNews = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-news`, inputData)
}

//delete news and event
const deleteNews = (newsId) => {
    return axios.delete(`http://localhost:8080/api/delete-news`, {
        data: {
            id: newsId
        }
    })
}

//get all slides
const getAllSlides = (slideId) => {
    return axios.get(`http://localhost:8080/api/get-all-slide?id=${slideId}`)
}

//create new slides
const createSlides = (data) => {
    return axios.post(`http://localhost:8080/api/create-slide`, data)
}

//edit slides
const editSlides = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-slide`, inputData)
}

//delete slides
const deleteSlides = (slidesId) => {
    return axios.delete(`http://localhost:8080/api/delete-slide`, {
        data: {
            id: slidesId
        }
    })
}

//get all special category
const getAllSpecialCategory = (specialCategoryId) => {
    return axios.get(`http://localhost:8080/api/get-all-specialCategory?id=${specialCategoryId}`)
}

// create new special category
const createSpecialCategory = (data) => {
    return axios.post(`http://localhost:8080/api/create-specialCategory`, data)
}

// edit special category
const editSpecialCategory = (inputData) => {
    return axios.put(`http://localhost:8080/api/edit-specialCategory`, inputData)
}

//delete special category
const deleteSpecialCategory = (specialCategoryId) => {
    return axios.delete(`http://localhost:8080/api/delete-specialCategory`, {
        data: {
            id: specialCategoryId
        }
    })
}




export { 
    handleLoginApi,
    getAllUsers,
    createUser,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getDetailUser,
    searchUser,
    getAllProduct,
    getAllCategory,
    createCategory,
    getAllNewsAndEvent,
    createNewProduct,
    editProduct,
    deleteProduct,
    getDetailProduct,
    getSomeProduct,
    createNews,
    editNews,
    deleteNews,
    saveInfoProduct,
    editInfoProduct,
    deleteCategory,
    editCategory,
    getAllArticle,
    getAllSlides,
    createSlides,
    editSlides,
    deleteSlides,
    getAllSpecialCategory,
    createSpecialCategory,
    editSpecialCategory,
    deleteSpecialCategory,
    getAllProductByCategory,
    getProductSimilar
};