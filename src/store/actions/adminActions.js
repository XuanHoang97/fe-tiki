import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    searchUser,
    getAllProduct,
    createNewProduct,
    editProduct,
    deleteProduct,
    getAllCategory,
    getAllNewsAndEvent,
    createNews,
    editNews,
    deleteNews,
    saveInfoProduct,
    createCategory,
    deleteCategory,
    editCategory,
    getSomeProduct,
    getAllArticle
} from "../../services/userService"
import { toast } from "react-toastify"

//fetch gender
export const fetchGenderStart = () => {
    return async(dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService('GENDER');
            if (res && res.data.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error', e)
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


//fetch role 
export const fetchRoleStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('ROLE');
            if (res && res.data.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error', e)
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

//fetch position
export const fetchPositionStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('POSITION');
            if (res && res.data.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionStart error', e)
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    listPosition: positionData,
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})



//create a new user
export const createNewUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
                toast.success('Thêm mới thành viên thành công !')
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());
            console.log('saveUserFailed error', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})

//get all users
export const fetchAllUsersStart = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllUsers('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllUSersSuccess(res.data.users.reverse()))
            } else {
                toast.error('fetch all user error !')
                dispatch(fetchAllUSersFailed());
            }
        } catch (e) {
            toast.error('fetch all user error !')
            dispatch(fetchAllUSersFailed());
            console.log('fetchAllUSersFailed error', e)
        }
    }
}

export const fetchAllUSersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    listUser: data
})

export const fetchAllUSersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})

//delete user 
export const deleteUser = (userId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);
            if (res && res.data.errCode === 0) {
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
                toast.success('Xoá thành viên thành công !')
            } else {
                toast.error('delete the user error !')
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})


//edit user
export const editUser = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.data.errCode === 0) {
                toast.success('update user succeed !')
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('update the user error !')
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error('update the user error !')
            dispatch(editUserFailed());
            console.log('editUserFailed error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})

//SEARCH USER
export const searchUserInfo = (keyword) => {
    return async(dispatch, getState) => {
        try {
            let res = await searchUser(keyword);
            if (res && res.data.errCode === 0) {
                dispatch(searchUserSuccess(res.data.users))
            } else {
                toast.error('search user error !')
                dispatch(searchUserFailed());
            }
        } catch (e) {
            toast.error('search user error !')
            dispatch(searchUserFailed());
            console.log('searchUserFailed error', e)
        }
    }
}

export const searchUserSuccess = (data) => ({
    type: actionTypes.SEARCH_USER_SUCCESS,
    listUser: data
})

export const searchUserFailed = () => ({
    type: actionTypes.SEARCH_USER_FAILED,
})

//fetch all product
export const fetchProducts = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllProduct('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllProductsSuccess(res.data.products.reverse()))
            } else {
                toast.error('fetch all product error !')
                dispatch(fetchAllProductsFailed());
            }
        } catch (e) {
            toast.error('fetch all product error !')
            dispatch(fetchAllProductsFailed());
            console.log('fetchAllProductsFailed error', e)
        }
    }
}

export const fetchAllProductsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
    listProduct: data
})

export const fetchAllProductsFailed = () => ({
    type: actionTypes.FETCH_ALL_PRODUCTS_FAILED,
})

//create a new product
export const CreateNewProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveProductSuccess());
                dispatch(fetchProducts());
                toast.success('Thêm mới sản phẩm thành công !')
            } else {
                dispatch(saveProductFailed());
            }
        } catch (e) {
            dispatch(saveProductFailed());
            console.log('saveProductFailed error', e)
        }
    }
}

export const saveProductSuccess = () => ({
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
})

export const saveProductFailed = () => ({
    type: actionTypes.CREATE_PRODUCT_FAILED,
})

//edit product
export const EditProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch(editProductSuccess());
                dispatch(fetchProducts());
                toast.success('Cập nhật sản phẩm thành công !')
            } else {
                dispatch(editProductFailed());
            }
        } catch (e) {
            dispatch(editProductFailed());
            console.log('editProductFailed error', e)
        }
    }
}

export const editProductSuccess = () => ({
    type: actionTypes.EDIT_PRODUCT_SUCCESS,
})

export const editProductFailed = () => ({
    type: actionTypes.EDIT_PRODUCT_FAILED,
})

//delete product
export const DeleteProduct = (productId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteProduct(productId);
            if (res && res.data.errCode === 0) {
                dispatch(deleteProductSuccess());
                dispatch(fetchProducts());
                toast.success('Xoá sản phẩm thành công !')
            } else {
                dispatch(deleteProductFailed());
            }
        } catch (e) {
            dispatch(deleteProductFailed());
            console.log('deleteProductFailed error', e)
        }
    }
}

export const deleteProductSuccess = () => ({
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
})

export const deleteProductFailed = () => ({
    type: actionTypes.DELETE_PRODUCT_FAILED,
})


