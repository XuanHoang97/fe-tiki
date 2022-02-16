import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { path } from 'utils';
import * as actions from './../../../../store/actions';
import { Link } from 'react-router-dom';
import instance from './../../../../axios';
import { getUser } from './../../../../store/actions';
import { useHistory } from 'react-router-dom';

const token = localStorage.getItem('token');
const Account = () => {
    const [hoverAccount, setHoverAccount] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
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
    }, [dispatch]);

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
                        user ?
                        <div className='acc-detail'>
                            <div onClick={()=>history.push(path.ACCOUNT)} className="item-acc">
                                <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png" className='mr-2' style={{width: '8%'}}  alt="" />
                                Tài khoản của tôi
                            </div>

                            <div onClick={()=>history.push(path.ORDER)} className="item-acc">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU-ZEXVPgvlrEPzhaAIFjyRUaqglcuKdkx4lgk2r-ryshxRle56ba4S4SaUoI0GTf2Iw&usqp=CAU" className='mr-2' style={{width: '8%'}}  alt="" />
                                Đơn hàng của tôi
                                <span className='ml-3 text-danger'>0</span>    
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