import React, {useEffect} from 'react';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { path } from 'utils';

const OrderSuccess = (props) => {
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        document.title = 'Đặt hàng thành công';
    }, [user])

    return (
        <>
            <Header />
            <div className="order_success bg-light" >
                <div className="py-3 container">
                    <div className="bg-white p-0 py-3 text-center"style={{backgroundImage: `url('https://ss-images.saostar.vn/2017/01/26/1067301/giphy-1.gif')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} >
                        <img className="mb-2"  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Eo_circle_green_white_checkmark.svg/2048px-Eo_circle_green_white_checkmark.svg.png" style={{ width: '4%' }} alt="" />

                        <div className="">
                            <h5 className="text-success font-weight-bold">ĐẶT HÀNG THÀNH CÔNG!</h5>
                            <div className='my-2'>
                                {
                                    !user ?
                                    <p>Thông tin đơn hàng đã được gửi đến email của bạn:
                                        <a href='https://mail.google.com/mail/u/1/#inbox' target='_blank' className="text-primary" rel="noreferrer">
                                            <b className="text-success ml-3" style={{fontSize: '15px'}}>Xem ngay</b>.
                                        </a>
                                    </p>
                                    : ''
                                }
                            </div>

                            {
                                user ?
                                <div className='my-2'>
                                    <p>Bạn có thể xem đơn hàng của mình tại:
                                        <Link to={path.ORDER}>
                                            <b className="text-primary ml-3" style={{fontSize: '15px'}}>Đơn hàng của tôi</b>.
                                        </Link>
                                    </p>
                                </div>
                                : ''
                            }

                            <button className="btn btn-primary text-center mt-5">
                                <Link to={path.HOMEPAGE} className='text-white'>
                                    Tiếp tục mua hàng
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default OrderSuccess;
