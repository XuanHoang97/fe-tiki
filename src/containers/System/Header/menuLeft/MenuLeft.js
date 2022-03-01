import React from 'react';
import {NavLink} from 'react-router-dom';
import { path } from 'utils';
import './MenuLeft.scss'

const MenuLeft = ({widthMenuLeft, effect}) => {
    return (
        <div className='p-0 bg-dark text-white menu-hoziron' style={{width: widthMenuLeft}}>
            <div className="account d-flex p-3 align-items-center" style={{borderBottom: '1px solid rgb(79 81 91)'}}>
                <img src="https://avatars.githubusercontent.com/u/38268599?v=4" alt="" style={{width: '40px'}}
                    className="rounded-circle" />

                <div className="info ml-3">
                    <span>Le Xuan Hoang</span> <br/>
                    <div className="role d-flex small justify-content-between align-items-center">
                        <span className="small"><i className="fas fa-circle text-primary small mr-1"></i>Admin</span>
                        <span className="small"><i className="fas fa-circle text-success small mr-1"></i>Online</span>
                    </div>
                </div>
            </div>

            <div className="dashboard">
                <NavLink to={`${path.DASHBOARD}`} activeClassName="active" className ="menu-left" exact>
                    <span><i className="fas fa-tachometer-alt mr-2"></i>Bảng điều khiển</span>
                </NavLink>

                <NavLink to={`${path.USER_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className=" fas fa-users-cog mr-2"></i>
                        <span>Quản lý nhân sự</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.CATEGORY_MANAGE}`} activeClassName="active" className ="menu-left" >
                    <div className="d-flex align-items-center module" >
                        <i className=" fas fa-box-open mr-2"></i>
                        <span>Quản lý danh mục</span> 

                    </div>
                    <span><i className='fas fa-angle-right small'></i></span>
                </NavLink>

                <NavLink to={`${path.PRODUCT_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module" >
                        <i className="fab fa-product-hunt mr-2"></i>
                        <span>Quản lý sản phẩm </span> 

                    </div>
                    <span><i className='fas fa-angle-right small'></i></span>
                </NavLink>


                <NavLink to={`${path.NEWS_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="far fa-newspaper mr-2"></i>
                        <span>Quản lý tin tức - sự kiện</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>
                
                <NavLink to={`${path.ARTICLE_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="fas fa-book mr-2"></i>
                        <span>Quản lý bài viết</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.MULTIMEDIA_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="far fa-images mr-2"></i>
                        <span>Quản lý đa phương tiện</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.ORDER_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className=" fas fa-cart-plus mr-2"></i>
                        <span>Quản lý đơn hàng </span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.SUPPLIER_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-building mr-2"></i>
                        <span>Quản lý nhà cung cấp</span>
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.WAREHOUSE_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-building mr-2"></i>
                        <span>Quản lý kho hàng</span>
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.STATISTICAL}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="far fa-flag mr-2"></i>
                        <span>Báo cáo, thống kê</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to={`${path.SETTING}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="fas fa-cog mr-2"></i>
                        <span>Cài đặt <small className='text-warning ml-2'>( v.04.12.21 )</small></span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>
            </div>
        </div>
    );
}

export default MenuLeft;