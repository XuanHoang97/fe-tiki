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
    uploadMultiFile,

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
                    type: actionTypes.FETCH_PRODUCTS,
                    payload: res.data.products.reverse()
                })
            }
        } catch (e) {
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
                    type: actionTypes.CREATE_PRODUCT,
                });
                dispatch(fetchProducts());
                toast.success('Thêm mới sản phẩm thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.EDIT_PRODUCT,
                });
                dispatch(fetchProducts());
                toast.success('Cập nhật sản phẩm thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.DELETE_PRODUCT,
                });
                dispatch(fetchProducts());
                toast.success('Xoá sản phẩm thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.FETCH_STATUS_PRODUCT,
                    payload: res.data.data
                })
            }
        } catch (e) {
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
                    type: actionTypes.FETCH_SUPPLIER_PRODUCT,
                    payload: res.data.data
                })
            }
        } catch (e) {
            toast.error('fetch supplier product error !')
        }
    }
}

//save info product
export const SaveInfoProduct = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await saveInfoProduct(data);
            console.log('saveInfoProduct', res)
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.SAVE_INFO_DETAIL_PRODUCT,
                });
                dispatch(GetAllArticle());
                toast.success('Thêm mô tả thông tin sản phẩm thành công !')
            }
        } catch (e) {
            console.log('saveInfoProductFailed error', e)
        }
    }
}

// upload multi file (description product)
export const UploadMultiFile = (data) => {
    return async(dispatch, getState) => {
        try {
            let res = await uploadMultiFile(data);
            console.log('res', res)
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.UPLOAD_MULTIPLE_IMAGE,
                })
                toast.success('Upload ảnh thành công !')
            }
        } catch (e) {
            console.log('uploadMultiFile error', e)
            toast.error('Upload ảnh thất bại !')
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
                    type: actionTypes.EDIT_INFO_DETAIL_PRODUCT,
                });
                toast.success('Cập nhật mô tả thông tin sản phẩm thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.SAVE_OPTION_PRODUCT,
                });
                toast.success('Thêm thông tin sản phẩm thành công !')
            }
        } catch (e) {
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
                    type: actionTypes.FETCH_PRODUCT_SIMILAR,
                    payload: res.data.products
                })
            }
        } catch (e) {
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
                dispatch({
                    type: actionTypes.SELECT_OPTION_PRODUCT,
                    payload: res.data.data
                })
            }
        } catch (e) {
            toast.error('fetch option product error !')
        }
    }
}


//get all article
export const GetAllArticle = () => {
    return async(dispatch, getState) => {
        try {
            let res = await getAllArticle('ALL')
            if (res && res.data.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ARTICLE,
                    payload: res.data.articles.reverse()
                })
            }
        } catch (e) {
            console.log('GetAllArticleFailed error', e)
        }
    }
}
