import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';


import { userIsAuthenticated, userIsNotAuthenticated } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../routes/Home';
import Login from './Auth/Login';
import Header from './Header/Header';
import System from '../routes/System';

import MenuLeft from './Header/MenuLeft';
import Footer from './Header/Footer';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    
    render() {

        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        {this.props.isLoggedIn &&
                            <div className="header-container"> 
                                <Header />
                            </div>    
                        }

                        <span className="content-container">
                            <div className="module d-flex">
                                {this.props.isLoggedIn && <MenuLeft /> }
                                <div className="content m-0" style={{width: '80%', boxShadow: 'none', background: 'lightgrey'}}>
                                    <Switch>
                                        <Route path={path.HOME} exact component={(Home)} />
                                        <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} />
                                        <Route path={path.SYSTEM} component={userIsAuthenticated(System)} />
                                    </Switch>
                                </div>
                            </div>
                            <Footer />
                        </span>

                        <ToastContainer
                            position= "bottom-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);