import { GetDiscountUser, getPoint, getUser, logoutAccount } from 'store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';
import {GetUser} from './../../../../../services/authService';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { path } from 'utils';

const Account = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.auth.user);
    const [hoverAccount, setHoverAccount] = useState(false);
    const TikiPoint = useSelector(state => state.auth.point);
    const myDiscount = useSelector(state => state.auth.discounts);

    // Discount user
    useEffect(() => {
        let userId = user? user.id :null;
        dispatch(GetDiscountUser(userId));
    }, [dispatch, user]);

    // get point
    useEffect(() => {
        let userId = user ? user.id : '';
        dispatch(getPoint(userId));
    }, [dispatch, user]);

    // get user
    useEffect(() => {
        getAccount();
    }, []);

    const getAccount = async() => {
        if(token){
            await GetUser().then(res => {
                dispatch(getUser(res))
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
        }
    }

    //logout
    const Logout = async () => {
        try {
            dispatch(logoutAccount());
            localStorage.removeItem('token');
            dispatch(getUser(''))
        } catch (error) {
            console.log(error);
        }
    }

    const profile = () => {
        history.push(`${path.ACCOUNT}`);
    }

    return (
        <>
            <span className='account' onMouseEnter={() => setHoverAccount(true)} >    
                {
                    user ?
                    <>
                        <img src={user?.image ? user.image : `http://res.cloudinary.com/do7qmg6jr/image/upload/v1645518444/sbgr7wd9k1t9v8f0cwvm.jpg`} className='rounded-circle' style={{width:'30px', height:'30px'}} alt="" />
                        <b className='ml-2' style={{fontSize: '12px'}}>{user?.username}</b>
                    </>
                    :
                    <span className='accTitle'>Tài khoản <i className="fas fa-sort-down"></i></span>
                }
            </span>

            {hoverAccount && (
                <div className="user-account" onMouseLeave={() => setHoverAccount(false)}>
                    {
                        user ?
                        <div className='acc-detail'>
                            <div onClick={()=>profile(user.id)} className="item-acc">
                                <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png" alt="" />
                                Tài khoản của tôi
                            </div>

                            <div onClick={()=>history.push(path.ORDER)} className="item-acc">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU-ZEXVPgvlrEPzhaAIFjyRUaqglcuKdkx4lgk2r-ryshxRle56ba4S4SaUoI0GTf2Iw&usqp=CAU" alt="" />
                                Đơn hàng của tôi
                            </div>

                            <div onClick={()=>history.push(path.TIKI_XU)} className="item-acc">
                                <img src="https://cf.shopee.vn/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="" />
                                <div>
                                    <div>Tiki xu</div>
                                    <small>Bạn có 
                                        <span style={{color: '#fd8d3d'}}> {user && TikiPoint?.userData?.point ? numberFormat(TikiPoint.userData.point) : 0 } </span> 
                                        Tiki xu
                                    </small>
                                </div>
                            </div>

                            <div onClick={()=>history.push(path.VOUCHER)} className="item-acc">
                                <img src="https://cf.shopee.vn/file/84feaa363ce325071c0a66d3c9a88748" alt="" />
                                <div>
                                    <div>Mã giảm giá</div>
                                    <small>Bạn có 
                                        <b> {myDiscount?.length > 0 ? myDiscount.length : 0 }</b> mã giảm giá
                                    </small>
                                </div>
                            </div>
                            
                            <div onClick={Logout} className="item-acc">
                                <img src="https://www.clipartmax.com/png/middle/147-1470587_logout-logout-icon-red-png.png" alt="" />           
                                Thoát
                            </div>
                        </div>
                        :
                        <div>
                            <Link to={path.REGISTER} className="dropdown-item mb-2">
                                <button type="button" className="btn btn-warning btn-block">Tạo tài khoản</button>
                            </Link>

                            <Link to={path.LOGIN_AUTH} className="dropdown-item mb-2">
                                <button type="button" className="btn btn-success btn-block"> Đăng nhập</button>
                            </Link>
                        </div>
                    }
                </div>
            )}
        </>
    );
}
export default Account;