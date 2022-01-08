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
                <Route path="/products/:id" component={ProductDetail} />
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