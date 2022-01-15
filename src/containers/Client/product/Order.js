import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { path } from 'utils';
import * as actions from "store/actions";
import { numberFormat } from 'components/Formatting/FormatNumber';
import Rate from 'containers/HomePage/Section/Rate';
import ModalOrderNow from './ModalOrderNow';

function Order(props) {
    const { detailProduct} = props
    const [orderNow, setOrderNow] = useState(false)
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const history = useHistory()

    const buyNow = (data) => {
        dispatch(actions.addToCart(
            {
                productId: detailProduct.id,
                productName: detailProduct.name,
                productImage: detailProduct.image,
                productPrice: detailProduct.price,
                qty: parseInt(qty),
            }
        ))
        // setOrderNow(!orderNow)
    }
        
    return (
        <div className="col-md-6 pl-4 pr-2 text-left">
            <ModalOrderNow
                show={orderNow}
                toggle = {buyNow}
            />

            <div className="info d-flex align-items-center">
                <h4 className="mr-5 font-weight-bold">{detailProduct && detailProduct.name ? detailProduct.name :'loading...'}</h4>
                <Rate />
            </div>

            <div className="price bg-light p-2">
                <div className="row m-1 align-items-center">
                    <h3 className="text-danger">{numberFormat(detailProduct && detailProduct.price ? detailProduct.price :'loading')}</h3>
                    <span className="badge badge-pill badge-warning mx-4">
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
                        <div className="input-group-prepend">
                            <button className="btn btn-secondary btn-sm px-2"><i className="fas fa-minus small" /></button>
                        </div>

                        <input type="text" className="form-control text-center" style={{ height: '31px' }}
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                        />

                        <div className="input-group-append">
                            <button className="btn btn-secondary btn-sm px-2"><i className="fas fa-plus small" /></button>
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