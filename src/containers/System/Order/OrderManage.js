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
    const [updateOrder, setUpdateOrder] = useState([]);
    const [StatusOrder, setStatusOrder] = useState('');
    const [loadOrder, setLoadOrder] = useState(false);

    //fetch data order
    const dispatch = useDispatch();
    const statusOrder = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.getStatusOrder());
        dispatch(actions.filterOrderByStatus('S0'));
    }, [dispatch])

    //update order
    const verifyOrder = (order) => {
        setUpdateOrder(order);
        setModalVerifyOrder(!modalVerifyOrder);
    }

    const handleUpdateOrder = (data) => {
        dispatch(actions.updateOrderStatus(data));
    }


    // Filter order
    const FilterOrder = (e) => {
        setLoadOrder(true);
        setStatusOrder(e.target.value);
        setTimeout(() => {
            dispatch(actions.filterOrderByStatus(e.target.value));
            setLoadOrder(false);
        }, 1000);
    }


    return (
        <div className="mx-2">
            <ModalVerifyOrder
                isOpen={modalVerifyOrder}
                toggle={verifyOrder}
                updateOrder={updateOrder}
                handleUpdateOrder={handleUpdateOrder}
            />

            <div className="h5 text-dark mb-3">Quản lý đơn hàng</div>
            <TabControlOrder 
                activeTab = {activeTab} 
                setActiveTab = {setActiveTab}  
            />

            <TabContent activeTab={activeTab} className='p-3 py-4 bg-light border'>
                <TabPane tabId="1">
                    <div className='filter bg-success py-2 text-white d-flex align-items-center'>
                        <div className="col-4 d-flex">
                            <label className="p-0 col-3">Tìm kiếm</label>
                            <input type="text" className="col-9 form-control" placeholder="Tìm kiếm đơn hàng..." 
                                style={{height:'30px'}}
                            />
                        </div>

                        <div className="col-4 p-0 d-flex">
                            <label className="col-3 p-0">Trạng thái</label>
                            <select className="col-9 form-control" style={{height:'30px'}}
                                value={StatusOrder}
                                onChange={(e) => FilterOrder(e)}
                            >
                                {
                                    statusOrder.map((item, index) => {
                                        return <option key={index} value={item.keyMap} >{item.valueVi}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className="col-4 d-flex">
                            <label className="col-4 p-0">Ngày đặt hàng</label>
                            <select className="col-8 form-control" name="" id=""  style={{height:'30px'}}>
                                <option>Ngày đặt</option>
                                <option>Mới nhất</option>
                                <option>Muộn nhất</option>
                            </select>
                        </div>
                    </div>

                    <div className='list-order mt-3'>
                        <div className="text-dark">Danh sách (<b>{filterOrder.length}</b>)</div>
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
                                    <td>Tác vụ</td>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    loadOrder ?
                                    <tr>
                                        <td colSpan="10" className="text-center">
                                            <div className="spinner-border text-primary spinner-border-sm" role="status">
                                            </div>
                                            <span className="ml-2">Đang tải...</span>
                                        </td>
                                    </tr>
                                    :

                                    filterOrder && filterOrder.length > 0 ?
                                    filterOrder.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.code}</td>
                                                <td className='text-primary font-weight-bold'>{item.username}</td>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>{numberFormat(item.total)}</td>
                                                <td>{item.date}</td>
                                                <td>{item.date}</td>
                                                <td className ={item.status ==='S1' ? "text-warning" : "text-success"}>{item.status ==='S1' ? 'Chưa xác nhận' : 'Đã xác nhận'}</td>
                                                <td style={{width: '8%'}}>
                                                    {
                                                        item.status ==='S1' ?
                                                        <button onClick={() => verifyOrder(item)} type="button" className="btn text-primary">
                                                            <span>Xác nhận</span>
                                                        </button>
                                                        : ''
                                                    }

                                                    <button type="button" className="btn text-danger">
                                                        <span>Huỷ đơn</span>
                                                    </button>

                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan="10" className="text-center text-primary">Chưa có đơn hàng nào...</td>
                                    </tr>
                                }

                            </tbody>
                            
                        </table>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    Loading...
                </TabPane>
                <TabPane tabId="3">Loading...</TabPane>
                <TabPane tabId="4">Loading...</TabPane>
                <TabPane tabId="5">Loading...</TabPane>
                <TabPane tabId="6">Loading...</TabPane>
            </TabContent>
        </div>
    );
}
export default OrderManage;
