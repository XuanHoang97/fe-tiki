import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/Admin/UserManage';
import ProductManage from '../containers/System/Product/ProductManage';
import Dashboard from '../containers/System/Dashboard/Dashboard';
import OrderManage from '../containers/System/Order/OrderManage';
import NewsManage from '../containers/System/News/NewsManage';
import SellManage from '../containers/System/Sell/SellManage';
import DeliveryManage from '../containers/System/Delivery/DeliveryManage';
class System extends Component {
    render() {
        const { systemMenuPath } = this.props;
        return (
            <div className="system-container bg-white py-3 px-2">
                <div className="system-list">
                    <Switch>
                        <Route path="/system/dashboard" component={Dashboard} />
                        <Route path="/system/user-manage" component={UserManage} />
                        <Route path="/system/product-manage" component={ProductManage} />
                        <Route path="/system/order-manage" component={OrderManage} />
                        <Route path="/system/news-manage" component={NewsManage} />
                        <Route path="/system/sell-manage" component={SellManage} />
                        <Route path="/system/delivery-manage" component={DeliveryManage} />
                        <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(System);
