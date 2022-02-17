import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Category from './Category';
import Search from './search/Search';
import OrderWithoutLogin from './cart/OrderWithoutLogin';
import Suggest from './Suggest';
import './style/header.scss';
import Account from './account/Account';
import { path } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import instance from './../../../axios';
import { getUser } from 'store/actions';
import OrderLogin from './cart/OrderLogin';

const Header = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.auth.user);

    // Refresh token
    useEffect(() => {
        if(token){
            instance.get(`/user`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                dispatch(getUser(res))
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
        }
    }, [dispatch, token]);

    return (
        <div className="header">
            <div className="container p-0">
                <div className="row pr-2">
                    <nav className="navbar navbar-expand-sm navbar-dark col-12 pb-0 pt-1 pr-2">
                        <Link to={path.HOMEPAGE} >
                            <div className="navbar-brand pt-0 col-1">
                                <img style={{ maxWidth: '58px' }} src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="logo" />
                            </div>
                        </Link>

                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="collapse navbar-collapse col-md-11 p-0" id="collapsibleNavId">
                            <ul className="navbar-nav align-items-center col-md-12 pr-0">
                                <Category />
                                <Search />
                                <Account />
                                {
                                    user ? <OrderLogin /> : <OrderWithoutLogin />
                                }
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