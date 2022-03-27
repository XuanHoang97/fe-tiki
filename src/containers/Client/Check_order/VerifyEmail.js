import React, {useState, useEffect} from 'react';
import { verifyOrder } from 'services/clientService';
import Header from '../HomePage/Header/Header';
import { Link } from 'react-router-dom';
import { path } from 'utils';

const VerifyEmail = (props) => {
    const [statusVerify, setStatusVerify] = useState(false);
    const [alertCode, setAlertCode] = useState(0);

    //verify order
    useEffect(() => {
        if(props.location && props.location.search){
            let urlParams = new URLSearchParams(props.location.search);
            let token = urlParams.get('token');
            let productId = urlParams.get('productId');

            let res = verifyOrder({
                token: token,
                productId: productId
            });
            if(res && res.errCode === 0){
                setStatusVerify(true);
                setAlertCode(res.errCode);                
            }else{
                setStatusVerify(true);
                setAlertCode(res && res.errCode ? res.errCode : 0);
            }
        }
    }, [props.location]);

    return (
        <div>
            <Header />
            <div className="container">
                {
                    statusVerify === false ? 
                    <div className="text-center mt-5">
                        <h1>Đang xử lý...</h1>
                    </div>
                    :
                    <div className="text-center mt-5">
                        {
                            alertCode === 0 ?
                            <div className="alert alert-success" role="alert">
                                <h4>Đơn hàng của bạn đã được xác nhận!</h4>
                                <Link to={path.HOMEPAGE}>
                                    <button className="btn btn-primary ml-2">Về trang chủ</button>
                                </Link>
                            </div>
                            :
                            <div className="alert alert-danger" role="alert">
                                <strong>Đơn hàng của bạn đã được xác nhận hoặc đã không tồn tại nữa!</strong>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
}

export default VerifyEmail;