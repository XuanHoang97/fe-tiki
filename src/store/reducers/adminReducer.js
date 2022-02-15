import actionTypes from '../actions/actionTypes';

const keywordSearchLocal = localStorage.getItem('keywordSearch') || '';
// const urlSearchLocal = localStorage.getItem('urlSearch') || '';

const initialState = {
    genders: [],
    roles: [],
    positions: [],
    users: [],
    products: [],
    productSimilar: [],

    keywordSearch: keywordSearchLocal,
    urlSearch: '',
    dataSearch: [],

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
            return {
                ...state,
                genders : action.payload
            }

            //fetch role
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                roles : action.payload
            }

            //fetch position
        case actionTypes.FETCH_POSITION_SUCCESS:
            return {
                ...state,
                positions : action.payload,
            }

            //fetch all user
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                users : action.payload,
            }


            // keyword search
            case actionTypes.SEARCH_KEYWORD:
                localStorage.setItem('keywordSearch', action.payload);
            return {
                ...state,
                keywordSearch: action.payload
            }

            // url search
            case actionTypes.SEARCH_URL:
                localStorage.setItem('urlSearch', action.payload);
            return {
                ...state,
                urlSearch: action.payload
            }

        //search
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                dataSearch : action.payload,
            }

            // filter product by price
        case actionTypes.FILTER_PRODUCT_SUCCESS:
            return {
                ...state,
                dataSearch : action.payload,
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
            return {
                ...state,
                optionProduct : action.payload,
            }

            // filter product
        // case actionTypes.FILTER_PRODUCT_SUCCESS:
        //     return {
        //         ...state,
        //         filterProduct : action.payload,
        //     }

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
                categories : action.listCategory,
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

        //get all status slide
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