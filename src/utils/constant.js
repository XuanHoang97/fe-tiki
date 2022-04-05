export const path = {
    HOME: '/',
    HOMEPAGE: '/home',
    LOGIN: '/login',
    LOG_OUT: '/logout',
    SYSTEM: '/system',
    SEARCH: '/search',
    PORT: 'http://localhost:2000',
    PORT_LOCAL: 'http://localhost:3000',

    // Authentication
    REGISTER: '/account/register',
    LOGIN_AUTH: '/account/login',
    ACCOUNT: '/account/profile',
    CHANGE_PASSWORD: '/account/password',
    CHANGE_ADDRESS: '/account/address',
    INFO_PAYMENT: '/account/payment',
    ORDER: '/user/purchase',
    NOTIFICATION: '/user/notifications/order',
    TIKI_XU: '/user/tiki-xu',
    CHECK_MAIL: 'https://mail.google.com/mail/u/0/#inbox',
    VOUCHER: '/user/voucher',
    DISCOUNT_DETAIL: '/discount',
    DISCOUNT: '/user/notifications/discount',
    ACTIVITY: '/user/notifications/activity',

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
    DISCOUNT_MANAGE: '/system/discount-manage',
    VOTE_MANAGE: '/system/vote-manage',
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

export const CRUD_CATEGORY= {
    CREATE: "CREATE",
    EDIT: "EDIT",
};
