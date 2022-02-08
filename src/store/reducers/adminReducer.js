import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    users: [],
    products: [],
    productSimilar: [],

    categories: [],
    news: [],
    status_news: [],
    status: [],
    supplier: [],
    articles: [],
    optionProduct: [],
    slides: [],
    specialCategories: [],
    statusSlide: [],
    detailCategory: [],
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

            //fetch position
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.listPosition;
            return {
                ...state,
            }

        case actionTypes.FETCH_POSITION_FAILED:
            state.positions = [];
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
            return {
                ...state,
                products : action.payload
            }

            //fetch status product
        case actionTypes.FETCH_STATUS_PRODUCT_SUCCESS:
            return {
                ...state,
                status : action.payload,
            }

            //fetch supplier product
        case actionTypes.FETCH_SUPPLIER_PRODUCT_SUCCESS:
            return {
                ...state,
                supplier : action.payload
            }

            //SELECT option product
        case actionTypes.SELECT_OPTION_PRODUCT_SUCCESS:
            state.optionProduct = action.listOption;
            return {
                ...state,
            }

        case actionTypes.SELECT_OPTION_PRODUCT_FAILED:
            state.optionProduct = [];
            return {
                ...state,
            }

        //get product similar
        case actionTypes.FETCH_PRODUCT_SIMILAR_SUCCESS:
            return {
                ...state,
                productSimilar : action.payload,
            }


            //fetch all article
        case actionTypes.FETCH_ALL_ARTICLE_SUCCESS:
            return {
                ...state,
                articles : action.payload,
            }
            
            //fetch all category
        case actionTypes.FETCH_ALL_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories : action.payload,
            }

            //fetch all product in category
        case actionTypes.FETCH_PRODUCT_IN_CATEGORY_SUCCESS:
            return {
                ...state,
                detailCategory : action.payload,
            }

            //fetch all news and event
        case actionTypes.FETCH_ALL_NEWS_SUCCESS:
            return {
                ...state,
               news : action.payload
            }

            //fetch allCode news and event
        case actionTypes.FETCH_ALLCODE_NEWS_SUCCESS:
            return {
                ...state,
                status_news : action.payload
            }

        // get all slide
        case actionTypes.FETCH_ALL_SLIDE_SUCCESS:
            return {
                ...state,
                slides: action.payload,
            }
            
        //get all special category
        case actionTypes.FETCH_ALL_SPECIAL_CATEGORY_SUCCESS:
            return {
                ...state,
                specialCategories: action.payload
            }

        case actionTypes.FETCH_ALL_STATUS_SLIDE_SUCCESS:
            return {
                ...state,
                statusSlide : action.payload
            }
        default:
            return state;
    }
}

export default adminReducer;