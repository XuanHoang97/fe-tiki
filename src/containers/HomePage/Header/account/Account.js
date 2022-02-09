import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';
import { path } from 'utils';
import * as actions from './../../../../store/actions';
import { Link } from 'react-router-dom';
import {verifyToken} from './../../../../services/authService';
import instance from './../../../../axios';
import { getUser } from './../../../../store/actions';

const token = localStorage.getItem('token');
const Account = () => {
    const [hoverAccount, setHoverAccount] = useState(false);
    const [username, setUsername] = useState('');
    // const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    

    // Refresh token
    const user = useSelector(state => state.auth.user);
    console.log(user)
    useEffect(() => {
        if(token){
            instance.get(`/user`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                //luu thong tin user vao redux r truy xuat thoi,
                dispatch(getUser(res))
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
        }
    }, []);
    // const refreshToken = async () => {
    //     try {
    //         const res = await verifyToken();
    //         let token = res.data.accessToken;
    //         setToken(token);
    //         const decoded = jwt_decode(token);
    //         setUsername(decoded.username);
    //         setExpire(decoded.exp);
    //     } catch (error) {
    //         if (error.response) {
    //             history.push(`${path.HOMEPAGE}`);
    //         }
    //     }
    // }


    // const axiosJWT = axios.create();
    // // Add a request interceptor - refresh token
    // axiosJWT.interceptors.response.use(async (config) => {
    //     const currentDate = new Date();
    //     if (expire * 1000 < currentDate.getTime()) {
    //         const res = await verifyToken();
    //         let token = res.data.accessToken;
    //         config.headers.Authorization = `Bearer ${token}`;
    //         setToken(token);
    //         const decoded = jwt_decode(token);
    //         setUsername(decoded.username);
    //         setExpire(decoded.exp);
    //     }
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });
    //login dau 
    //logout
    const Logout = async () => {
        try {
            dispatch(actions.logoutAccount());
            localStorage.removeItem('token');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <span className='account d-flex align-items-center text-white pl-3'
                onMouseEnter={() => setHoverAccount(true)}
            >    
                {
                    user ?
                    <React.Fragment>
                        <img src="https://avatars.githubusercontent.com/u/38268599?v=4" className='w-25 rounded-circle' alt="" />
                        <b className='ml-2' style={{fontSize: '12px'}}>{user?.username}</b>
                    </React.Fragment>
                    :
                    <span>Tài khoản <i className="fas fa-sort-down"></i></span>
                }
            </span>

            {hoverAccount && (
                <div className="user-account" 
                    onMouseLeave={() => setHoverAccount(false)}
                >
                    {
                        token ?
                        <div className='acc-detail'>
                            <div onClick={Logout} className="item-acc">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU-ZEXVPgvlrEPzhaAIFjyRUaqglcuKdkx4lgk2r-ryshxRle56ba4S4SaUoI0GTf2Iw&usqp=CAU" className='mr-2' style={{width: '8%'}}  alt="" />
                                Đơn hàng của tôi
                                <span className='ml-3 text-danger'>0</span>    
                            </div>
                            <div onClick={Logout} className="item-acc">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkD-kTOQbIAe99FFsWVOUBkNU-yoXM1l4Ajodjy-NOcMucxsFQSB_3SdStbbueWQq-vk&usqp=CAU" className='mr-2' style={{width: '8%'}}  alt="" />
                                Cập nhật tài khoản
                            </div>
                            <div onClick={Logout} className="item-acc">
                                <img src="https://www.clipartmax.com/png/middle/147-1470587_logout-logout-icon-red-png.png" className='mr-2' style={{width: '8%'}}  alt="" />           
                                Đăng xuất
                            </div>
                        </div>
                        :
                        <div>
                            <Link to={path.REGISTER} className="dropdown-item mb-2">
                                <button type="button" className="btn btn-warning btn-block">
                                    Tạo tài khoản
                                </button>
                            </Link>

                            <Link to={path.LOGIN_AUTH} className="dropdown-item mb-2">
                                <button type="button" className="btn btn-success btn-block">
                                    Đăng nhập
                                </button>
                            </Link>
                            <div className="dropdown-item mb-2">
                                <button type="button" name="" id="" className="d-flex align-items-center px-3 btn btn-primary btn-block">
                                    <i className="fab fa-facebook-f mr-4"></i> <span>Đăng nhập bằng Facebook</span>
                                </button>
                            </div>

                            <div className="dropdown-item mb-2">
                                <button type="button" name="" id="" className="d-flex align-items-center px-3 btn btn-danger btn-block">
                                    <i className="fab fa-google-plus-g mr-3"></i> <span>Đăng nhập bằng Google</span>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            )}
        </React.Fragment>
    );
}
export default Account;