import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import TabBill from './TabBill';
import './style.scss'

const Bill = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className='Bill'>
            <h5>Hoá đơn</h5>
            <TabBill
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className='detailBill' >
                <TabPane tabId="1" className='allBill'>
                <div className='list-bill'>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="text-white">
                            <tr>
                                <td>STT</td>
                                <td>Mã hoá đơn</td>
                                <td>Mã Đơn hàng</td>
                                <td>Khách hàng</td>
                                <td>Sản phẩm</td>
                                <td>SL</td>
                                <td>Tổng tiền</td>
                                <td>ThờI gian thanh toán</td>
                                <td>Thanh toán</td>
                                <td>Trạng thái</td>
                                <td>Tác vụ</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td className='text-primary'>HD001</td>
                                <td>DH001</td>
                                <td>Lê Xuân Hoàng</td>
                                <td>Sản phẩm 1</td>
                                <td>1</td>
                                <td>100.000 đ</td>
                                <td>...</td>
                                <td>Tiền mặt</td>
                                <td><span className="badge badge-success">Đã thanh toán</span></td>
                                <td>
                                    <button className="btn btn-primary">Xem</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default Bill;