import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Voucher from './Voucher'
import Header from 'containers/HomePage/Header/Header';
import Footer from 'containers/HomePage/Footer/Footer';
import { path } from 'utils';

const Cart = (props) => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <>
            <Header />
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    <div className="mb-2 m-1 d-flex">
                        <h6 className="mr-2">GIỎ HÀNG</h6>
                        <small> (0 sản phẩm)</small>
                    </div>

                    <div className="row m-1 justify-content-between">
                        <div className="col-md-9 pl-0 ">
                        <div className="bg-white p-3 row">
                            <img className="col-md-2 w-100" src='https://salt.tikicdn.com/desktop/img/mascot@2x.png' alt="" />
                            <div className="col-md-5 small">
                                <h6>name</h6>
                                <p>- Tác giả: <span>tac gia</span> <br />
                                    <span className="text-warning">chip</span> <br />
                                </p>

                                <span className="mr-4 text-danger" style={{
                                    cursor: 'pointer'
                                }}>Xóa</span>

                                <Link to="" className="text-primary">Để dành mua sau</Link>
                            </div>

                            <div className="input-group col-md-2 col-6" style={{ height: '31px' }}>
                                <div className="input-group-prepend">
                                    <button className="btn btn-light btn-sm"><i className="fas fa-minus small" /></button>
                                </div>

                                <input type="text" className="form-control text-center" readOnly value="" style={{ height: '31px' }} />

                                <div className="input-group-append">
                                    <button className="btn btn-light btn-sm" type="submit"><i className="fas fa-plus small" /></button>
                                </div>
                            </div>

                            <div className="price col-md-3 text-right">
                                <h6 className="text-danger">
                                    price
                                </h6>
                                <strike className="small mr-2">
                                    price_old
                                </strike>
                                <span className="text-danger small">-sale%</span>
                            </div>
                        </div >
                        </div>

                        <div className="col-md-3 pr-0">
                            <Voucher />

                            <div className="bg-white mt-3 p-2">
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Tạm tính</span>
                                    <small className="text-secondary">
                                        100000
                                    </small>
                                </div>
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Giảm giá</span>
                                    <small className="text-secondary">0 <u>đ</u>
                                    </small>
                                </div>
                                <div className="row  pl-3 pr-3 p-2 justify-content-between">
                                    <span>Tổng cộng</span>
                                    <h6 className="text-danger">
                                        5000000
                                    </h6>
                                    <small className="col-md-12 p-0 text-right">(Đã bao gồm VAT nếu có)</small>
                                </div>
                            </div>

                            <Link to={`${path.PAYMENT}`}>
                                <button type="button" className="btn btn-danger btn-md btn-block mt-3 mb-3">Tiến hành đặt hàng</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;