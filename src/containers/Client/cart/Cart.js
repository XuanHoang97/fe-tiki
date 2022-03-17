import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';
import { UpdateItemCartByUser } from 'store/actions';
import { useHistory } from 'react-router';
import Header from '../HomePage/Header/Header';
import { path } from 'utils';
import './style.scss'
import Footer from '../HomePage/Footer/Footer';

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
    }

    useEffect(() => {
        document.title = 'Thông tin Giỏ hàng';
    }, []);

    return (
        <>
            <Header />
            <div className="cartPage">
                <div className="container">
                    <div className="numberCart">
                        <h6 className="mr-2">GIỎ HÀNG</h6>
                        <small> ({cartsUser && cartsUser.length >0 ? cartsUser.length :0 } Sản phẩm)</small>
                    </div>

                    <div className="cartInfo">
                        <div className="itemCart col-md-9 pl-0">
                            {
                                cartsUser && cartsUser.length > 0 &&
                                cartsUser.map((item, index) => {
                                    return (
                                        <div className="detailCart row" key={index}>
                                            <img className="col-md-2 w-100" src={item.image} alt="" />
                                            <div className="col-md-5 small">
                                                <h6>{item.name}</h6>
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
                                                />

                                                <div className="input-group-append">
                                                    <button onClick={(e) => (++item.qty, CountUp(item.qty))} className="btn btn-light btn-sm" type="submit">
                                                        <i className="fas fa-plus small" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="price col-md-3 text-right">
                                                <h6 className="text-danger">
                                                    {numberFormat(item.price)}
                                                </h6>
                                                <strike className="small mr-2">
                                                    {numberFormat(item.sale)}
                                                </strike>
                                                <span className="text-danger small">-1%</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="totalCart col-md-3 pr-0">
                            <div className="detailTotal">
                                <div className="calOrder">
                                    <span>Tạm tính</span>
                                    <small className="text-danger">
                                    {
                                        cartsUser && cartsUser.length > 0 ?
                                        numberFormat(totalMoney(cartsUser))
                                        : 0
                                    }
                                    </small>
                                </div>
                                <div className="calOrder">
                                    <span>Giảm giá</span>
                                    <small className="text-secondary">{numberFormat(coupon)}</small>
                                </div>
                                <div className="calOrder">
                                    <span>Tổng cộng</span>
                                    <h6 className="text-danger">
                                        {   
                                            cartsUser && cartsUser.length > 0 ?
                                            numberFormat(totalMoney(cartsUser)- coupon)
                                            : 0
                                        }
                                    </h6>
                                </div>
                                <small className="col-md-12">(Đã bao gồm VAT nếu có)</small>
                            </div>

                            <div onClick={()=> handlePayment()}>
                                <button type="button" className="btn btn-danger btn-md btn-block my-3">Tiến hành đặt hàng</button>
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