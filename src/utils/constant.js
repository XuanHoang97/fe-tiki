export const path = {
    HOME: '/',
    HOMEPAGE: '/home',
    LOGIN: '/login',
    LOG_OUT: '/logout',
    SYSTEM: '/system',
    SEARCH: '/search',
    PORT: 'http://localhost:2022',
    NOTFOUND: '/404',

    // Authentication
    REGISTER: '/account/register',
    LOGIN_AUTH: '/account/login',
    ACCOUNT: '/account/profile',
    CHANGE_PASSWORD: '/account/password',
    ORDER: '/user/purchase',
    NOTIFICATION: '/user/notifications/order',

    // Admin
    DASHBOARD: '/system/dashboard',
    USER_MANAGE: '/system/user-manage',
    PRODUCT_MANAGE: '/system/product-manage',
    ORDER_MANAGE: '/system/order-manage',
    ARTICLE_MANAGE: '/system/article-manage',
    NEWS_MANAGE: '/system/news-manage',
    CATEGORY_MANAGE: '/system/category-manage',
    MULTIMEDIA_MANAGE: '/system/slide-manage',
    STATISTICAL: '/system/report-Statistical',
    SUPPLIER_MANAGE: '/system/supplier-manage',
    SALE_MANAGE: '/system/sale-manage',
    SETTING: '/system/setting',

    // client
    DETAIL_PRODUCT: '/products/:id',
    CART: '/user/cart',
    PAYMENT: '/user/payment',
    MY_ORDER: '/my-order',
    VERIFY_EMAIL: '/verify-order',
};

export const CRUD_ACTIONS = {
    CREATE: "CREATE",
    EDIT: "EDIT",
};
