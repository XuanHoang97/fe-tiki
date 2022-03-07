import { path } from "utils";

export const MenuAdmin = [
    {
        name: 'Tổng quan',
        icon: 'fas fa-tachometer-alt',
        path: path.DASHBOARD,
        subMenu: []
    },

    {
        name: 'Đơn hàng',
        icon: 'fas fa-cart-plus ',
        path: path.ORDER_MANAGE,
        subMenu: [
            {
                name: 'Chi tiết đơn hàng',
                path: path.ORDER_MANAGE,
            },

            {
                name: 'Đơn hàng chưa xử lý',
                path: path.ORDER_MANAGE,

            }
        ]
    },

    {
        name: 'Bán hàng',
        icon: 'fas fa-shopping-cart',
        path: path.SALE_MANAGE,
        subMenu: [
            {
                name: 'Chi tiết đơn hàng',
                path: path.SALE_MANAGE,
            },
        ]
    },

    {
        name: 'Sản phẩm',
        icon: 'fab fa-product-hunt',
        path: path.PRODUCT_MANAGE,
        subMenu: [
            {
                name: 'Danh sách sản phẩm',
                path: path.PRODUCT_MANAGE,
            },
        ]
    },

    {
        name: 'Khách hàng',
        icon: 'fas fa-users-cog',
        path: path.USER_MANAGE,
        subMenu: [
            {
                name: 'Danh sách khách hàng',
                path: path.USER_MANAGE,
            },
        ]
    },

    
    {
        name: 'Danh mục',
        icon: 'fas fa-box-open',
        path: path.CATEGORY_MANAGE,
        subMenu: [
            {
                name: 'Danh sách danh mục',
                path: path.CATEGORY_MANAGE,
            },
        ]
    },

    {
        name: 'Bài viết',
        icon: 'fas fa-book',
        path: path.ARTICLE_MANAGE,
        subMenu: [
            {
                name: 'Danh sách bài viết',
                path: path.ARTICLE_MANAGE,
            },
        ]
    },

    {
        name: 'Tin tức - sự kiện',
        icon: 'far fa-newspaper',
        path: path.NEWS_MANAGE,
        subMenu: [
            {
                name: 'Danh sách tin tức',
                path: path.NEWS_MANAGE,
            },
        ]
    },
    
    {
        name: 'Đa phương tiện',
        icon: 'far fa-images ',
        path: path.MULTIMEDIA_MANAGE,
        subMenu: [
            {
                name: 'Danh sách đa phương tiện',
                path: path.MULTIMEDIA_MANAGE,
            },
        ]
    },
    {
        name: 'Khuyến mãi',
        icon: 'fa fa-percent',
        path: path.DISCOUNT_MANAGE,
        subMenu: [
            {
                name: 'Danh sách khuyến mãi',
                path: path.DISCOUNT_MANAGE,
            },
        ]
    },

    {
        name: 'Đánh giá sản phẩm',
        icon: 'fas fa-star',
        path: path.VOTE_MANAGE,
        subMenu: []
    },

    {
        name: 'Báo cáo - Thống kê',
        icon: 'far fa-flag',
        path: path.STATISTICAL,
        subMenu: []
    },

    {
        name: 'Cài đặt',
        icon: 'fas fa-cog',
        path: path.SETTING,
        subMenu: []
    },



]