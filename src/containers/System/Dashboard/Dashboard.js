import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import {NavLink} from 'react-router-dom';
import { numberFormat } from '../../../components/Formatting/FormatNumber';

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

    useEffect(() => {
        dispatch(actions.fetchAllUser());
        dispatch(actions.fetchProducts());
        dispatch(actions.fetchAllNews());
        dispatch(actions.fetchAllCategory());
        dispatch(actions.GetAllArticle());
        dispatch(actions.fetchAllSlide());
        dispatch(actions.fetchAllSpecialCategory());
    }, [dispatch]);

    return (
        <div className="mx-2 my-3">
            <h5 className="text-dark mb-4"><i className="fas fa-home mr-2"></i>Trang chủ</h5>
            
            <div className="d-flex text-white">
                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-climbing-the-peak-of-success-silhouette-background-image_213493.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listUsers.length} </h3>
                            <h6 className="card-title">THÀNH VIÊN</h6>
                        </div>
                        <NavLink to="/system/user-manage" className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img src="https://media.istockphoto.com/vectors/online-shopping-with-smartphone-ecommerce-concept-vector-illustration-vector-id1179101263?k=20&m=1179101263&s=612x612&w=0&h=H3TZLGP3OK4h_u1rhIQNGAPrsjZ_eEl_cmaRIjjnQgQ=" className="card-img-top" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listCategory.length} </h3>
                            <h6 className="card-title">DANH MỤC </h6>
                        </div>
                        <NavLink to="/system/category-manage"  className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1 " style={{width: '25%'}}>
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-thank-you-with-poster-background-image_132028.jpg" alt='' />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat d-flex justify-content-between">
                            <div>    
                                <h3 className="card-text font-weight-bold"> {listProducts.length} </h3>
                                <h6 className="card-title">SẢN PHẨM</h6>
                            </div>
                        </div>
                        <NavLink to="/system/product-manage" className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://events.linuxfoundation.org/wp-content/uploads/2020/10/OSS_ELC_EU20_ZoomBackgrounds-01.jpg" alt='' />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listNews.length} </h3>
                            <h6 className="card-title">TIN TỨC - SỰ KIỆN</h6>
                        </div>
                        <NavLink to="/system/news-manage"  className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>
            </div>

            <div className="d-flex text-white">
                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXLwvkyFzRrLwD7cF0s3gt2WdFWbBai38XVLad5Fsgi3Fq-guu55u9sqEjMVzKXMBQUo&usqp=CAU" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {listArticle.length} </h3>
                            <h6 className="card-title">BÀI VIẾT</h6>
                        </div>
                        <NavLink to="/system/article-manage" className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://thumbs.dreamstime.com/b/wide-gaming-background-glowing-lines-abstract-hi-tech-display-product-multimedia-audio-video-229399270.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold"> {multimedia} </h3>
                            <h6 className="card-title">MULTIMEDIA</h6>
                        </div>
                        <NavLink to="/system/slide-manage" className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>

                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyccB_TdSjBpEY5mAaZcmIA4rDmT14MVaj7-O75W1Xq6YLIaaonDPNNYhJ4eH8Xdjgc14&usqp=CAU" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h3 className="card-text font-weight-bold">0</h3>
                            <h6 className="card-title">ĐƠN HÀNG</h6>
                        </div>
                        <NavLink to="/system/order-manage"  className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div>


                <div className="card p-1" style={{width: '25%'}}>
                    <img className="card-img-top" src="https://png.pngtree.com/thumb_back/fh260/background/20201104/pngtree-stack-golden-coins-on-white-background-with-earning-profit-concept-gold-image_460097.jpg" alt=''  />
                    <div className="card-img-overlay d-flex justify-content-between"  >
                        <div className="stat">
                            <h4 className="card-text font-weight-bold">
                                {numberFormat(45995525)}
                            </h4>
                            <h6 className="card-title">DOANH THU</h6>
                        </div>
                        <NavLink to="/system/report-statiscal"  className="btn btn-warning px-2">Xem</NavLink>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Dashboard;
