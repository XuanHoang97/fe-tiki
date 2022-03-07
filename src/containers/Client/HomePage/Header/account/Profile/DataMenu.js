import { path } from "utils";

export const MenuUser = [
    {
        id: 1,
        name: 'Tài khoản của tôi',
        path: path.ACCOUNT,
        icon: 'https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4',
        sub: [
            {
                name: 'Hồ sơ',
                path: path.ACCOUNT,
            },

            {
                name: 'Đổi mật khẩu',
                path: path.CHANGE_PASSWORD,
            },
        ],
    },

    {
        id: 2,
        name: 'Đơn mua',
        path: path.ORDER,
        icon: 'https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078',
    },

    {
        id: 3,
        name: 'Thông báo',
        path: path.NOTIFICATION,
        icon: 'https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c',
        sub: [
            {
                name: 'Cập nhật đơn hàng',
                path: path.NOTIFICATION,
            },
            
            {
                name: 'Hoạt động',
                path: path.ACTIVITY,
            },
            {
                name: 'Khuyến mãi',
                path: path.DISCOUNT,
            },
        ],
    },

    {
        id: 4,
        name: 'Tiki xu',
        path: path.TIKI_XU,
        icon: 'https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784',
    },

    {
        id: 5,
        name: 'Kho Voucher',
        path: path.VOUCHER,
        icon: 'https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748',
    },
]