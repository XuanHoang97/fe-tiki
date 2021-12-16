import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    users: [],
    products: [],
    categories: [],
    news: [],
    status: [],
    supplier: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //login
        case actionTypes.USER_LOGIN_SUCCESS:
            let copyState = {...state };
            return {
                ...copyState,
            }

            //fetch gender
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_GENDER_FAILED:
            state.genders = [];
            return {
                ...state,
            }

            //fetch role
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            return {
                ...state,
            }

        case actionTypes.FETCH_ROLE_FAILED:
            state.roles = [];
            return {
                ...state,
            }

            //fetch all user
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            state.users = action.listUser;
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_USERS_FAILED:
            state.users = [];
            return {
                ...state,
            }

            //search user
        case actionTypes.SEARCH_USER_SUCCESS:
            state.users = action.listUser;
            return {
                ...state,
            }

        case actionTypes.SEARCH_USER_FAILED:
            state.users = [];
            return {
                ...state,
            }
            
            //fetch all product
        case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
            state.products = action.listProduct;
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_PRODUCTS_FAILED:
            state.products = [];
            return {
                ...state,
            }

            //fetch status product
        case actionTypes.FETCH_STATUS_PRODUCT_SUCCESS:
            state.status = action.listStatus;
            return {
                ...state,
            }

            //fetch supplier product
        case actionTypes.FETCH_SUPPLIER_PRODUCT_SUCCESS:
            state.supplier = action.listSupplier;
            return {
                ...state,
            }

            case actionTypes.FETCH_SUPPLIER_PRODUCT_FAILED:
            state.supplier = [];
            return {
                ...state,
            }


        case actionTypes.FETCH_STATUS_PRODUCT_FAILED:
            state.status = [];
            return {
                ...state,
            }
            
            //fetch all category
        case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            state.categories = action.listCategory;
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_CATEGORIES_FAILED:
            state.categories = [];
            return {
                ...state,
            }

            //fetch all news and event
        case actionTypes.FETCH_ALL_NEWS_SUCCESS:
            state.news = action.listNews;
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_NEWS_FAILED:
            state.news = [];
            return {
                ...state,
            }


        default:
            return state;
    }
}

export default adminReducer;