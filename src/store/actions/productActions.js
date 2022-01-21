import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllProduct,
    createNewProduct,
    editProduct,
    deleteProduct,
    saveInfoProduct,
    editInfoProduct,
    getSomeProduct,
    getProductSimilar,
    saveOptionProduct,

    getAllArticle,
} from "../../services/userService"
import { toast } from "react-toastify"


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
                dispatch(GetAllArticle());
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

//edit info product
export const EditInfoProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editInfoProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch(editInfoProductSuccess());
                toast.success('Cập nhật mô tả thông tin sản phẩm thành công !')
            } else {
                dispatch(editInfoProductFailed());
            }
        } catch (e) {
            dispatch(editInfoProductFailed());
            console.log('editInfoProductFailed error', e)
        }
    }
}

export const editInfoProductSuccess = () => ({
    type: actionTypes.EDIT_INFO_DETAIL_PRODUCT_SUCCESS,
})

export const editInfoProductFailed = () => ({
    type: actionTypes.EDIT_INFO_DETAIL_PRODUCT_FAILED,
})

//save option product
export const SaveOptionProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await saveOptionProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch(saveOptionProductSuccess());
                toast.success('Thêm thông tin sản phẩm thành công !')
            } else {
                dispatch(saveOptionProductFailed());
            }
        } catch (e) {
            dispatch(saveOptionProductFailed());
            console.log('saveOptionProductFailed error', e)
        }
    }
}

export const saveOptionProductSuccess = () => ({
    type: actionTypes.SAVE_OPTION_PRODUCT_SUCCESS,
})

export const saveOptionProductFailed = () => ({
    type: actionTypes.SAVE_OPTION_PRODUCT_FAILED,
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

//get product similar
export const GetProductSimilar = (productId) => {
    return async(dispatch, getState) => {
        try {
            let res = await getProductSimilar(productId);
            if (res && res.data.errCode === 0) {
                dispatch(GetProductSimilarSuccess(res.data.products))
            } else {
                dispatch(GetProductSimilarFailed());
            }
        } catch (e) {
            dispatch(GetProductSimilarFailed());
            console.log('GetProductSimilarFailed error', e)
        }
    }
}

export const GetProductSimilarSuccess = (data) => ({
    type: actionTypes.FETCH_PRODUCT_SIMILAR_SUCCESS,
    listProductSimilar: data
})

export const GetProductSimilarFailed = () => ({
    type: actionTypes.FETCH_PRODUCT_SIMILAR_FAILED,
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