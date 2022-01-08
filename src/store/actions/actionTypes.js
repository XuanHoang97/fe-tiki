const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',

    //user login
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAILED: 'FETCH_POSITION_FAILED',


    // create a new user  
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',

    //get all user
    FETCH_ALL_USERS_SUCCESS: 'FETCH_ALL_USERS_SUCCESS',
    FETCH_ALL_USERS_FAILED: 'FETCH_ALL_USERS_FAILED',

    //delete user
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    //edit user 
    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',

    //SEARCH USER
    SEARCH_USER_SUCCESS: 'SEARCH_USER_SUCCESS',
    SEARCH_USER_FAILED: 'SEARCH_USER_FAILED',
    
    //get all product
    FETCH_ALL_PRODUCTS_SUCCESS: 'FETCH_ALL_PRODUCTS_SUCCESS',
    FETCH_ALL_PRODUCTS_FAILED: 'FETCH_ALL_PRODUCTS_FAILED',

    //create new product
    CREATE_PRODUCT_SUCCESS: 'CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_FAILED: 'CREATE_PRODUCT_FAILED',

    //edit product
    EDIT_PRODUCT_SUCCESS: 'EDIT_PRODUCT_SUCCESS',
    EDIT_PRODUCT_FAILED: 'EDIT_PRODUCT_FAILED',

    //delete product
    DELETE_PRODUCT_SUCCESS: 'DELETE_PRODUCT_SUCCESS',
    DELETE_PRODUCT_FAILED: 'DELETE_PRODUCT_FAILED',

    //get product by category
    FETCH_PRODUCT_BY_CATEGORY_SUCCESS: 'FETCH_PRODUCT_BY_CATEGORY_SUCCESS',
    FETCH_PRODUCT_BY_CATEGORY_FAILED: 'FETCH_PRODUCT_BY_CATEGORY_FAILED',

    //fetch status product
    FETCH_STATUS_PRODUCT_SUCCESS: 'FETCH_STATUS_PRODUCT_SUCCESS',
    FETCH_STATUS_PRODUCT_FAILED: 'FETCH_STATUS_PRODUCT_FAILED',

    //fetch supplier product
    FETCH_SUPPLIER_PRODUCT_SUCCESS: 'FETCH_SUPPLIER_PRODUCT_SUCCESS',
    FETCH_SUPPLIER_PRODUCT_FAILED: 'FETCH_SUPPLIER_PRODUCT_FAILED',

    //save info detail product
    SAVE_INFO_DETAIL_PRODUCT_SUCCESS: 'SAVE_INFO_DETAIL_PRODUCT_SUCCESS',
    SAVE_INFO_DETAIL_PRODUCT_FAILED: 'SAVE_INFO_DETAIL_PRODUCT_FAILED',

    //edit info detail product
    EDIT_INFO_DETAIL_PRODUCT_SUCCESS: 'EDIT_INFO_DETAIL_PRODUCT_SUCCESS',
    EDIT_INFO_DETAIL_PRODUCT_FAILED: 'EDIT_INFO_DETAIL_PRODUCT_FAILED',

    //get some product
    FETCH_SOME_PRODUCT_SUCCESS: 'FETCH_SOME_PRODUCT_SUCCESS',
    FETCH_SOME_PRODUCT_FAILED: 'FETCH_SOME_PRODUCT_FAILED',

    //get product similar
    FETCH_PRODUCT_SIMILAR_SUCCESS: 'FETCH_PRODUCT_SIMILAR_SUCCESS',
    FETCH_PRODUCT_SIMILAR_FAILED: 'FETCH_PRODUCT_SIMILAR_FAILED',
    
    //select option product
    SELECT_OPTION_PRODUCT_SUCCESS: 'SELECT_OPTION_PRODUCT_SUCCESS',
    SELECT_OPTION_PRODUCT_FAILED: 'SELECT_OPTION_PRODUCT_FAILED',

    //get all article
    FETCH_ALL_ARTICLE_SUCCESS: 'FETCH_ALL_ARTICLE_SUCCESS',
    FETCH_ALL_ARTICLE_FAILED: 'FETCH_ALL_ARTICLE_FAILED',
    

    //get all category
    FETCH_ALL_CATEGORIES_SUCCESS: 'FETCH_ALL_CATEGORIES_SUCCESS',
    FETCH_ALL_CATEGORIES_FAILED: 'FETCH_ALL_CATEGORIES_FAILED',

    //create new category
    CREATE_CATEGORY_SUCCESS: 'CREATE_CATEGORY_SUCCESS',
    CREATE_CATEGORY_FAILED: 'CREATE_CATEGORY_FAILED',

    //edit category
    EDIT_CATEGORY_SUCCESS: 'EDIT_CATEGORY_SUCCESS',
    EDIT_CATEGORY_FAILED: 'EDIT_CATEGORY_FAILED',

    //delete category
    DELETE_CATEGORY_SUCCESS: 'DELETE_CATEGORY_SUCCESS',
    DELETE_CATEGORY_FAILED: 'DELETE_CATEGORY_FAILED',

    //get all news and event
    FETCH_ALL_NEWS_SUCCESS: 'FETCH_ALL_NEWS_SUCCESS',
    FETCH_ALL_NEWS_FAILED: 'FETCH_ALL_NEWS_FAILED',

    //get allcode news and event
    FETCH_ALLCODE_NEWS_SUCCESS: 'FETCH_ALLCODE_NEWS_SUCCESS',
    FETCH_ALLCODE_NEWS_FAILED: 'FETCH_ALLCODE_NEWS_FAILED',

    //create news and event
    CREATE_NEWS_SUCCESS: 'CREATE_NEWS_SUCCESS',
    CREATE_NEWS_FAILED: 'CREATE_NEWS_FAILED',

    //edit news and event
    EDIT_NEWS_SUCCESS: 'EDIT_NEWS_SUCCESS',
    EDIT_NEWS_FAILED: 'EDIT_NEWS_FAILED',

    //delete news and event
    DELETE_NEWS_SUCCESS: 'DELETE_NEWS_SUCCESS',
    DELETE_NEWS_FAILED: 'DELETE_NEWS_FAILED',

    //get all slides
    FETCH_ALL_SLIDE_SUCCESS: 'FETCH_ALL_SLIDE_SUCCESS',
    FETCH_ALL_SLIDE_FAILED: 'FETCH_ALL_SLIDE_FAILED',

    //create new slide
    CREATE_SLIDE_SUCCESS: 'CREATE_SLIDE_SUCCESS',
    CREATE_SLIDE_FAILED: 'CREATE_SLIDE_FAILED',

    //edit slide
    EDIT_SLIDE_SUCCESS: 'EDIT_SLIDE_SUCCESS',
    EDIT_SLIDE_FAILED: 'EDIT_SLIDE_FAILED',

    //delete slide
    DELETE_SLIDE_SUCCESS: 'DELETE_SLIDE_SUCCESS',
    DELETE_SLIDE_FAILED: 'DELETE_SLIDE_FAILED',

    //get all special category
    FETCH_ALL_SPECIAL_CATEGORY_SUCCESS: 'FETCH_ALL_SPECIAL_CATEGORY_SUCCESS',
    FETCH_ALL_SPECIAL_CATEGORY_FAILED: 'FETCH_ALL_SPECIAL_CATEGORY_FAILED',

    //create new special category
    CREATE_SPECIAL_CATEGORY_SUCCESS: 'CREATE_SPECIAL_CATEGORY_SUCCESS',
    CREATE_SPECIAL_CATEGORY_FAILED: 'CREATE_SPECIAL_CATEGORY_FAILED',

    //edit special category
    EDIT_SPECIAL_CATEGORY_SUCCESS: 'EDIT_SPECIAL_CATEGORY_SUCCESS',
    EDIT_SPECIAL_CATEGORY_FAILED: 'EDIT_SPECIAL_CATEGORY_FAILED',

    //delete special category
    DELETE_SPECIAL_CATEGORY_SUCCESS: 'DELETE_SPECIAL_CATEGORY_SUCCESS',
    DELETE_SPECIAL_CATEGORY_FAILED: 'DELETE_SPECIAL_CATEGORY_FAILED',

    //get all status slide
    FETCH_ALL_STATUS_SLIDE_SUCCESS: 'FETCH_ALL_STATUS_SLIDE_SUCCESS',
    FETCH_ALL_STATUS_SLIDE_FAILED: 'FETCH_ALL_STATUS_SLIDE_FAILED',
})

export default actionTypes;