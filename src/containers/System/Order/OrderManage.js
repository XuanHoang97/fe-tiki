import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TabContent, TabPane } from 'reactstrap';
import {numberFormat} from 'components/Formatting/FormatNumber';
import ModalVerifyOrder from './ModalVerifyOrder';
import './OrderManage.scss';
import TabControlOrder from './TabControlOrder';
import * as actions from 'store/actions';

const OrderManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [modalVerifyOrder, setModalVerifyOrder] = useState(false);
    const [detailOrder, setDetailOrder] = useState([]);

    //fetch data order
    const dispatch = useDispatch();
    const order = useSelector(state => state.client.orders);

    useEffect(() => {
        dispatch(actions.getAllOrder());
    }, [dispatch])

    //verify order
    const verifyOrder = (order) => {
        setDetailOrder(order);
        setModalVerifyOrder(!modalVerifyOrder);
    }

    return (
        <div className="mx-2">
            <ModalVerifyOrder
                isOpen={modalVerifyOrder}
                toggle={verifyOrder}
                detailOrder={detailOrder}
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
                                <option>Trạng thái</option>
                                <option>Đã xác nhận</option>
                                <option>Chưa xác nhận</option>
                            </select>
                        </div>
                    </div>

                    <div className='list-order mt-4'>
                        <div className="text-dark">Danh sách đơn đặt hàng (<b>{order.length}</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>STT</td>
                                    <td>Mã ĐH</td>
                                    <td>Khách hàng</td>
                                    <td>Sản phẩm</td>
                                    <td>SL</td>
                                    <td>Tổng tiền</td>
                                    <td>Ngày đặt</td>
                                    <td>Ngày giao dự kiến</td>
                                    <td>Trạng thái</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    order && order.length > 0 ?
                                    order.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.code}</td>
                                                <td className='text-primary font-weight-bold'>{item.username}</td>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td className='text-danger'>{numberFormat(item.total)}</td>
                                                <td>{item.date}</td>
                                                <td>{item.date}</td>
                                                <td className ={item.status ==='S1' ? "text-warning" : "text-success"}>{item.status ==='S1' ? 'Chưa xác nhận' : 'Đã xác nhận'}</td>
                                                <td style={{width: '8%'}}>
                                                    {
                                                        item.status ==='S1' ?
                                                        <button onClick={() => verifyOrder(item)} type="button" className="btn text-success">
                                                            <span className=''>Xác nhận</span>
                                                        </button>
                                                        : ''
                                                    }

                                                    <button onClick={() => verifyOrder(item)} type="button" className="btn text-primary">
                                                        <span className=''>Chi tiết</span>
                                                    </button>

                                                    <button type="button" className="btn text-danger">
                                                        <span className=''>Huỷ đơn</span>
                                                    </button>

                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan="8" className="text-center">Không có dữ liệu</td>
                                    </tr>
                                }
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
