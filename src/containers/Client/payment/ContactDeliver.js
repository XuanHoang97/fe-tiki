import React from 'react';
import {useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { path } from 'utils';
import SetAdrrOrder from './SetAdrrOrder';

const ContactDeliver = (props) => {
    const [changeAddrOrder, setChangeAddrOrder] = React.useState(false);

    const setAddrOrder = () => {
        setChangeAddrOrder(!changeAddrOrder);
    }

    return (
        
        <div className="col-md-3 pr-0">
            <SetAdrrOrder
                isOpen={changeAddrOrder}
                toggleParent={setAddrOrder}
            />

            <div className="bg-white p-3">
                <div className="d-flex justify-content-between">
                    <h6>Địa chỉ giao hàng</h6>
                    <button onClick={() => setAddrOrder()} type="button" className="btn btn-success btn-sm px-2" style={{ fontSize: '12px' }}>Thay đổi</button>
                </div>
                <hr />
                <div>
                    <h6>Lê Xuân Hoàng</h6>
                    <p className="mb-0">Địa chỉ: Hà Đông- Hà Nội</p>
                    <p className="mb-0">Điện thoại: 0986380270</p>
                    <p className="mb-0">Email: xuanhoang997@gmail.com</p>
                </div>
            </div>

            <div className="bg-white mt-3 p-2">
                <div className="d-flex p-2 justify-content-between">
                    <div>
                        <h6>Đơn hàng</h6>
                        <small>10 sản phẩm</small>
                    </div>
                    <button type="button" className="btn btn-success btn-sm px-2" style={{ fontSize: '12px', height: '28px' }}>Thay đổi</button>
                </div>

                <div className="d-flex px-2 p-2 justify-content-between">
                    <div><span>Tạm tính</span></div>
                    <h6>100000</h6>
                </div>

                <div className="d-flex px-2 p-2 justify-content-between">
                    <div><span>Giảm giá</span></div>
                    <h6>-10%</h6>
                </div>

                <div className="d-flex px-2 p-2 justify-content-between">
                    <div><span>Phí vận chuyển</span></div>
                    <h6>10000</h6>
                </div>
                <hr />

                <div className="d-flex p-2 justify-content-between">
                    <div><span>Thành tiền</span></div>
                    <h5 className="text-danger">100000000</h5>
                    <div className="w-100 text-right">
                        <small className="text-secondary">(Đã bao gồm VAT nếu có)</small>
                    </div>
                </div>
            </div>

            <Link to={`${path.MY_ORDER}`}>
                <button type="button" className="btn btn-danger btn-md btn-block mt-3 mb-1">Tiến hành thanh toán</button>
            </Link>
            <div className="text-right">
                <small className="text-secondary">( Vui lòng kiểm tra đơn hàng trước khi thanh toán )</small>
            </div>
        </div>
    );
}
export default ContactDeliver;