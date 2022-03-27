import OrderWithoutLogin from './cart/OrderWithoutLogin';
import { useSelector } from 'react-redux';
import OrderLogin from './cart/OrderLogin';
import { Link } from "react-router-dom";
import Account from './account/Account';
import Search from './search/Search';
import Notify from './Notify/Notify';
import Category from './Category';
import Suggest from './Suggest';
import { path } from 'utils';
import './style/header.scss';
import React from 'react';

const Header = () => {
    const user = useSelector(state => state.auth.user);
    const logo = 'https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png';

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-sm navbar-dark col-12">
                        <Link to={path.HOMEPAGE}>
                            <div className="navbar-brand">
                                <img src={logo} alt="logo" />
                            </div>
                        </Link>

                        <div className="navbar-collapse col-md-11">
                            <ul className="navbar-nav col-md-12">
                                <Category />
                                <Search />
                                <Notify />
                                <Account />
                                { user ? <OrderLogin /> : <OrderWithoutLogin /> }
                            </ul>
                        </div>
                    </nav>
                </div>
                <Suggest />
            </div>
        </div>
    );
}
export default Header;