//fetch status product
export const fetchStatusProduct = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('STATUS_PRODUCT');
            if(res && res.data.errCode === 0){
                dispatch(fetchStatusProductSuccess(res.data.data))
            }else{
                toast.error('fetch status product error !')
                dispatch(fetchStatusProductFailed());
            }
        } catch (e) {
            toast.error('fetch status product error !')
            dispatch(fetchStatusProductFailed());
            console.log('fetchStatusProductFailed error', e)
        }
    }
}

export const fetchStatusProductSuccess = (data) => ({
    type: actionTypes.FETCH_STATUS_PRODUCT_SUCCESS,
    listStatus: data
})

export const fetchStatusProductFailed = () => ({
    type: actionTypes.FETCH_STATUS_PRODUCT_FAILED,
})   

//fetch supplier product
export const fetchSupplierProduct = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('PROVINCE');
            if(res && res.data.errCode === 0){
                dispatch(fetchSupplierProductSuccess(res.data.data))
            }else{
                toast.error('fetch supplier product error !')
                dispatch(fetchSupplierProductFailed());
            }
        } catch (e) {
            toast.error('fetch supplier product error !')
            dispatch(fetchSupplierProductFailed());
            console.log('fetchSupplierProductFailed error', e)
        }
    }
}

export const fetchSupplierProductSuccess = (data) => ({
    type: actionTypes.FETCH_SUPPLIER_PRODUCT_SUCCESS,
    listSupplier: data
})

export const fetchSupplierProductFailed = () => ({
    type: actionTypes.FETCH_SUPPLIER_PRODUCT_FAILED,
}) 

//save info product
export const SaveInfoProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await saveInfoProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveInfoProductSuccess());
                toast.success('Thêm mô tả thông tin sản phẩm thành công !')
            } else {
                dispatch(saveInfoProductFailed());
            }
        } catch (e) {
            dispatch(saveInfoProductFailed());
            console.log('saveInfoProductFailed error', e)
        }
    }
}
export const saveInfoProductSuccess = () => ({
    type: actionTypes.SAVE_INFO_DETAIL_PRODUCT_SUCCESS,
})

export const saveInfoProductFailed = () => ({
    type: actionTypes.SAVE_INFO_DETAIL_PRODUCT_FAILED,
})

//get some product
export const GetSomeProduct = (productId) => {
    return async(dispatch, getState) => {
        try {
            let res = await getSomeProduct(productId);
            if (res && res.data.errCode === 0) {
                dispatch(GetSomeProductSuccess(res.data.data))
            } else {
                dispatch(GetSomeProductFailed());
            }
        } catch (e) {
            dispatch(GetSomeProductFailed());
            console.log('GetSomeProductFailed error', e)
        }
    }
}

export const GetSomeProductSuccess = (data) => ({
    type: actionTypes.FETCH_SOME_PRODUCT_SUCCESS,
    someProduct: data
})

export const GetSomeProductFailed = () => ({
    type: actionTypes.FETCH_SOME_PRODUCT_SUCCESS,
})


//select option product
export const SelectOptionProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('OPTION_PRODUCT');
            if(res && res.data.errCode === 0){
                dispatch(SelectOptionProductSuccess(res.data.data))
            }else{
                toast.error('fetch option product error !')
                dispatch(SelectOptionProductFailed());
            }
        } catch (e) {
            toast.error('fetch option product error !')
            dispatch(SelectOptionProductFailed());
            console.log('SelectOptionProductFailed error', e)
        }
    }
}

export const SelectOptionProductSuccess = (data) => ({
    type: actionTypes.SELECT_OPTION_PRODUCT_SUCCESS,
    listOption: data
})

export const SelectOptionProductFailed = () => ({
    type: actionTypes.SELECT_OPTION_PRODUCT_FAILED,
})



//get all article
export const GetAllArticle = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllArticle('ALL')
            if (res && res.data.errCode === 0) {
                dispatch(GetAllArticleSuccess(res.data.articles.reverse()))
            } else {
                dispatch(GetAllArticleFailed());
            }
        } catch (e) {
            dispatch(GetAllArticleFailed());
            console.log('GetAllArticleFailed error', e)
        }
    }
}

export const GetAllArticleSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_ARTICLE_SUCCESS,
    allArticle: data
})

export const GetAllArticleFailed = () => ({
    type: actionTypes.FETCH_ALL_ARTICLE_FAILED,
})









//fetch all category
export const fetchAllCategory = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCategory('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllCategorySuccess(res.data.category.reverse()))
            } else {
                toast.error('fetch all category error !')
                dispatch(fetchAllCategoryFailed());
            }
        } catch (e) {
            toast.error('fetch all category error !')
            dispatch(fetchAllCategoryFailed());
            console.log('fetchAllCategoryFailed error', e)
        }
    }
}

export const fetchAllCategorySuccess = (data) => ({
    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    listCategory: data
})

export const fetchAllCategoryFailed = () => ({
    type: actionTypes.FETCH_ALL_CATEGORIES_FAILED,
})

//create category
export const CreateCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch(createCategorySuccess());
                dispatch(fetchAllCategory());
                toast.success('Thêm danh mục thành công !')
            } else {
                dispatch(createCategoryFailed());
            }
        } catch (e) {
            dispatch(createCategoryFailed());
            console.log('createCategoryFailed error', e)
        }
    }
}

