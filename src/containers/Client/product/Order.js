import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from 'utils';
import * as actions from "store/actions";
import { numberFormat } from 'components/Formatting/FormatNumber';
import instance from './../../../axios';
import {GetCartByUser, getUser } from 'store/actions';
import './Style.scss'
import Rate from '../HomePage/Section/Rate';

const Order = (props) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.auth.user);
    const {order, qty, incrementQty, decrementQty} = props;

    // Order without login 
    const buyNow = () => {
        if (qty > 0) {
            order.qty = qty
            dispatch(actions.addToCart(order))
            dispatch(actions.countProduct(1))
        }       
    }

    // Order with login
    const addCart = () => {
        const userId = user.id;
        const productId = order.id;
        dispatch(actions.addToCartLogin({ userId, productId, qty }))
        setTimeout(() => {
            dispatch(actions.countProduct(1))
            dispatch(GetCartByUser(userId));
        }, 1000)
    }

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
        <div className="orderDetail col-md-6">
            <div className="info d-flex align-items-center">
                <h4 className="mr-5 font-weight-bold">{order && order.name ? order.name :'loading...'}</h4>
                <Rate />
                <span className="text-muted ml-4">
                    <small className='mr-2'>Đã bán</small>
                    {
                        order && order.productData && order.productData && order.productData.total ?
                        order.productData.total  : 0
                    }
                </span>
            </div>

            <div className="price bg-light py-3 px-2 my-2">
                <div className="row m-1 align-items-center">
                    <h4 className="text-dark font-weight-bold">{numberFormat(order && order.price ? order.price :'loading')}</h4>
                    <span className="badge badge-pill badge-warning mx-4">
                    -1 %
                    </span>
                    <strike className="text-danger">{numberFormat(order && order.sale ? order.sale :'loading...')}</strike>
                </div>
            </div>

            <div>
                <div className="text-danger">
                    <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
                </div>

                <div className="option">
                    <small>Số lượng:</small>
                    <div className="input-group col-md-3 pt-2 col-6 p-0">
                        <div onClick={decrementQty} className="input-group-prepend">
                            <button disabled={qty < 2 ? true : false} className="btn btn-success btn-sm"><i className="fas fa-minus small" /></button>
                        </div>

                        <input type="text" readOnly className="form-control text-center" style={{ height: '31px' }}
                            value={qty}
                        />

                        <div onClick={incrementQty}  className="input-group-append">
                            <button className="btn btn-success btn-sm"><i className="fas fa-plus small" /></button>
                        </div>
                    </div>

                    <div className='d-flex mt-5 align-items-center' style={{gap: '10px'}}>
                        {
                            token && user ?
                            <button onClick={addCart} type="button" className="addCart btn btn-danger">
                                <i className="fas fa-shopping-cart mr-2" /> THÊM VÀO GIỎ HÀNG
                            </button>
                            :
                            <>
                                <button onClick={buyNow} type="button" className="orderLogin btn btn-danger">
                                    <i className="fas fa-shopping-cart mr-2" /> MUA NGAY
                                </button>

                                <Link to={`${path.LOGIN_AUTH}`} type="button" className="orderLogin btn btn-success">
                                    <i className="fas fa-shopping-cart mr-2" /> ĐĂNG NHẬP MUA HÀNG
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Order;