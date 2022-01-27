import React, {useEffect, useState} from 'react';
import RegisterAccount from './Register';
import LoginAccount from './Login';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router';
import { path } from 'utils';

const Account = () => {
    const [hoverAccount, setHoverAccount] = useState(false);
    const [Register, setRegister] = useState(false);
    const [Login, setLogin] = useState(false);

    //verify token
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:8081/auth/token');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setUsername(decoded.username);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push(`${path.HOMEPAGE}`);
            }
        }
    }

    const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:8081/auth/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setUsername(decoded.username);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    //register account
    const register = () => {
        setRegister(!Register);
    }

    //login account
    const login = () => {
        setLogin(!Login);
    }

    //logout account
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:8081/auth/logout');
            // setUsername(users);
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
                    token && users ?
                    <React.Fragment>
                        <img src="https://avatars.githubusercontent.com/u/38268599?v=4" className='w-25 rounded-circle' alt="" />
                        <b className='ml-2' style={{fontSize: '12px'}}>{username}</b>
                    </React.Fragment>
                    :
                    <span>Tài khoản <i className="fas fa-sort-down"></i></span>
                }
            </span>

            {hoverAccount && (
                <div className="user-account" 
                    // style={{display: 'block'}}
                    onMouseLeave={() => setHoverAccount(false)}
                >
                    {
                        token && users ?
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
                            <div className="dropdown-item mb-2">
                                <button onClick={()=> register()} type="button" className="btn btn-warning btn-block">
                                    Tạo tài khoản
                                </button>
                            </div>

                            <div className="dropdown-item mb-2">
                                <button onClick={()=> login()} type="button" className="btn btn-success btn-block">
                                    Đăng nhập
                                </button>
                            </div>


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

            <RegisterAccount isRegister={Register} toggle={register} isLogin={Login} />
            <LoginAccount isLogin={Login} toggle={login} />
        </React.Fragment>
    );
}
export default Account;