export const createCategorySuccess = () => ({
    type: actionTypes.CREATE_CATEGORY_SUCCESS,
})

export const createCategoryFailed = () => ({
    type: actionTypes.CREATE_CATEGORY_FAILED,
})

//edit category
export const EditCategory = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editCategory(data);
            if (res && res.data.errCode === 0) {
                dispatch(editCategorySuccess());
                dispatch(fetchAllCategory());
                toast.success('Sửa danh mục thành công !')
            } else {
                dispatch(editCategoryFailed());
            }
        } catch (e) {
            dispatch(editCategoryFailed());
            console.log('editCategoryFailed error', e)
        }
    }
}

export const editCategorySuccess = () => ({
    type: actionTypes.EDIT_CATEGORY_SUCCESS,
})

export const editCategoryFailed = () => ({
    type: actionTypes.EDIT_CATEGORY_FAILED,
})


//delete category
export const DeleteCategory = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteCategory(id);
            if (res && res.data.errCode === 0) {
                dispatch(deleteCategorySuccess());
                dispatch(fetchAllCategory());
                toast.success('Xóa danh mục thành công !')
            } else {
                dispatch(deleteCategoryFailed());
            }
        } catch (e) {
            dispatch(deleteCategoryFailed());
            console.log('deleteCategoryFailed error', e)
        }
    }
}

export const deleteCategorySuccess = () => ({
    type: actionTypes.DELETE_CATEGORY_SUCCESS,
})

export const deleteCategoryFailed = () => ({
    type: actionTypes.DELETE_CATEGORY_FAILED,
})


//fetch all news and event
export const fetchAllNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllNewsAndEvent('ALL');

            if (res && res.data.errCode === 0) {
                dispatch(fetchAllNewsSuccess(res.data.news.reverse()))
            } else {
                toast.error('fetch all news and event error !')
                dispatch(fetchAllNewsFailed());
            }
        } catch (e) {
            toast.error('fetch all news and event error !')
            dispatch(fetchAllNewsFailed());
            console.log('fetchAllNewsFailed error', e)
        }
    }
}

export const fetchAllNewsSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_NEWS_SUCCESS,
    listNews: data
})

export const fetchAllNewsFailed = () => ({
    type: actionTypes.FETCH_ALL_NEWS_FAILED,
})

//fetch allCode news and event
export const fetchStatusNews = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('STATUS_NEWS');
            if(res && res.data.errCode === 0){
                dispatch(fetchStatusNewsSuccess(res.data.data))
            }else{
                toast.error('fetch all code news error !')
                dispatch(fetchStatusNewsFailed());
            }
        } catch (e) {
            toast.error('fetch all code news error !')
            dispatch(fetchStatusNewsFailed());
            console.log('fetchStatusNewsFailed error', e)
        }
    }
}

export const fetchStatusNewsSuccess = (data) => ({
    type: actionTypes.FETCH_ALLCODE_NEWS_SUCCESS,
    statusCodeNews: data
})

export const fetchStatusNewsFailed = () => ({
    type: actionTypes.FETCH_ALLCODE_NEWS_FAILED,
})




//create news and event
export const CreateNews = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNews(data);
            if (res && res.data.errCode === 0) {
                dispatch(createNewsSuccess());
                dispatch(fetchAllNews());
                toast.success('Thêm mới tin tức thành công !')
            } else {
                dispatch(createNewsFailed());
            }
        } catch (e) {
            dispatch(createNewsFailed());
            console.log('saveNewsFailed error', e)
        }
    }
}

export const createNewsSuccess = () => ({
    type: actionTypes.CREATE_NEWS_SUCCESS,
})

export const createNewsFailed = () => ({
    type: actionTypes.CREATE_NEWS_FAILED,
})

//edit news and event
export const EditNews = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editNews(data);
            if (res && res.data.errCode === 0) {
                dispatch(editNewsSuccess());
                dispatch(fetchAllNews());
                toast.success('Sửa tin tức thành công !')
            } else {
                dispatch(editNewsFailed());
            }
        } catch (e) {
            dispatch(editNewsFailed());
            console.log('editNewsFailed error', e)
        }
    }
}

export const editNewsSuccess = () => ({
    type: actionTypes.EDIT_NEWS_SUCCESS,
})

export const editNewsFailed = () => ({
    type: actionTypes.EDIT_NEWS_FAILED,
})

//delete news and event
export const DeleteNews = (id) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteNews(id);
            if (res && res.data.errCode === 0) {
                dispatch(deleteNewsSuccess());
                dispatch(fetchAllNews());
                toast.success('Xóa tin tức thành công !')
            } else {
                dispatch(deleteNewsFailed());
            }
        } catch (e) {
            dispatch(deleteNewsFailed());
            console.log('deleteNewsFailed error', e)
        }
    }
}

export const deleteNewsSuccess = () => ({
    type: actionTypes.DELETE_NEWS_SUCCESS,
})

export const deleteNewsFailed = () => ({
    type: actionTypes.DELETE_NEWS_FAILED,
})





