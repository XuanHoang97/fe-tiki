import React from 'react';
import {NavLink} from 'react-router-dom';
import './MenuLeft.scss'

const MenuLeft = ({widthMenuLeft, effect}) => {
    return (
        <div className='p-0 bg-dark text-white' style={{width: widthMenuLeft}}>
            <div className="account d-flex p-3 align-items-center" style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                <img src="https://avatars.githubusercontent.com/u/38268599?v=4" alt="" style={{width: '50px'}}
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
                <NavLink to="/system/dashboard" activeClassName="active" className ="menu-left" exact>
                    <span><i className="fas fa-tachometer-alt mr-2"></i>Bảng điều khiển</span>
                </NavLink>

                <NavLink to="/system/user-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className=" fas fa-users-cog mr-2"></i>
                        <span>Quản lý người dùng</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/category-manage" activeClassName="active" className ="menu-left" >
                    <div className="d-flex align-items-center module" >
                        <i className=" fas fa-box-open mr-2"></i>
                        <span>Quản lý danh mục</span> 

                    </div>
                    <span><i className='fas fa-angle-right small'></i></span>
                </NavLink>

                <NavLink to="/system/product-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module" >
                        <i className="fab fa-product-hunt mr-2"></i>
                        <span>Quản lý sản phẩm </span> 

                    </div>
                    <span><i className='fas fa-angle-right small'></i></span>
                </NavLink>


                <NavLink to="/system/news-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="far fa-newspaper mr-2"></i>
                        <span>Quản lý tin tức - sự kiện</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>
                
                <NavLink to="/system/article-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="fas fa-book mr-2"></i>
                        <span>Quản lý bài viết</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/slide-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="far fa-images mr-2"></i>
                        <span>Slide - Banner - Image</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/order-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className=" fas fa-cart-plus mr-2"></i>
                        <span>Quản lý đơn hàng </span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/report-statiscal" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="far fa-flag mr-2"></i>
                        <span>Báo cáo, thống kê</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/setting" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center module">
                        <i className="fas fa-cog mr-2"></i>
                        <span>Cài đặt</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>
            </div>
        </div>
    );
}

export default MenuLeft;