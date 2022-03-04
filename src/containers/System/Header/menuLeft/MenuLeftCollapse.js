import React from 'react';
import { NavLink } from 'react-router-dom';
import { path } from 'utils';
import './MenuLeft.scss'

function MenuLeftCollapse(props) {
    return (
        <div>
            <div className="dashboard bg-dark menuleftCollapse">
                <NavLink to={`${path.DASHBOARD}`} activeClassName="active" className ="menu-left" exact>
                    <i className="fas fa-tachometer-alt"></i>
                </NavLink>

                <NavLink to={`${path.USER_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-users-cog"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.CATEGORY_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center" >
                        <i className=" fas fa-box-open"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.PRODUCT_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center" >
                        <i className="fab fa-product-hunt"></i>
                    </div>
                </NavLink>


                <NavLink to={`${path.NEWS_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-newspaper"></i>
                    </div>
                </NavLink>
                
                <NavLink to={`${path.ARTICLE_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-book"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.MULTIMEDIA_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-camera mr-2"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.ORDER_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-cart-plus"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.SALE_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className=" fas fa-cart-plus"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.SUPPLIER_MANAGE}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-building"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.STATISTICAL}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="far fa-flag"></i>
                    </div>
                </NavLink>

                <NavLink to={`${path.SETTING}`} activeClassName="active" className ="menu-left">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-cog"></i>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default MenuLeftCollapse;