import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Header from 'containers/HomePage/Header/Header';
import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';
import moment from "moment";
import { CheckoutOrder } from 'store/actions';
import { useHistory } from 'react-router';
import { path } from 'utils';
import LoadingOverlay from 'react-loading-overlay';

const Payment = (props) => {
    const cartsUser = useSelector(state => state.client.cartsUser);
    const delivery = useSelector(state => state.client.delivery);
    const payment = useSelector(state => state.client.payment);
    const user = useSelector(state => state.auth.user);
    const [loadingOrder, setLoadingOrder] = useState(false);
    
    const [deliveryMethod, setDeliveryMethod] = useState('GIAO HÀNG TẬN NƠI');
    const [paymentMethod, setPaymentMethod] = useState('Tiền mặt');
    const [deliveryFee, setDeliveryFee] = useState(50000);
    const coupon = 30000;
    const date = new Date();
    const dateDelivery=date.setDate(date.getDate() + 1)
    const dateDeliveryFormat = moment(dateDelivery).locale('vi').format('dddd, DD/MM/YYYY');
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        document.title = 'Thông tin giao hàng';
    }, [])

    // show value of delivery method
    const handleDelivery = (e) => {
        setDeliveryMethod(e.target.value)
        if(e.target.value === 'GIAO HÀNG TẬN NƠI') {
            setDeliveryFee(50000)
        }
        else {
            setDeliveryFee(30000)
        }
    }

    // payment order
    const handlePayment = () => {
        dispatch(CheckoutOrder({
            arrOrder: cartsUser,
            total: totalMoney(cartsUser) - coupon + deliveryFee,
            username: user.username,
            phone: user.phoneNumber,
            address: user.address,
            email: user.email,
            delivery: deliveryMethod,
            payment: paymentMethod,
            dateDelivery: dateDelivery,
        }))
        setLoadingOrder(true)
        setTimeout(() => {
            history.push(path.MY_ORDER);
            setLoadingOrder(false)
        }, 2500);
    }

    return (
        <>
            <Header />
            <div className="main bg-light pt-3 pb-3">
                <LoadingOverlay active={loadingOrder} spinner text='Đang xử lý đơn hàng...' >
                    <div className="container">
                        <div className="row m-1 justify-content-between">
                            <div className="col-md-9 pl-0 ">
                                <div className="bg-white p-3">
                                <div>
                                    <h6 className="text-dark">1. Chọn hình thức giao hàng</h6>
                                    <div className="option_delivery row">
                                        {
                                            delivery && delivery.length > 0 &&
                                            delivery.map((item, index) => {
                                                return (
                                                    <div className="standard col-md-6" key={index}>
                                                        <div className="bg-light p-3 text-center">
                                                            <input type="radio" className="form-check-input" name="delivery" 
                                                                id={item.valueVi} value={item.valueVi} 
                                                                onChange={handleDelivery}
                                                            />
                                                            <label>{item.valueVi}</label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="info_prod border border-light mt-2 m-0 col-12 d-flex justify-content-between">
                                        <div className="col-md-6 p-0 row">
                                            {
                                                cartsUser && cartsUser.length >0 ?
                                                cartsUser.map((item, index) => {
                                                    return(
                                                        <div className='d-flex border-bottom align-items-center' key={index}>
                                                            <div className="col-md-3 p-0">
                                                                <img className="w-75" src={item.image} alt="" />
                                                            </div>
                                                            
                                                            <div className="col-md-5 p-0">
                                                                <small>{item.name}</small>
                                                                <p>Số lượng: X{item.qty} </p>
                                                            </div>

                                                            <div className="col-md-4 p-0 text-right">
                                                                <span>{numberFormat(item.price)}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                                :
                                                <div className="col-md-12 p-0">
                                                    <p>Không có sản phẩm nào trong giỏ hàng</p>
                                                </div>
                                            }
                                        </div>

                                        <div className="col-md-6 p-0 my-3 row">
                                            <div className="col-md-8 ">
                                                <span className="text-success">
                                                    Giao vào {dateDeliveryFormat}</span>
                                                <p>Được giao bởi Hoangle</p>
                                                <span className="text-danger">{deliveryMethod ? deliveryMethod : ''}</span>
                                            </div>

                                            <div className="col-md-4 p-0 text-right">
                                                <span>{numberFormat(deliveryFee)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="text-dark mt-3 mb-3">2. Chọn hình thức thanh toán</h6>
                                    <div className="option_payment border mt-3 p-3">
                                        {
                                            payment && payment.length > 0 ?
                                            payment.map((item, index) => {
                                                return(
                                                    <div className="form-check mb-3" key={index}>
                                                        <input className="form-check-input" type="radio" name='payment'
                                                            id={item.valueVi} value={item.valueVi}
                                                            onChange={() => setPaymentMethod(item.valueVi)} 
                                                        />
                                                        <label className="form-check-label" htmlFor="money">{item.valueVi}</label>
                                                    </div>
                                                )
                                            })
                                            : <div className="col-md-12 p-0">Không có hình thức thanh toán nào</div>
                                        }
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3 pr-0">
                                <div className="bg-white p-3">
                                    <div className="d-flex border-bottom py-1 justify-content-between">Địa chỉ giao hàng</div>
                                    <div className='mt-2'>
                                        <b>{user ? user.username : ''}</b>
                                        <p className="mb-0">Địa chỉ: {user ? user.address : ''}</p>
                                        <p className="mb-0">Điện thoại: {user ? user.phoneNumber : ''}</p>
                                        <p className="mb-0">Email: {user ? user.email : ''}</p>
                                    </div>
                                </div>

                                <div className="bg-white mt-3 p-2">
                                    <div className="d-flex p-2 justify-content-between align-items-center">
                                        <div>
                                            <div>Đơn hàng</div>
                                            <small className='text-success'>{cartsUser && cartsUser.length > 0 ? cartsUser.length : 0} Sản phẩm</small>
                                        </div>
                                        <button type="button" className="btn btn-success btn-sm px-2">Thay đổi</button>
                                    </div>

                                    <div className="d-flex px-2 justify-content-between">
                                        <div><span>Tạm tính</span></div>
                                        <h6>{
                                            cartsUser && cartsUser.length > 0 ?
                                            numberFormat(totalMoney(cartsUser))
                                            : 0
                                        }
                                        </h6>
                                    </div>

                                    <div className="d-flex px-2 justify-content-between">
                                        <div><span>Giảm giá</span></div>
                                        <h6>-{numberFormat(coupon)}</h6>
                                    </div>

                                    <div className="d-flex px-2 justify-content-between">
                                        <div><span>Phí vận chuyển</span></div>
                                        <h6>{numberFormat(deliveryFee)}</h6>
                                    </div>
                                    <hr />

                                    <div className="d-flex p-2 justify-content-between">
                                        <div><span>Thành tiền</span></div>
                                        <h5 className="text-danger">
                                            {
                                                cartsUser && cartsUser.length > 0 ?
                                                numberFormat(totalMoney(cartsUser) - coupon + deliveryFee)
                                                : 0
                                            }
                                        </h5>
                                    </div>
                                    <div className="text-right text-secondary small">(Đã bao gồm VAT)</div>
                                </div>
                                <button onClick={()=>handlePayment()} type="button" className="btn btn-danger btn-block mt-3 mb-1">Tiến hành thanh toán</button>
                                <small className="text-secondary">( Vui lòng kiểm tra đơn hàng trước khi thanh toán )</small>
                            </div>
                        </div>
                    </div>
                </LoadingOverlay>
            </div>
        </>
    );
}
export default Payment;
