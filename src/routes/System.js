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
import Multimedia from '../containers/System/Multimedia/Index';
import MenuLeft from 'containers/System/Header/menuLeft/MenuLeft';
import MenuLeftCollapse from 'containers/System/Header/menuLeft/MenuLeftCollapse';
import Notification from 'containers/System/Header/notification/Notification';
import Bill from 'containers/System/Sale/Bill';
import { path } from 'utils';
import './style.scss'
import VoteManage from 'containers/System/Vote/VoteManage';

const System = (props) => {
    const {systemMenuPath, isLoggedIn,userInfo, processLogout} = props;
    const [menuLeft, setMenuLeft] = useState(true);
    const [widthMenuRight, setWidthMenuRight] = useState('82%');
    const [widthMenuLeft] = useState('18%');

    const toggleMenu = () => {
        setMenuLeft(!menuLeft);
        setWidthMenuRight(menuLeft ? '100%' : '82%');
    }

    useEffect(() => {
        document.title = "Hệ thống quản lý Tiki";
    }, []);

    return (
        <div className='main-container'>
            <div className='module d-flex'>
                {isLoggedIn && menuLeft && <MenuLeft widthMenuLeft = {widthMenuLeft} /> }
                {!menuLeft ? <MenuLeftCollapse /> : ''}                
            
                <div className="system-container bg-light" style={{width: widthMenuRight}}>
                    <div className="menuAdmin">
                        <div className="collapse_module">
                            <span onClick={() => toggleMenu()}>
                                <i className="fas fa-bars"></i>
                            </span>  
                        </div>

                        <div className="account">
                            <Notification />
                            <div className="acc py-1 px-3 mx-4">
                                <img src="https://avatars.githubusercontent.com/u/38268599?v=4" alt="" className="rounded-circle mr-2" />
                                <span>{userInfo && userInfo.firstName ? userInfo.firstName : 'Hoang'} 
                                    <i className="fas fa-caret-down small"></i>
                                </span>
                            </div>
                            <div className="logout btn" onClick={processLogout}>Đăng xuất</div>
                        </div>
                    </div>
                    
                    <div className="system-list px-3 py-2">
                        <Switch>
                            <Route path={`${path.DASHBOARD}`} component={Dashboard} />
                            <Route path={`${path.USER_MANAGE}`} component={UserManage} />
                            <Route path={`${path.PRODUCT_MANAGE}`} component={ProductManage} />
                            <Route path={`${path.ORDER_MANAGE}`} component={OrderManage} />
                            <Route path={`${path.ARTICLE_MANAGE}`} component={ArticleManage} />
                            <Route path={`${path.NEWS_MANAGE}`} component={NewsManage} />
                            <Route path={`${path.CATEGORY_MANAGE}`} component={CategoryManage} />
                            <Route path={`${path.MULTIMEDIA_MANAGE}`} component={Multimedia} />
                            <Route path={`${path.STATISTICAL}`} component={StatisticalManage} />
                            <Route path={`${path.SALE_MANAGE}`} component={Bill} />
                            <Route path={`${path.VOTE_MANAGE}`} component={VoteManage} />
                            <Route path={`${path.SETTING}`} component={Setting} />
        
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
