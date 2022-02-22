import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TabContent, TabPane} from 'reactstrap';
import ModalVerifyOrder from './ModalVerifyOrder';
import FilterDataOrder from './FilterDataOrder';
import * as actions from 'store/actions';
import OrderTabControl from './OrderTabControl';
import './style.scss';
import ReactPaginate from "react-paginate";
import { numberFormat } from 'components/Formatting/FormatNumber';
import Moment from 'react-moment';

const OrderManage = (props) => {
    const [activeTab, setActiveTab] = useState('4');
    const [modalVerifyOrder, setModalVerifyOrder] = useState(false);
    const [updateOrder, setUpdateOrder] = useState([]);
    const [StatusOrder, setStatusOrder] = useState('');
    const [loadOrder, setLoadOrder] = useState(false);

    //fetch data order
    const dispatch = useDispatch();
    const order = useSelector(state => state.client.orders);
    const status = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.getAllOrder());
        dispatch(actions.getStatusOrder());
        dispatch(actions.filterOrderByStatus('S0'));
    }, [dispatch])

    //update order
    const verifyOrder = (order) => {
        setUpdateOrder(order);
        setModalVerifyOrder(!modalVerifyOrder);
    }
    const UpdateOrder = (data) => {
        dispatch(actions.updateOrderStatus(data));
    }

    // Filter order
    const FilterOrder = (e) => {
        setStatusOrder(e.target.value);
        setLoadOrder(true);
        setTimeout(() => {
            dispatch(actions.filterOrderByStatus(e.target.value));
            setLoadOrder(false);
        }, 1000);
    }

    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const orderPerPage = 5;
    const pagesVisited = pageNumber * orderPerPage;
    const pageCount = Math.ceil(filterOrder.length / orderPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="mx-2">
            <ModalVerifyOrder
                isOpen={modalVerifyOrder}
                toggle={verifyOrder}
                updateOrder={updateOrder}
                UpdateOrder={UpdateOrder}
            />

            <div className="h5 text-dark mb-3">Quản lý đơn hàng</div>
            <OrderTabControl
                status={status}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                order={order}
            />

            <TabContent activeTab={activeTab} className='p-3 py-4 bg-light border'>
                <TabPane tabId={activeTab}>
                    {
                        activeTab === '4' ?
                        <FilterDataOrder
                            StatusOrder={StatusOrder}
                            status={status}
                            FilterOrder={FilterOrder}
                        /> : ''
                    }

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
                                            <div className="spinner-border spinner-border-sm mr-2 text-primary" role="status">
                                            </div>
                                            <span>Loading...</span>
                                        </td>
                                    </tr> :

                                    filterOrder && filterOrder.length > 0 ?
                                    filterOrder.slice(pagesVisited, pagesVisited + orderPerPage)
                                    .map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.code}</td>
                                                <td className='text-primary font-weight-bold'>{item.username}</td>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>{numberFormat(item.total)}</td>
                                                <td><Moment format="DD/MM/YYYY">{item.date}</Moment></td>
                                                <td><Moment format="DD/MM/YYYY">{item.date}</Moment></td>
                                                <td className=
                                                    {item.status ==='S1' ? "text-warning small font-weight-bold" : 'text-success small font-weight-bold'}
                                                    >
                                                    {item.status ==='S1' && 'Chưa xác nhận'}
                                                    {item.status ==='S2' && 'Đã xác nhận'}
                                                    {item.status ==='S3' && 'Đang giao hàng'}
                                                    {item.status ==='S4' && 'Đã giao'}
                                                    {item.status ==='S5' && 'Đã hủy'}
                                                </td>
                                                <td style={{width: '10%'}}>
                                                    {
                                                        item.status ==='S1' && <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Xác nhận</span>
                                                    }

                                                    {
                                                        item.status ==='S2' && <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Giao hàng</span>
                                                    }

                                                    {
                                                        item.status ==='S3' && <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Chốt đơn</span>
                                                    }

                                                    {
                                                        item.status ==='S4' && <span className="actionOrder text-primary">Đổi hàng</span>
                                                    }

                                                    {
                                                        item.status ==='S5' && <span className="actionOrder text-primary">Mua lại</span>
                                                    }
                                                    <br/>
                                                    <span className="actionOrder text-danger">Huỷ đơn</span>
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
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </TabPane>
            </TabContent>
        </div>
    );
}
export default OrderManage;
