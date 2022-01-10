import React, {useState} from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
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
import Notification from '../containers/Header/Notification';
import Search from '../containers/Header/Search';
import axios from 'axios';
import MenuLeft from '../containers/Header/MenuLeft';
import MenuLeftCollapse from '../containers/Header/MenuLeftCollapse';
import { path } from '../utils';
import Footer from '../containers/Header/Footer';
import NotFound from '../containers/System/Search/NotFound';
import Index from '../containers/System/Search/Index';
import Slide from '../containers/System/Slide/Index';

const System = ({ systemMenuPath, isLoggedIn, userInfo, processLogout }) => {
    const [menuLeft, setMenuLeft] = useState(true);
    const [widthMenuRight, setWidthMenuRight] = useState('82%');
    const [widthMenuLeft, setWidthMenuLeft] = useState('18%');
    const [dataSearch, setDataSearch] = useState([]);
    const [query, setQuery] = useState('');
    const history = useHistory()

    console.log(dataSearch);

    //toggle menu left
    const toggleMenu = () => {
        setMenuLeft(!menuLeft);
        setWidthMenuRight(menuLeft ? '100%' : '82%');
    }

    //search
    const handleSearch = async() => {
        let res = await axios({
            method: 'GET',
            'url': `${path.PORT}/api/search`,
            "params": { 
                'keyword': query 
            }
        });

        if(res && res.data && res.data.info) {
            let raw = res.data.info;
            let result = [];

            if(raw && raw.length > 0) {
                raw.map((item, index) => {
                    let object = {};
                    object.firstName = item.firstName;
                    object.lastName = item.lastName;
                    object.email = item.email;
                    object.phoneNumber = item.phoneNumber;
                    object.address = item.address;
                    object.image = item.image;
                    result.push(object);
                });
            }
            setDataSearch(result);
            setQuery('');
            history.push(`/search/keyword=${query}`);
        }
    }

    //press enter search
    const handleKeyDown=(e)=>{
        if(e.key=== 'Enter' || e.keyCode=== 13){     
            handleSearch();
        }
    }

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
                                <Search 
                                    handleSearch={handleSearch}
                                    handleKeyDown={handleKeyDown}
                                    query={query}
                                    setQuery={setQuery}
                                    dataSearch={dataSearch}
                                />
                            </div>

                            <div className="account d-flex align-items-center">
                                <Notification />

                                <div className="acc py-1 px-3 mx-3">
                                    <img src="https://avatars.githubusercontent.com/u/38268599?v=4" alt="" 
                                        style={{width: '35px'}}
                                        className="rounded-circle mr-2" />
                                    <span>{userInfo && userInfo.firstName ? userInfo.firstName : 'Hoang'} <i className="fas fa-caret-down small"></i></span>
                                </div>

                                {/* logout  */}
                                <div className="logout btn btn-default pr-3 text-white font-weight-normal" onClick={processLogout}>
                                    Đăng xuất
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            }

            <div className='module d-flex'>
                {/* toggle menu left  */}
                {isLoggedIn && menuLeft && <MenuLeft widthMenuLeft = {widthMenuLeft} /> }
                {!menuLeft ? <MenuLeftCollapse /> : ''}                
            
                <div className="system-container bg-white py-3 px-2" style={{height: '90vh', overflowY: 'scroll', width: widthMenuRight, boxShadow: 'none'}}>
                    {
                        dataSearch && dataSearch.length > 0 ?
                        <Switch><Route path={path.SEARCH}><Index dataSearch={dataSearch}/></Route></Switch>
                        : 
                        <Switch><Route path={path.SEARCH}><NotFound/></Route></Switch> 
                    }

                    <div className="system-list">
                        <Switch>
                            <Route path="/system/dashboard" component={Dashboard} />
                            <Route path="/system/user-manage" component={UserManage} />
                            <Route path="/system/product-manage" component={ProductManage} />
                            <Route path="/system/order-manage" component={OrderManage} />
                            <Route path="/system/article-manage" component={ArticleManage} />
                            <Route path="/system/news-manage" component={NewsManage} />
                            <Route path="/system/category-manage" component={CategoryManage} />
                            <Route path="/system/slide-manage" component={Slide} />
                            <Route path="/system/report-Statistical" component={StatisticalManage} />
                            <Route path="/system/setting" component={Setting} />
        
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
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
