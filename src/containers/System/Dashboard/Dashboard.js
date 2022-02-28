import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import {NavLink} from 'react-router-dom';
import { numberFormat } from '../../../components/Formatting/FormatNumber';
import './style.scss'
import { path } from 'utils';

const  Dashboard = (props) => {
    //fetch data
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.admin.users);
    const listProducts = useSelector(state => state.admin.products);
    const listNews = useSelector(state => state.admin.news);
    const listCategory = useSelector(state => state.admin.categories);
    const listArticle = useSelector(state => state.admin.articles);
    const listSlide = useSelector(state => state.admin.slides);
    const specialCategory = useSelector(state => state.admin.specialCategories);
    const multimedia = listSlide.length + specialCategory.length;
    const order = useSelector(state => state.client.orders);
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.fetchAllUser());
        dispatch(actions.fetchProducts());
        dispatch(actions.fetchAllNews());
        dispatch(actions.fetchAllCategory());
        dispatch(actions.GetAllArticle());
        dispatch(actions.fetchAllSlide());
        dispatch(actions.fetchAllSpecialCategory());
        dispatch(actions.getAllOrder());
        dispatch(actions.filterOrderByStatus('S4'));
    }, [dispatch]);

    return (
        <div className="mx-2">
            <h6 className="text-dark mb-3">Trang chủ</h6>
            
            <div className="d-flex text-white">
                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-climbing-the-peak-of-success-silhouette-background-image_213493.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listUsers.length} </h3>
                            <h6 className="card-title">THÀNH VIÊN</h6>
                        </div>
                        <NavLink to={`${path.USER_MANAGE}`} className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3">
                    <img src="https://media.istockphoto.com/vectors/online-shopping-with-smartphone-ecommerce-concept-vector-illustration-vector-id1179101263?k=20&m=1179101263&s=612x612&w=0&h=H3TZLGP3OK4h_u1rhIQNGAPrsjZ_eEl_cmaRIjjnQgQ=" className="card-img-top" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listCategory.length} </h3>
                            <h6 className="card-title">DANH MỤC </h6>
                        </div>
                        <NavLink to={`${path.CATEGORY_MANAGE}`}  className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3 ">
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-thank-you-with-poster-background-image_132028.jpg" alt='' />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat d-flex justify-content-between">
                            <div>    
                                <h3 className="card-text font-weight-bold"> {listProducts.length} </h3>
                                <h6 className="card-title">SẢN PHẨM</h6>
                            </div>
                        </div>
                        <NavLink to={`${path.PRODUCT_MANAGE}`} className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://events.linuxfoundation.org/wp-content/uploads/2020/10/OSS_ELC_EU20_ZoomBackgrounds-01.jpg" alt='' />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listNews.length} </h3>
                            <h6 className="card-title">TIN TỨC - SỰ KIỆN</h6>
                        </div>
                        <NavLink to={`${path.NEWS_MANAGE}`}  className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>
            </div>

            <div className="d-flex text-white">
                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXLwvkyFzRrLwD7cF0s3gt2WdFWbBai38XVLad5Fsgi3Fq-guu55u9sqEjMVzKXMBQUo&usqp=CAU" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listArticle.length} </h3>
                            <h6 className="card-title">BÀI VIẾT</h6>
                        </div>
                        <NavLink to={`${path.ARTICLE_MANAGE}`} className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://thumbs.dreamstime.com/b/wide-gaming-background-glowing-lines-abstract-hi-tech-display-product-multimedia-audio-video-229399270.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {multimedia} </h3>
                            <h6 className="card-title">MULTIMEDIA</h6>
                        </div>
                        <NavLink to={`${path.MULTIMEDIA_MANAGE}`} className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyccB_TdSjBpEY5mAaZcmIA4rDmT14MVaj7-O75W1Xq6YLIaaonDPNNYhJ4eH8Xdjgc14&usqp=CAU" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">{order.length}</h3>
                            <h6 className="card-title">ĐƠN HÀNG</h6>
                        </div>
                        <NavLink to={`${path.ORDER_MANAGE}`}  className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://previews.123rf.com/images/marushy/marushy1807/marushy180700509/104810913-many-bills-of-100-dollars-us-banknote-green-background-with-money-cash-currency-close-up-president-s.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h4 className="card-text font-weight-bold">
                                {
                                    filterOrder && filterOrder.length > 0 
                                    && filterOrder.filter(item => item.status === 'S4').length > 0 ?
                                    <span>
                                        {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                                        return total + item.total
                                        }, 0))}
                                    </span>
                                    : 
                                    <span className='text-success'>0 đ</span>
                                }
                            </h4>
                            <h6 className="card-title">DOANH THU</h6>
                        </div>
                        <NavLink to={`${path.STATISTICAL}`}  className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>
            </div>

            <div className="d-flex text-white">
                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-business-handshake-cooperation-float-image_15698.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">0</h3>
                            <h6 className="card-title">NHÀ CUNG CẤP</h6>
                        </div>
                        <NavLink to={`${path.SUPPLIER_MANAGE}`}  className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 col-3">
                    <img className="card-img-top" src="https://media.gettyimages.com/photos/cardboard-boxes-on-blur-storage-warehouse-shelves-background-3d-picture-id1193312195?b=1&k=20&m=1193312195&s=170667a&w=0&h=52tB0I5cBFV9eh6E1e054b76pGRReOoI2FMBajRJOFo=" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">0</h3>
                            <h6 className="card-title">KHO HÀNG</h6>
                        </div>
                        <NavLink to="/system/warehouse-manage"  className="btn btn-warning viewDetail px-2">Xem</NavLink>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Dashboard;
