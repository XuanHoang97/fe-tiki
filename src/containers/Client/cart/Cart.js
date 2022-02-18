import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Voucher from './Voucher'
import Header from 'containers/HomePage/Header/Header';
import Footer from 'containers/HomePage/Footer/Footer';
import { numberFormat, totalMoneyOrder } from 'components/Formatting/FormatNumber';
import { UpdateItemCartByUser } from 'store/actions';
import { useHistory } from 'react-router';
import { path } from 'utils';

const Cart = (props) => {
    const cartsUser = useSelector(state => state.client.cartsUser);
    const coupon    = 100000;
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const history = useHistory();

    const CountDown = (e) => {
        setQty(e)
    }

    const CountUp = (e) => {
        setQty(e)
    }

    // update cart-redirect to payment
    const handlePayment = () => {
        dispatch(UpdateItemCartByUser({
            arrCart: cartsUser,
        }))
        setTimeout(() => {
            history.push(path.PAYMENT);
        }, 1000);
        console.log('payment',cartsUser)
    }

    useEffect(() => {
        document.title = 'Thông tin Giỏ hàng';
    })

    return (
        <>
            <Header />
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    <div className="mb-2 m-1 d-flex">
                        <h6 className="mr-2">GIỎ HÀNG</h6>
                        <small> ({cartsUser && cartsUser.length >0 ? cartsUser.length :0 } Sản phẩm)</small>
                    </div>

                    <div className="row m-1 justify-content-between">
                        <div className="col-md-9 pl-0 ">
                            {
                                cartsUser && cartsUser.length > 0 &&
                                cartsUser.map((item, index) => {
                                    return (
                                        <div className="bg-white p-3 row border-bottom" key={index}>
                                            <img className="col-md-2 w-100" src={item.Image} alt="" />
                                            <div className="col-md-5 small">
                                                <h6>{item.Name}</h6>
                                                <span className="mr-4 text-danger" style={{ cursor: 'pointer'}}>Xóa</span>
                                                <span className="text-primary">Để dành mua sau</span>
                                            </div>

                                            <div className="input-group col-md-2 col-6" style={{ height: '31px' }}>
                                                <div className="input-group-prepend">
                                                    <button onClick={(e) => (item.qty > 1 && --item.qty, CountDown(item.qty))} className="btn btn-light btn-sm">
                                                        <i className="fas fa-minus small" />
                                                    </button>
                                                </div>

                                                <input type="text" className="form-control text-center" 
                                                    readOnly value={item.qty} 
                                                    onChange={(e) => setQty(e.target.value)}
                                                
                                                style={{ height: '31px' }} />

                                                <div className="input-group-append">
                                                    <button onClick={(e) => (++item.qty, CountUp(item.qty))} className="btn btn-light btn-sm" type="submit">
                                                        <i className="fas fa-plus small" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="price col-md-3 text-right">
                                                <h6 className="text-danger">
                                                    {numberFormat(item.Price)}
                                                </h6>
                                                <strike className="small mr-2">
                                                    {numberFormat(item.saleOff)}
                                                </strike>
                                                <span className="text-danger small">-1%</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="col-md-3 pr-0">
                            <Voucher />

                            <div className="bg-white mt-3 p-2">
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Tạm tính</span>
                                    <small className="text-danger">
                                    {
                                        cartsUser && cartsUser.length > 0 ?
                                        numberFormat(totalMoneyOrder(cartsUser))
                                        : 0
                                    }
                                    </small>
                                </div>
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Giảm giá</span>
                                    <small className="text-secondary">{numberFormat(coupon)}</small>
                                </div>
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Tổng cộng</span>
                                    <h6 className="text-danger">
                                        {   
                                            cartsUser && cartsUser.length > 0 ?
                                            numberFormat(totalMoneyOrder(cartsUser)- coupon)
                                            : 0
                                        }
                                    </h6>
                                    <small className="col-md-12 p-0 text-right">(Đã bao gồm VAT nếu có)</small>
                                </div>
                            </div>

                            <div onClick={()=> handlePayment()}>
                                <button type="button" className="btn btn-danger btn-md btn-block mt-3 mb-3">Tiến hành đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Cart;