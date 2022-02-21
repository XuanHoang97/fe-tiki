import React, { useEffect } from 'react';
import Header from '../../Header';
import { path } from 'utils';
import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import Profile from './Profile';
import Purchase from '../MyOrder/Purchase';
import Order from '../notification/Order';
import { useSelector, useDispatch } from 'react-redux';
import instance from './../../../../../axios';
import { getUser } from 'store/actions';

function InfoAccount(props) {
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
    
    useEffect(() => {
        document.title = 'Thông tin tài khoản';
    }, []);
    
    return (
        <div className='bg-light'>
            <Header />
            <Router>
                <div className='container my-3 d-flex'>
                    <div className='col-2 py-3 p-0'>
                        <div className='avatar d-flex'>
                            <img src="https://cf.shopee.vn/file/0da87e797bc536f57ff4dadbd8781db4_tn" className='rounded-circle'  alt="" />
                            <div className='info'>
                                <div className='name'>{ user ? user.username : '' }</div>
                                <div className='editProfile'>
                                    <i className="fas fa-edit"></i>
                                    <span>Sửa hồ sơ</span>
                                </div>
                            </div>
                        </div>

                        <div className='module'>
                            <div className='profile'>
                                <div className='title'>
                                    <img src="https://cf.shopee.vn/file/ba61750a46794d8847c3f463c5e71cc4" className='illustration' alt=""/>
                                    <span>Tài khoản của tôi</span>
                                </div>
                                <div className='item-profile'>
                                    <NavLink to={`${path.ACCOUNT}`} activeClassName="active" className='item-module' exact>Hồ sơ</NavLink>
                                </div>

                                <div className='item-profile'>
                                    <NavLink to={`${path.CHANGE_PASSWORD}`} activeClassName="active" className='item-module'>Đổi mật khẩu</NavLink>
                                </div>
                            </div>
                        </div>

                        <NavLink to={`${path.ORDER}`} activeClassName="activeOrder" className='my_Order'>
                            <img src="https://cf.shopee.vn/file/f0049e9df4e536bc3e7f140d071e9078" className='illustration' alt="" />
                            <span>Đơn mua</span>
                        </NavLink>

                        <NavLink to={`${path.NOTIFICATION}`} activeClassName="activeNotification" className='notification'>
                            <img src="https://cf.shopee.vn/file/e10a43b53ec8605f4829da5618e0717c" className='illustration' alt="" />
                            <span>Thông báo</span>
                        </NavLink>
                    </div>

                    <div className='col-10 bg-white p-3'>
                        <Switch>
                            <Route exact path={path.ACCOUNT} component={Profile} />
                            <Route path={path.CHANGE_PASSWORD} component={ChangePassword} />
                            <Route path={path.ORDER} component={Purchase} />
                            <Route path={path.NOTIFICATION} component={Order} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}
export default InfoAccount;