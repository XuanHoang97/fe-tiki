import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import * as actions from "./../store/actions";

import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';
import { path } from '../utils';

import Home from '../routes/Home';
import Login from './Auth/Login';
import System from '../routes/System';
import MenuLeft from './Header/MenuLeft';
import Footer from './Header/Footer';
import Notification from './Header/Notification';
import './App.scss';
import Search from './Header/Search';
import MenuLeftCollapse from './Header/MenuLeftCollapse';


console.warn = () => { };
function App(props) {
    const { processLogout, userInfo } = props;
    
    const [menuLeft, setMenuLeft] = useState(true);
    const [widthMenuRight, setWidthMenuRight] = useState('82%');
    const [widthMenuLeft, setWidthMenuLeft] = useState('18%');


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


    const toggleMenu = () => {
        setMenuLeft(!menuLeft);
        setWidthMenuRight(menuLeft ? '100%' : '82%');
    }

    return (
        <>
            <Router history={history}>
                <div className="main-container">
                    {props.isLoggedIn &&
                        <div className="header-container"> 
                            <div className="control d-flex text-white">
                            {
                                menuLeft && 
                                <div className="module py-1 px-3 d-flex align-items-center" style={{width: widthMenuLeft, background: 'rgb(76, 117, 235)'}}>
                                    <span className="mr-3">Quản lý hệ thống </span>
                                    <img src="https://huflitjobhub.com/wp-content/uploads/2021/09/uwc1625303270.png" alt=""  style={{width: '30px'}} className="rounded-circle" />
                                </div>
                            }

                            <div className="content d-flex justify-content-between align-items-center" style={{width: widthMenuRight, background: 'rgb(76 117 235)'}}>
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

                                    {/* logout  */}
                                    <div className="logout btn btn-default pr-3 text-white font-weight-normal" onClick={processLogout}>
                                        Đăng xuất <i className="fas fa-sign-out-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    }

                    <span className="content-container">
                        <div className="module d-flex">
                            {props.isLoggedIn && menuLeft && <MenuLeft widthMenuLeft = {widthMenuLeft} /> }

                            {!menuLeft ? <MenuLeftCollapse /> : ''}

                            <div className="content m-0" style={{width: widthMenuRight, boxShadow: 'none', background: 'lightgrey'}}>
                                <Switch>
                                    <Route path={path.HOME} exact component={(Home)} />
                                    <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                    <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                </Switch>
                            </div>
                        </div>
                        <Footer />
                    </span>

                    <ToastContainer autoClose={5000} />
                </div>
            </Router>
        </>
    )
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
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