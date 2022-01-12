import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from "./../store/actions";

import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils';

import './App.scss';
import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';
import HomePage from './HomePage/HomePage';
import ProductDetail from './Client/product/ProductDetail';
import Cart from './Client/cart/Cart';
import Payment from './Client/payment/Payment';
import OrderSuccess from './Client/Check_order/OrderSuccess';
import NotFound from './HomePage/NotFound/Index';

console.warn = () => { };
function App(props) {    
    //login-logout
    const handlePersistorState = () => {
        const { persistor } = props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (props.onBeforeLift) {
                Promise.resolve(props.onBeforeLift())
                    .then(() =>  persistor.purge() )
                    .catch(() => {  persistor.purge(); });
            }else { persistor.purge(); }
        }
    }

    useEffect(() => {
        handlePersistorState();
    }, []);

    return (
        <Router history={history}>
            <Switch>
                <Route path={path.HOME} exact component={(Home)} />
                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />

                {/* client  */}
                <Route path={path.HOMEPAGE} component={HomePage} />
                <Route path={path.DETAIL_PRODUCT} component={ProductDetail} />
                <Route path={path.NOTFOUND} component={NotFound} />

                {/* Order not login  */}
                <Route path={path.CART} component={Cart} />
                <Route path={path.PAYMENT} component={Payment} />
                <Route path={path.MY_ORDER} component={OrderSuccess} />

                {/* Order login  */}
            </Switch>
            <ToastContainer autoClose={5000} />
        </Router>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(App);