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
    CART: '/cart',
    PAYMENT: '/payment',
    MY_ORDER: '/my-order',
    VERIFY_EMAIL: '/verify-order',
};

export const CRUD_ACTIONS = {
    CREATE: "CREATE",
    EDIT: "EDIT",
    DELETE: "DELETE",
    READ: "READ"
};
 
export const manageActions = {
    ADD: "ADD",
    EDIT: "EDIT",
    DELETE: "DELETE"
};

export const dateFormat = {
    SEND_TO_SERVER: 'DD/MM/YYYY'
};

export const YesNoObj = {
    YES: 'Y',
    NO: 'N'
}