import React, {useEffect} from 'react';
import Footer from 'containers/HomePage/Footer/Footer';
import Header from 'containers/HomePage/Header/Header';
import { Link } from "react-router-dom";
import { path } from 'utils';

const OrderSuccess = (props) => {
    useEffect(() => {
        document.title = 'Đặt hàng thành công';
    }, [])

    return (
        <>
        <Header />
            <div className="order_success bg-light ">
                <div className="py-3 container">
                    <div className="bg-white p-0 py-3 text-center">
                        <img className="mb-2"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png" style={{ width: '4%' }} alt="" />

                        <div className="">
                            <div className="mb-5">
                                <h5 className="text-success">ĐẶT HÀNG THÀNH CÔNG!</h5>
                                <h6 className="small text-secondary">Mã đơn hàng của bạn: </h6>
                                <p className="bg-success text-white w-25 p-2 my-3" style={{margin: '0 auto'}}>27101997</p>

                                <div>
                                    <span>Thời gian giao hàng dự kiến từ 2-3 ngày</span>
                                    <p>Thông tin về đơn hàng đã được gửi đến email
                                        <a href='https://mail.google.com/mail/u/1/#inbox' target='_blank' className="text-primary" rel="noreferrer">
                                            <i className="text-success ml-3">xuanhoang997@gmail.com</i>.
                                        </a>
                                    </p>
                                </div>

                                <div className="order_next text-primary text-center">
                                    <Link to={path.HOMEPAGE}>
                                        Tiếp tục mua hàng
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default OrderSuccess;
