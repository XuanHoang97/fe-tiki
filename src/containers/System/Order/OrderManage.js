import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import {TabContent, TabPane } from 'reactstrap';
import ModalVerifyOrder from './ModalVerifyOrder';
import './OrderManage.scss';
import TabControlOrder from './TabControlOrder';

const OrderManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [modalVerifyOrder, setmodalVerifyOrder] = useState(false);

    const verifyOrder = () => {
        setmodalVerifyOrder(!modalVerifyOrder);
    }

    return (
        <div className="mx-2">
            <ModalVerifyOrder
                isOpen={modalVerifyOrder}
                toggle={verifyOrder}
            />

            <div className="h5 text-dark mb-4">Quản lý đơn hàng</div>
            <TabControlOrder activeTab = {activeTab} setActiveTab = {setActiveTab}  />

            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    <div className='filter d-flex'>
                        <div className="input-group col-5 p-0">
                            <label className="p-0">Chọn mã Đơn</label>
                            <input type="text" className="form-control ml-2" placeholder="Search..." 
                                style={{height:'30px'}}
                            />
                        </div>

                        <div className="form-group d-flex col-2 p-0">
                            <select className="form-control" name="" id=""  style={{height:'30px'}}>
                                <option>Ngày đặt</option>
                                <option>Mới nhất</option>
                                <option>Muộn nhất</option>
                            </select>
                        </div>

                        <div className="form-group d-flex col-2 p-0">
                            <select className="form-control" name="" id=""  style={{height:'30px'}}>
                                <option>Bộ lọc khác</option>
                                <option>Từ cao xuống thấp</option>
                                <option>Từ thấp lên cao</option>
                            </select>
                        </div>
                    </div>

                    <div className='list-order mt-4'>
                        <div className="text-dark">Danh sách đơn đặt hàng (<b>150</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>STT</td>
                                    <td>Mã đơn hàng</td>
                                    <td>Hình thức giao hàng</td>
                                    <td>Trạng thái</td>
                                    <td>Số lượng</td>
                                    <td>Khách hàng phải trả</td>
                                    <td>Hạn xác nhận</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>1dx45ab7d</td>
                                    <td>Tiki giao hàng</td>
                                    <td className='text-warning'>Chờ xác nhận</td>
                                    <td>5</td>
                                    <td>1.450.374 đ</td>
                                    <td>Ngày mai 18/12/2021</td>
                                    <td className='d-flex flex-column-reverse'>
                                        <button type="button" className="btn text-danger">
                                            <span className=''>Huỷ đơn hàng</span>
                                        </button>

                                        <button type="button" className="btn text-success">
                                            <span className=''>Xem chi tiết</span>
                                        </button>

                                        <button onClick={() => verifyOrder()} type="button" className="btn text-primary">
                                            <span className=''>Xem và xác nhận</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane tabId="2">Loading...</TabPane>
                <TabPane tabId="3">Loading...</TabPane>
                <TabPane tabId="4">Loading...</TabPane>
                <TabPane tabId="5">Loading...</TabPane>
                <TabPane tabId="6">Loading...</TabPane>
            </TabContent>
        </div>
    );
}
export default OrderManage;
