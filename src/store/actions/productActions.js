import actionTypes from './actionTypes';
import {
    getAllCodeService,
    getAllProduct,
    createNewProduct,
    editProduct,
    deleteProduct,
    saveInfoProduct,
    editInfoProduct,
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
                dispatch({
                    type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
                    payload: res.data.products.reverse()
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_PRODUCTS_FAILED,
                });
                toast.error('fetch all product error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_PRODUCTS_FAILED,
            });
            toast.error('fetch all product error !')
        }
    }
}

//create a new product
export const CreateNewProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await createNewProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.CREATE_PRODUCT_SUCCESS,
                });
                dispatch(fetchProducts());
                toast.success('Thêm mới sản phẩm thành công !')
            } else {
                dispatch({
                    type: actionTypes.CREATE_PRODUCT_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.CREATE_PRODUCT_FAILED,
            });
            console.log('saveProductFailed error', e)
        }
    }
}

//edit product
export const EditProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_PRODUCT_SUCCESS,
                });
                dispatch(fetchProducts());
                toast.success('Cập nhật sản phẩm thành công !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_PRODUCT_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_PRODUCT_FAILED,
            });
            console.log('editProductFailed error', e)
        }
    }
}

//delete product
export const DeleteProduct = (productId) => {
    return async(dispatch, getState) => {
        try {
            let res = await deleteProduct(productId);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_SUCCESS,
                });
                dispatch(fetchProducts());
                toast.success('Xoá sản phẩm thành công !')
            } else {
                dispatch({
                    type: actionTypes.DELETE_PRODUCT_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.DELETE_PRODUCT_FAILED,
            });
            console.log('deleteProductFailed error', e)
        }
    }
}

//fetch status product
export const fetchStatusProduct = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('STATUS_PRODUCT');
            if(res && res.data.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_STATUS_PRODUCT_SUCCESS,
                    payload: res.data.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_STATUS_PRODUCT_FAILED,
                });
                toast.error('fetch status product error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_STATUS_PRODUCT_FAILED,
            });
            toast.error('fetch status product error !')
        }
    }
}  

//fetch supplier product
export const fetchSupplierProduct = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllCodeService('PROVINCE');
            if(res && res.data.errCode === 0){
                dispatch({
                    type: actionTypes.FETCH_SUPPLIER_PRODUCT_SUCCESS,
                    payload: res.data.data
                })
            }else{
                dispatch({
                    type: actionTypes.FETCH_SUPPLIER_PRODUCT_FAILED,
                });
                toast.error('fetch supplier product error !')
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_SUPPLIER_PRODUCT_FAILED,
            });
            toast.error('fetch supplier product error !')
        }
    }
}

//save info product
export const SaveInfoProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await saveInfoProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_INFO_DETAIL_PRODUCT_SUCCESS,
                });
                dispatch(GetAllArticle());
                toast.success('Thêm mô tả thông tin sản phẩm thành công !')
            } else {
                dispatch({
                    type: actionTypes.SAVE_INFO_DETAIL_PRODUCT_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.SAVE_INFO_DETAIL_PRODUCT_FAILED,
            });
            console.log('saveInfoProductFailed error', e)
        }
    }
}

//edit info product
export const EditInfoProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await editInfoProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.EDIT_INFO_DETAIL_PRODUCT_SUCCESS,
                });
                toast.success('Cập nhật mô tả thông tin sản phẩm thành công !')
            } else {
                dispatch({
                    type: actionTypes.EDIT_INFO_DETAIL_PRODUCT_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.EDIT_INFO_DETAIL_PRODUCT_FAILED,
            });
            console.log('editInfoProductFailed error', e)
        }
    }
}

//save option product
export const SaveOptionProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await saveOptionProduct(data);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_OPTION_PRODUCT_SUCCESS,
                });
                toast.success('Thêm thông tin sản phẩm thành công !')
            } else {
                dispatch({
                    type: actionTypes.SAVE_OPTION_PRODUCT_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.SAVE_OPTION_PRODUCT_FAILED,
            });
            console.log('saveOptionProductFailed error', e)
        }
    }
}

//get product similar
export const GetProductSimilar = (productId) => {
    return async(dispatch, getState) => {
        try {
            let res = await getProductSimilar(productId);
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_SIMILAR_SUCCESS,
                    payload: res.data.products
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_PRODUCT_SIMILAR_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_PRODUCT_SIMILAR_FAILED,
            });
            console.log('GetProductSimilarFailed error', e)
        }
    }
}

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
                dispatch({
                    type: actionTypes.FETCH_ALL_ARTICLE_SUCCESS,
                    payload: res.data.articles.reverse()
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_ARTICLE_FAILED,
                });
            }
        } catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_ARTICLE_FAILED,
            });
            console.log('GetAllArticleFailed error', e)
        }
    }
}