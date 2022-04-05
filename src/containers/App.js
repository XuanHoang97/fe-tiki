import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { history } from '../redux'
import { path } from '../utils';
import React from 'react';

import ProductDetail from './Client/product/ProductDetail';
import OrderSuccess from './Client/Check_order/OrderSuccess';
import VerifyEmail from './Client/Check_order/VerifyEmail';
import SearchResult from './Client/HomePage/Header/search/Result';
import LoginAuth from './Client/HomePage/Header/account/Login';
import InfoAccount from './Client/HomePage/Header/account/Profile/InfoAccount';
import Discount from './Client/HomePage/Header/account/voucher/Discount';
import Register from './Client/HomePage/Header/account/Register';
import NotFound from './Client/HomePage/NotFound/Index';
import HomePage from './Client/HomePage/HomePage';
import Payment from './Client/payment/Payment';
import Login from './System/Auth/Login';
import System from '../routes/System';
import Cart from './Client/cart/Cart';
import Home from '../routes/Home';
import './App.scss';

console.warn = () => {};
function App(props) {   
    return (
        <Router history={history}>
            <ToastContainer autoClose={3000} />
            <Switch>
                <Route path={path.HOME} exact component={(Home)} />
                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />

                {/* client  */}
                <Route exact path={path.HOMEPAGE} component={HomePage} />
                <Route exact path={path.DETAIL_PRODUCT} component={ProductDetail} />
                <Route exact path={path.SEARCH} component={SearchResult} />
                <Route exact path={path.DISCOUNT_DETAIL} component={Discount} />

                {/* Auth*/}
                <Route path={path.REGISTER} component={Register} />
                <Route path={path.LOGIN_AUTH} component={LoginAuth} />
                
                <Route path={path.ACCOUNT} component={InfoAccount} />
                <Route path={path.CHANGE_PASSWORD} component={InfoAccount} />
                <Route path={path.CHANGE_ADDRESS} component={InfoAccount} />
                <Route path={path.INFO_PAYMENT} component={InfoAccount} />
                <Route path={path.ORDER} component={InfoAccount} />
                <Route path={path.NOTIFICATION} component={InfoAccount} />
                <Route path={path.ACTIVITY} component={InfoAccount} />
                <Route path={path.TIKI_XU} component={InfoAccount} />
                <Route path={path.VOUCHER} component={InfoAccount} />

                {/* Order with login  */}
                <Route path={path.CART} component={Cart} />
                <Route path={path.PAYMENT} component={Payment} />
                <Route path={path.MY_ORDER} component={OrderSuccess} />
                <Route path={path.VERIFY_EMAIL} component={VerifyEmail} />

                <Route exact path="*"><NotFound /></Route>
            </Switch>
        </Router>
    )
}
export default App;