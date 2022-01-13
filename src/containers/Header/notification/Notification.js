import React, {useState, useEffect, useRef} from 'react';
import useOutsideClick from 'containers/HomePage/OutSideClick';
import './style.scss'
import { Link } from 'react-router-dom';

function Notification(props) {
    const [show_Notification, setShowNotification] = useState(false);
    const [number_Notification, setNumberNotification] = useState(1);
    const ref = useRef();


    const view_Notification = () => {
        setShowNotification(!show_Notification);
        setNumberNotification(0);
    }

    useOutsideClick(ref, () => {
        if (show_Notification) setShowNotification(false);
    });

    return (
        <>
            <div className="mess" onClick={() => view_Notification()}>
                <i className="far fa-bell"></i>
                {
                    number_Notification && number_Notification > 0 ?
                    <span className="badge badge-pill badge-danger" style={{position: 'absolute', right: '16rem', top: '0.35rem'}}>
                        {number_Notification}
                    </span>
                    : null
                }
            </div>

            {
                show_Notification &&
                <div className='detail_notification' ref={ref}>
                    <div className='d-flex justify-content-between'>
                        <h5 className='font-weight-bold mb-3'>Thông báo</h5>
                        <span className='text-secondary'>Chưa đọc {number_Notification}</span>
                        <span className='text-primary'>Tất cả 1</span>
                    </div>

                    <div className='list_notification bg-light'>
                        <Link to='/system/order-manage'>
                            <div className='detail_notification_header'>
                                <span className='text-dark'>1 Đơn hàng mới chờ xác nhận</span>
                                <div className='text-secondary text-right small'>15 phút trước</div>
                            </div>
                        </Link>
                    </div>
                </div>
            }
        </>
    );
}

export default Notification;