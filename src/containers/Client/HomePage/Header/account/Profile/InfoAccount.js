import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink,Redirect } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import Profile from './Profile';
import Purchase from '../MyOrder/Purchase';
import Order from '../notification/Order';
import Header from '../../Header';
import { path } from 'utils';
import { useSelector, useDispatch } from 'react-redux';
import { FilterNotify, getUser } from 'store/actions';
import {MenuUser} from './DataMenu';
import ACTIVITY from '../notification/Activity';
import Address from './Address';

const InfoAccount = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const token = localStorage.getItem('token');
    const [subMenu, setSubMenu] = useState(`${path.ACCOUNT}`);

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    
    useEffect(() => {
        document.title = 'Thông tin tài khoản';
    }, [user]);
    
    if (!token) {
        return <Redirect to={path.HOMEPAGE} />
    }

    const viewDetail = (notify) => {
        let userId = user ? user.id : '';
        dispatch(FilterNotify(userId, notify.type));
    }


    return (
        <div className='bg-light'>
            <Header />
            <Router>
                <div className='container my-3 d-flex'>
                    <div className='col-2 py-3 p-0'>
                        <div className='avatar d-flex'>
                            <img src={user && user.image ? user.image : 'http://res.cloudinary.com/do7qmg6jr/image/upload/v1645518444/sbgr7wd9k1t9v8f0cwvm.jpg'} className='rounded-circle' style={{width:'60px', height:'60px'}}  alt="" />
                            <div className='info'>
                                <div className='name'>{ user ? user.username : '' }</div>
                                <div className='editProfile small mt-1'>
                                    <i className="fas fa-edit"></i>
                                    <span>Sửa hồ sơ</span>
                                </div>
                            </div>
                        </div>

                        {
                            MenuUser && MenuUser.length > 0 &&
                            MenuUser.map((item, index) => {
                                return (
                                    <div key={index} className='menu-user'>
                                        <NavLink to={item.path} 
                                            activeClassName={`${item.sub ? '' : 'activeMenu' }`}
                                            className='item-menu'>
                                            <div className='item'
                                                onClick={() => setSubMenu(item.path)}
                                            >
                                                <img src={item.icon} alt='' />
                                                <span>{item.name}</span>
                                            </div>
                                        </NavLink>

                                        {
                                            subMenu === item.path &&
                                            <div className="subMenu"
                                            >
                                                {
                                                    item.sub && item.sub.length > 0 &&
                                                    item.sub.map((sub, index) => {
                                                        return (
                                                            <NavLink to={sub.path} key={index}
                                                                className='item-menu' 
                                                                activeClassName='activeSubMenu'
                                                                onClick={() => viewDetail(sub)}
                                                            >
                                                                <div>{sub.name}</div>
                                                            </NavLink>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='col-10 bg-white p-4'>
                        <Switch>
                            <Route exact path={path.ACCOUNT} component={Profile} />
                            <Route path={path.CHANGE_PASSWORD} component={ChangePassword} />
                            <Route path={path.ADDRESS_CHANGE} component={Address} />

                            <Route path={path.ORDER} component={Purchase} />
                            <Route path={path.NOTIFICATION} component={Order} />
                            <Route path={path.ACTIVITY} component={ACTIVITY} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
}
export default InfoAccount;