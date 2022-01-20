import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { path } from 'utils';
import * as actions from "store/actions";
import { numberFormat } from 'components/Formatting/FormatNumber';
import Rate from 'containers/HomePage/Section/Rate';

const Order = (props) => {
    const {order, qty, incrementQty, decrementQty} = props;
    const dispatch = useDispatch()

    const buyNow = () => {
        if (qty > 0) {
            order.qty = qty
            dispatch(actions.addToCart(order))
            dispatch(actions.countProduct(1))
        }       
    }

        
    return (
        <div className="col-md-6 pl-4 pr-2 text-left">
            <div className="info d-flex align-items-center">
                <h4 className="mr-5 font-weight-bold">{order && order.name ? order.name :'loading...'}</h4>
                <Rate />
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
                            <button disabled={qty < 2 ? true : false} className="btn btn-success btn-sm px-2"><i className="fas fa-minus small" /></button>
                        </div>

                        <input type="text" readOnly className="form-control text-center" style={{ height: '31px' }}
                            value={qty}
                        />

                        <div onClick={incrementQty}  className="input-group-append">
                            <button className="btn btn-success btn-sm px-2"><i className="fas fa-plus small" /></button>
                        </div>
                    </div>

                    <div className='d-flex mt-5 align-items-center' style={{gap: '10px'}}>
                        <button onClick={buyNow} type="button" className="btn btn-danger font-weight-normal" style={{height: '40px', width:'50%'}}>
                            <i className="fas fa-shopping-cart mr-2" />
                            MUA NGAY
                        </button>
                        
                        <button type="button" className="btn btn-success font-weight-normal" style={{height: '40px', width:'50%'}}>
                        <Link to={`${path.CART}`} className='text-white'>
                            <i className="fas fa-user mr-2" />
                            ĐĂNG NHẬP MUA HÀNG
                        </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Order;