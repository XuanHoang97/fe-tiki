import { numberFormat } from 'components/Formatting/FormatNumber';
import { useDispatch, useSelector } from 'react-redux';
import {GetCartByUser } from 'store/actions';
import Rate from '../HomePage/Section/Rate';
import * as actions from "store/actions";
import { Link } from 'react-router-dom';
import { path } from 'utils';
import React from 'react';
import './Style.scss';

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

    return (
        <div className="orderDetail col-md-6">
            <div className="info">
                <h4 className="prodName">{order?.name ? order.name :'loading...'}</h4>
                <Rate />
                <span className="text-muted ml-4">
                    <small className='mr-2'>Đã bán 0</small>
                </span>
            </div>

            <div className="price">
                <div className="priceDetail">
                    <h4>{numberFormat(order?.sale ? order.sale : 'loading')}</h4>
                    <span className="badge badge-pill badge-warning mx-4"> -1 % </span>
                </div>
            </div>

            <>
                <div className="option">
                    <small>Số lượng:</small>
                    <div className="input-group col-md-3 pt-2 col-6 p-0">
                        <div onClick={decrementQty} className="input-group-prepend">
                            <button disabled={qty < 2 ? true : false} className="btn btn-success btn-sm"><i className="fas fa-minus small" /></button>
                        </div>

                        <input type="text" readOnly className="form-control text-center" style={{ height: '28px' }}
                            value={qty}
                        />

                        <div onClick={incrementQty}  className="input-group-append">
                            <button className="btn btn-success btn-sm"><i className="fas fa-plus small" /></button>
                        </div>
                    </div>

                    <div className='Buy'>
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
            </>
        </div> 
    );
}
export default Order;