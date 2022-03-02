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
    rangePrice: [],

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
        case actionTypes.FETCH_GENDER:
            return {
                ...state,
                genders : action.payload
            }

            //fetch role
        case actionTypes.FETCH_ROLE:
            return {
                ...state,
                roles : action.payload
            }

            //fetch position
        case actionTypes.FETCH_POSITION:
            return {
                ...state,
                positions : action.payload,
            }

            //fetch all user
        case actionTypes.FETCH_ALL_USERS:
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
        case actionTypes.SEARCH:
            return {
                ...state,
                dataSearch : action.payload,
            }

            // filter product by price
        case actionTypes.FILTER_PRODUCT:
            return {
                ...state,
                dataSearch : action.payload,
            }

            // get all range price
        case actionTypes.ALL_RANGE_PRICE:
            return {
                ...state,
                rangePrice : action.payload,
            }
            
            //fetch all product
        case actionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products : action.payload
            }

            //fetch status product
        case actionTypes.FETCH_STATUS_PRODUCT:
            return {
                ...state,
                status : action.payload,
            }

            //fetch supplier product
        case actionTypes.FETCH_SUPPLIER_PRODUCT:
            return {
                ...state,
                supplier : action.payload
            }

            //SELECT option product
        case actionTypes.SELECT_OPTION_PRODUCT:
            return {
                ...state,
                optionProduct : action.payload,
            }

        //get product similar
        case actionTypes.FETCH_PRODUCT_SIMILAR:
            return {
                ...state,
                productSimilar : action.payload,
            }

            //fetch all article
        case actionTypes.FETCH_ARTICLE:
            return {
                ...state,
                articles : action.payload,
            }
            
            //fetch all category
        case actionTypes.FETCH_CATEGORIES:
            return {
                ...state,
                categories : action.listCategory,
            }

            //fetch all product in category
        case actionTypes.FETCH_PRODUCT_IN_CATEGORY:
            return {
                ...state,
                detailCategory : action.payload,
            }

            //fetch all news and event
        case actionTypes.FETCH_ALL_NEWS:
            return {
                ...state,
               news : action.payload
            }

            //fetch allCode news and event
        case actionTypes.FETCH_CODE_NEWS:
            return {
                ...state,
                status_news : action.payload
            }

        // get all slide
        case actionTypes.FETCH_ALL_SLIDE:
            return {
                ...state,
                slides: action.payload,
            }
            
        //get all special category
        case actionTypes.FETCH_SPECIAL_CATEGORY:
            return {
                ...state,
                specialCategories: action.payload
            }

        //get all status slide
        case actionTypes.FETCH_ALL_STATUS_SLIDE:
            return {
                ...state,
                statusSlide : action.payload
            }
        default:
            return state;
    }
}
export default adminReducer;