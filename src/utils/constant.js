export const path = {
    HOME: '/',
    HOMEPAGE: '/home',
    LOGIN: '/login',
    LOG_OUT: '/logout',
    SYSTEM: '/system',
    SEARCH: '/search',
    PORT: 'http://localhost:8000',
    NOTFOUND: '/404',

    // Authentication
    REGISTER: '/account/register',
    LOGIN_AUTH: '/account/login',

    ACCOUNT: '/account/profile',
    CHANGE_PASSWORD: '/account/password',
    ORDER: '/user/purchase',
    NOTIFICATION: '/user/notifications/order',


    DETAIL_PRODUCT: '/products/:id',
    CART: '/user/cart',
    PAYMENT: '/user/payment',
    MY_ORDER: '/my-order',
    VERIFY_EMAIL: '/verify-order',
};

export const CRUD_ACTIONS = {
    CREATE: "CREATE",
    EDIT: "EDIT",
    DELETE: "DELETE",
    READ: "READ"
};
