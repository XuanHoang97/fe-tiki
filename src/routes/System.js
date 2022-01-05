import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/Admin/UserManage';
import ProductManage from '../containers/System/Product/ProductManage';
import Dashboard from '../containers/System/Dashboard/Dashboard';
import OrderManage from '../containers/System/Order/OrderManage';
import NewsManage from '../containers/System/News/NewsManage';
import ArticleManage from '../containers/System/Article/ArticleManage';
import CategoryManage from '../containers/System/Category/CategoryManage';
import StatisticalManage from '../containers/System/Statistical/Statistical';
import Index from '../containers/System/Slide/Index';
import Setting from '../containers/System/Setting/Index';

const System = ({ systemMenuPath }) => {
    return (
        <div className="system-container bg-white py-3 px-2" style={{height: '90vh', overflowY: 'scroll'}}>
            <div className="system-list">
                <Switch>
                    <Route path="/system/dashboard" component={Dashboard} />
                    <Route path="/system/user-manage" component={UserManage} />
                    <Route path="/system/product-manage" component={ProductManage} />
                    <Route path="/system/order-manage" component={OrderManage} />
                    <Route path="/system/article-manage" component={ArticleManage} />
                    <Route path="/system/news-manage" component={NewsManage} />
                    <Route path="/system/category-manage" component={CategoryManage} />
                    <Route path="/system/slide-manage" component={Index} />
                    <Route path="/system/report-Statistical" component={StatisticalManage} />
                    <Route path="/system/setting" component={Setting} />

                    <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                </Switch>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
