import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import {NavLink} from 'react-router-dom';

const  Dashboard = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [listNews, setListNews] = useState([]);

    //user number
    useEffect(() => {
        props.fetchUser();
        setListUsers(props.listUsers);
    }, [listUsers]);

    //product number
    useEffect(() => {
        props.fetchProducts();
        setListProducts(props.listProducts);
    }, [listProducts]);

    //news number
    useEffect(() => {
        props.fetchNews();
        setListNews(props.listNews);
    }, [listNews]);


    return (
        <div className="mx-2 my-3">
            <h5 className="text-dark">Trang chủ</h5>
            
            <div className="d-flex text-white">
                <div className="card my-4 p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190617/ourmid/pngtree-corporate-culture-employee-style-poster-background-material-image_125216.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">{props.listUsers.length}</h2>
                            <h6 className="card-title">THÀNH VIÊN</h6>
                        </div>
                        <NavLink to="/system/user-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card my-4 p-1 " style={{width: '25%'}}>
                    <img className="card-img-top" src="https://image.shutterstock.com/image-illustration/3d-rendering-illustration-online-shop-260nw-1737639272.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">{props.listProducts.length}</h2>
                            <h6 className="card-title">SẢN PHẨM</h6>
                        </div>
                        <NavLink to="/system/product-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card my-4 p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://events.linuxfoundation.org/wp-content/uploads/2020/10/OSS_ELC_EU20_ZoomBackgrounds-01.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">{props.listNews.length}</h2>
                            <h6 className="card-title">TIN TỨC - SỰ KIỆN</h6>
                        </div>
                        <NavLink to="/system/news-manage"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card my-4 p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://media.istockphoto.com/photos/home-office-desk-table-with-coffee-cup-bouquet-of-spring-flowers-lily-picture-id1310455436?b=1&k=20&m=1310455436&s=170667a&w=0&h=chdh2N8T_Gk7D2-dOcUTT_YjS4B4eKNl98cgSK6nuzg=" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">0</h2>
                            <h6 className="card-title">BÀI VIẾT</h6>
                        </div>
                        <NavLink to="/system/article-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>
            </div>

            <div className="d-flex text-white">
                <div className="card my-4 p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://image.shutterstock.com/image-photo/online-shopping-concept-cart-bags-260nw-1680067750.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">0</h2>
                            <h6 className="card-title">ĐƠN HÀNG</h6>
                        </div>
                        <NavLink to="/system/order-manage"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card my-4 p-1 " style={{width: '25%'}}>
                    <img className="card-img-top" src="https://cdn.xxl.thumbs.canstockphoto.com/landscape-of-delivery-truck-with-city-backgrounds-vector-illustration_csp44060328.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">0</h2>
                            <h6 className="card-title">GIAO HÀNG</h6>
                        </div>
                        <NavLink to="/system/delivery-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card my-4 p-1" style={{width: '25%'}}>
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20190830/pngtree-hot-dog-seller-background-in-the-car-vector-image_309234.jpg" className="card-img-top" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">0 <small>đ</small></h2>
                            <h6 className="card-title">BÁN HÀNG </h6>
                        </div>
                        <NavLink to="/system/sell-manage"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card my-4 p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://image.shutterstock.com/image-vector/stock-market-graph-business-candle-260nw-1211189119.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h2 className="card-text font-weight-bold">0 <small>đ</small></h2>
                            <h6 className="card-title">BÁO CÁO -THỐNG KÊ</h6>
                        </div>
                        <NavLink to="/system/dashboard"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div> 
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
        listProducts: state.admin.products,
        listNews: state.admin.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: ()=> dispatch(actions.fetchAllUsersStart()),
        fetchProducts: () => dispatch(actions.fetchProducts()),
        fetchNews: () => dispatch(actions.fetchAllNews())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
