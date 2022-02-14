import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import * as actions from "./../store/actions";

import UserManage from '../containers/System/Admin/UserManage';
import ProductManage from '../containers/System/Product/ProductManage';
import Dashboard from '../containers/System/Dashboard/Dashboard';
import OrderManage from '../containers/System/Order/OrderManage';
import NewsManage from '../containers/System/News/NewsManage';
import ArticleManage from '../containers/System/Article/ArticleManage';
import CategoryManage from '../containers/System/Category/CategoryManage';
import StatisticalManage from '../containers/System/Statistical/Statistical';
import Setting from '../containers/System/Setting/Index';
import Notification from '../containers/Header/notification/Notification';
import Search from '../containers/Header/Search';
import MenuLeft from '../containers/Header/menuLeft/MenuLeft';
import MenuLeftCollapse from '../containers/Header/menuLeft/MenuLeftCollapse';
import Multimedia from '../containers/System/Multimedia/Index';
import SupplierManage from 'containers/System/supplier/SupplierManage';

const System = ({ systemMenuPath, isLoggedIn, userInfo, processLogout }) => {
    const [menuLeft, setMenuLeft] = useState(true);
    const [widthMenuRight, setWidthMenuRight] = useState('82%');
    const [widthMenuLeft] = useState('18%');

    //toggle menu left
    const toggleMenu = () => {
        setMenuLeft(!menuLeft);
        setWidthMenuRight(menuLeft ? '100%' : '82%');
    }

    useEffect(() => {
        document.title = "Hệ thống quản lý Tiki";
    }, []);

    return (
        <div className='main-container'>
            {   
                isLoggedIn &&
                <div className="header-container"> 
                    <div className="control d-flex text-white">
                        {
                            menuLeft && 
                            <div className="module py-1 px-3 d-flex align-items-center" style={{width: widthMenuLeft, background: 'rgb(76, 117, 235)'}}>
                                <span className="mr-3">Quản lý hệ thống </span>
                                <img src="https://huflitjobhub.com/wp-content/uploads/2021/09/uwc1625303270.png" alt=""  style={{width: '30px'}} className="rounded-circle" />
                            </div>
                        }

                        <div className="d-flex justify-content-between align-items-center" style={{width: widthMenuRight, background: 'rgb(76 117 235)'}}>
                            <div className="collapse_module d-flex align-items-center ml-3">
                                <span 
                                    onClick={() => toggleMenu()}  
                                    style={{cursor: 'pointer'}}><i className="fas fa-bars"></i>
                                </span>  
                                <Search />
                            </div>

                            <div className="account d-flex align-items-center">
                                <Notification />

                                <div className="acc py-1 px-3 mx-3">
                                    <img src="https://avatars.githubusercontent.com/u/38268599?v=4" alt="" 
                                        style={{width: '35px'}}
                                        className="rounded-circle mr-2" />
                                    <span>{userInfo && userInfo.firstName ? userInfo.firstName : 'Hoang'} <i className="fas fa-caret-down small"></i></span>
                                </div>

                                <div className="logout btn btn-default pr-3 text-white font-weight-normal" onClick={processLogout}>
                                    Đăng xuất
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            }

            <div className='module d-flex'>
                {/* menu left  */}
                {isLoggedIn && menuLeft && <MenuLeft widthMenuLeft = {widthMenuLeft} /> }
                {!menuLeft ? <MenuLeftCollapse /> : ''}                
            
                <div className="system-container bg-white py-3" style={{height: '90vh', overflowY: 'scroll', width: widthMenuRight, boxShadow: 'none'}}>
                    <div className="system-list px-2">
                        <Switch>
                            <Route path="/system/dashboard" component={Dashboard} />
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/product-manage" component={ProductManage} />
                            <Route path="/system/order-manage" component={OrderManage} />
                            <Route path="/system/article-manage" component={ArticleManage} />
                            <Route path="/system/news-manage" component={NewsManage} />
                            <Route path="/system/category-manage" component={CategoryManage} />
                            <Route path="/system/slide-manage" component={Multimedia} />
                            <Route path="/system/report-Statistical" component={StatisticalManage} />
                            <Route path="/system/supplier-manage" component={SupplierManage} />
                            <Route path="/system/setting" component={Setting} />
        
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo : state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
