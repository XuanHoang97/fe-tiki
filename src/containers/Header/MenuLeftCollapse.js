import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuLeft.scss'

function MenuLeftCollapse(props) {
    return (
        <div>
            <div className="dashboard bg-dark">
                <NavLink to="/system/dashboard" activeClassName="active" className ="menu-left" exact>
                    <i className="fas fa-tachometer-alt"></i>
                </NavLink>

                <NavLink to="/system/user-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-users-cog"></i>
                    </div>
                </NavLink>

                <NavLink to="/system/category-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center" >
                        <i className=" fas fa-box-open"></i>
                    </div>
                </NavLink>

                <NavLink to="/system/product-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center" >
                        <i className="fab fa-product-hunt"></i>
                    </div>
                </NavLink>


                <NavLink to="/system/news-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-newspaper"></i>
                    </div>
                </NavLink>
                
                <NavLink to="/system/article-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-book"></i>
                    </div>
                </NavLink>

                <NavLink to="/system/order-manage" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-cart-plus"></i>
                    </div>
                </NavLink>

                <NavLink to="/system/report-statiscal" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-flag"></i>
                    </div>
                </NavLink>

                <NavLink to="/system/setting" activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-cog"></i>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default MenuLeftCollapse;