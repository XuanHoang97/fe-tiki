import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import {NavLink} from 'react-router-dom';

const  Dashboard = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [listProducts, setListProducts] = useState([]);
    const [listNews, setListNews] = useState([]);
    const [listCategory, setListCategory] = useState([]);

    //user number
    useEffect(() => {
        props.fetchUser();
        setListUsers(props.listUsers);
    }, [listUsers]);

    //product number
    useEffect(() => {
        props.fetchProducts();
        setListProducts(props.listProducts);
        
        props.fetchCategories();
        setListCategory(props.listCategory);
    }, [listProducts, listCategory]);

    //news number
    useEffect(() => {
        props.fetchNews();
        setListNews(props.listNews);
    }, [listNews]);


    return (

        <div className="mx-2 my-3">
            <h5 className="text-dark">Trang chủ</h5>
            
            <div className="d-flex text-white">
                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/263128913_197872095891744_9128078477956995865_n.png?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=mI24bIYJ0L0AX9bUpSG&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIn2M0nHEidGFEnwdw2o4nVdtwNhQQjcLHvvuOKScCONw&oe=61E4A8D8" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">{props.listUsers.length}</h3>
                            <h6 className="card-title">THÀNH VIÊN</h6>
                        </div>
                        <NavLink to="/system/user-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img src="https://png.pngtree.com/thumb_back/fw800/background/20190830/pngtree-hot-dog-seller-background-in-the-car-vector-image_309234.jpg" className="card-img-top" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">{props.listCategory.length}</h3>
                            <h6 className="card-title">DANH MỤC </h6>
                        </div>
                        <NavLink to="/system/category-manage"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 " style={{width: '25%'}}>
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-thank-you-with-poster-background-image_132028.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat d-flex justify-content-between">
                            <div>    
                                <h3 className="card-text font-weight-bold">{props.listProducts.length}</h3>
                                <h6 className="card-title">SẢN PHẨM</h6>
                            </div>
                        </div>
                        <NavLink to="/system/product-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://events.linuxfoundation.org/wp-content/uploads/2020/10/OSS_ELC_EU20_ZoomBackgrounds-01.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">{props.listNews.length}</h3>
                            <h6 className="card-title">TIN TỨC - SỰ KIỆN</h6>
                        </div>
                        <NavLink to="/system/news-manage"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

            </div>
            <div className="d-flex text-white">
                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXLwvkyFzRrLwD7cF0s3gt2WdFWbBai38XVLad5Fsgi3Fq-guu55u9sqEjMVzKXMBQUo&usqp=CAU" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">0</h3>
                            <h6 className="card-title">BÀI VIẾT</h6>
                        </div>
                        <NavLink to="/system/article-manage" className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyccB_TdSjBpEY5mAaZcmIA4rDmT14MVaj7-O75W1Xq6YLIaaonDPNNYhJ4eH8Xdjgc14&usqp=CAU" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">0</h3>
                            <h6 className="card-title">ĐƠN HÀNG</h6>
                        </div>
                        <NavLink to="/system/order-manage"  className="btn btn-warning">Xem</NavLink>
                    </div>
                </div>


                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://image.shutterstock.com/image-vector/stock-market-graph-business-candle-260nw-1211189119.jpg" alt="Card image" />
                    <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">0 <small>đ</small></h3>
                            <h6 className="card-title">BÁO CÁO -THỐNG KÊ</h6>
                        </div>
                        <NavLink to="/system/report-statiscal"  className="btn btn-warning">Xem</NavLink>
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
        listNews: state.admin.news,
        listCategory: state.admin.categories

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: ()=> dispatch(actions.fetchAllUsersStart()),
        fetchProducts: () => dispatch(actions.fetchProducts()),
        fetchNews: () => dispatch(actions.fetchAllNews()),
        fetchCategories: () => dispatch(actions.fetchAllCategory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
