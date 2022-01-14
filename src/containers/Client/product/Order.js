import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { path } from 'utils';
import * as actions from "store/actions";
import { numberFormat } from 'components/Formatting/FormatNumber';
import Rate from 'containers/HomePage/Section/Rate';

function Order(props) {
    const { detailProduct, number, decrement, increment } = props

    const dispatch = useDispatch()
    const history = useHistory()

    const buyNow = (product) => {
        if (number > 0) {
            detailProduct.count = number
            dispatch(actions.addToCart(detailProduct))
            dispatch(actions.countProduct(1))
        }
    }

    return (
        <div className="col-md-6 pl-4 pr-2 text-left">
            <div className="info d-flex align-items-center">
                <h4 className="mr-5 font-weight-bold">{detailProduct && detailProduct.name ? detailProduct.name :'loading...'}</h4>
                <Rate />
            </div>

            <div className="price bg-light p-2">
                <div className="row m-1 align-items-center">
                    <h5 className="text-danger font-weight-bold">{numberFormat(detailProduct && detailProduct.price ? detailProduct.price :'loading')}</h5>
                    <span className="badge badge-pill badge-warning ml-3 mr-4">
                    -1 %
                    </span>
                    <strike className="small">{numberFormat(detailProduct && detailProduct.sale ? detailProduct.sale :'loading...')}</strike>
                </div>
            </div>
            <div>
                <div className="text-danger">
                    <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
                </div>

                <div className="option">
                    <small>Số lượng:</small>
                    <div className="input-group col-md-3 pt-2 col-6 p-0">
                        <div onClick={decrement} className="input-group-prepend">
                            <button className="btn btn-secondary btn-sm px-2"><i className="fas fa-minus small" /></button>
                        </div>

                        <input type="text" readOnly className="form-control text-center" style={{ height: '31px' }}
                            value={number}
                            // onChange={(e) => setQty(e.target.value)}
                        />

                        <div onClick={increment} className="input-group-append">
                            <button className="btn btn-secondary btn-sm px-2"><i className="fas fa-plus small" /></button>
                        </div>
                    </div>

                    <div className='d-flex mt-5 align-items-center' style={{gap: '10px'}}>
                        <button onClick={buyNow} type="button" className="btn btn-danger font-weight-normal" style={{height: '40px', width:'50%'}}>
                            <i className="fas fa-shopping-cart mr-2" />
                            MUA NGAY
                        </button>
                        
                        <button type="button" className="btn btn-success font-weight-normal" style={{height: '40px', width:'50%'}}>
                            <i className="fas fa-user mr-2" />
                            ĐĂNG NHẬP MUA HÀNG
                        </button>
                    </div>
                </div>
            </div>
        </div> 
    );
}
export default Order;