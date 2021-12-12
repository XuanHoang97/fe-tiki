import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const MenuLeft = () => {
    const [submenu, setSubmenu] = useState(false);

    return (
        <div className="p-0 bg-dark text-white" style={{width: '18%'}}>
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
                <NavLink to="/system/dashboard" activeClassName="active" className =" dashboard_item d-flex align-items-center px-3 py-3 text-white" exact style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                    <i className="fas fa-tachometer-alt mr-2"></i>
                    Bảng điều khiển
                </NavLink>

                <NavLink to="/system/user-manage" activeClassName="active" className =" dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white" style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-users-cog mr-2"></i>
                        <span>Quản lý người dùng</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/product-manage" activeClassName="active" className =" dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white" style={{borderBottom: '1px solid rgb(67 69 81)'}} >
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-box-open mr-2"></i>
                        <span>Quản lý sản phẩm </span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/news-manage" activeClassName="active" className =" dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white"style={{borderBottom: '1px solid rgb(67 69 81)'}} >
                    <div className="d-flex align-items-center">
                        <i className="far fa-newspaper mr-2"></i>
                        <span>Quản lý bài viết</span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>
                


                <NavLink to="/system/order-manage" activeClassName="active" className =" dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white" style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-cart-plus mr-2"></i>
                        <span>Quản lý đơn hàng </span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <NavLink to="/system/delivery-manage" activeClassName="active" className =" dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white" style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-truck mr-2"></i>
                        <span>Quản lý giao hàng </span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>
                
                <NavLink to="/system/sell-manage" activeClassName="active" className =" dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white" style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-shopping-cart mr-2"></i>
                        <span>Quản lý bán hàng </span> 
                    </div>
                    <span><i className="fas fa-angle-right small"></i></span>
                </NavLink>

                <div className="report small px-3" style={{borderBottom: '1px solid rgb(67 69 81)'}}>
                    <span>
                        <li>Báo cáo doanh thu</li>
                    </span>
                    <span>
                        <li>Báo cáo lượng người mua</li>
                    </span>
                    <span>
                        <li>Sản phẩm bán chạy</li>
                    </span>
                </div>

                <NavLink to="/setting" activeClassName="active" className ="dashboard_item d-flex align-items-center justify-content-between px-3 py-3 text-white" 
                    onClick={() => setSubmenu(!submenu)}
                >
                    <div className="d-flex align-items-center">
                        <i className="fas fa-cogs mr-2"></i>
                        <span>Setting</span> 
                    </div>
                    <span><i className={submenu ? "fas fa-angle-down" : 'fas fa-angle-right small'}></i></span>
                </NavLink>

                <div className= {submenu ? 'd-block' : 'd-none'} >
                    <span>  Dark/Light Theme </span> <br/>
                    <span>  Multi language </span>
                </div>
            </div>
        </div>
    );
}

export default MenuLeft;