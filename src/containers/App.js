import React, { useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { ToastContainer } from 'react-toastify';
import { history } from '../redux'
import { path } from '../utils';

import Home from '../routes/Home';
import System from '../routes/System';
import ProductDetail from './Client/product/ProductDetail';
import Cart from './Client/cart/Cart';
import Payment from './Client/payment/Payment';
import OrderSuccess from './Client/Check_order/OrderSuccess';
import VerifyEmail from './Client/Check_order/VerifyEmail';
import SearchResult from './Client/HomePage/Header/search/Result';
import Login from './System/Auth/Login';
import LoginAuth from './Client/HomePage/Header/account/Login';
import InfoAccount from './Client/HomePage/Header/account/Profile/InfoAccount';
import Register from './Client/HomePage/Header/account/Register';
import HomePage from './Client/HomePage/HomePage';
import NotFound from './Client/HomePage/NotFound/Index';
import './App.scss';

console.warn = () => {};
function App(props) {    
    
    useEffect(() => {
        handlePersistorState();
    }, []);
    
    // save redux state to localStorage
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
    return (
        <Router history={history}>
            <ToastContainer autoClose={2500} />
            <Switch>
                <Route path={path.HOME} exact component={(Home)} />
                <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />

                {/* client  */}
                <Route path={path.HOMEPAGE} component={HomePage} />
                <Route path={path.DETAIL_PRODUCT} component={ProductDetail} />
                <Route path={path.NOTFOUND} component={NotFound} />
                <Route path={path.SEARCH} component={SearchResult} />

                {/* Authentication  */}
                <Route path={path.REGISTER} component={Register} />
                <Route path={path.LOGIN_AUTH} component={LoginAuth} />
                
                <Route path={path.ACCOUNT} component={InfoAccount} />
                <Route path={path.CHANGE_PASSWORD} component={InfoAccount} />
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
            </Switch>
        </Router>
    )
}
export default App;