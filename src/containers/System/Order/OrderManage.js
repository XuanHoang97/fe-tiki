import { filterOrderByStatus, getAllOrder, getStatusOrder, SendBillCustomer, updateOrderStatus } from 'store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';
import {formatDateNew } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import React, { useState, useEffect } from 'react';
import {TabContent, TabPane} from 'reactstrap';
import ReactPaginate from "react-paginate";
import VerifyOrder from './VerifyOrder';
import SortOrder from './SortOrder';
import TabOrder from './TabOrder';
import SendBill from './SendBill';
import './style.scss';

const OrderManage = (props) => {
    const [activeTab, setActiveTab] = useState('4');
    const [modalVerifyOrder, setModalVerifyOrder] = useState(false);
    const [updateOrder, setUpdateOrder] = useState([]);
    
    const [modalSendBill, setModalSendBill] = useState(false);
    const [BillCustomer, setBillCustomer] = useState([]);
    const [loadBill, setLoadBill] = useState(false);

    //fetch data order
    const dispatch = useDispatch();
    const order = useSelector(state => state.client.orders);
    const status = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(getAllOrder());
        dispatch(getStatusOrder());
        dispatch(filterOrderByStatus('S0'));
    }, [dispatch])

    // verify order
    const verifyOrder = (order) => {
        setUpdateOrder(order);
        setModalVerifyOrder(!modalVerifyOrder);
    }
    const UpdateOrder = (data) => {
        dispatch(updateOrderStatus(data));
        setTimeout(() => {
            dispatch(getAllOrder());
            dispatch(filterOrderByStatus(updateOrder && updateOrder.status));
        }, 1000);
    }

    // send bill
    const sendBill = (order) => {
        setModalSendBill(!modalSendBill);
        setBillCustomer(order);
    }
    const Bill = (data) => {
        setLoadBill(true);
        dispatch(SendBillCustomer(data))
        setTimeout(() => {
            dispatch(filterOrderByStatus(data && data.status));
            setLoadBill(false);
        }, 5000);
    }

    //pagination
    const orderPerPage = 9;
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * orderPerPage;
    const pageCount = Math.ceil(filterOrder.length / orderPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    // search 
    const [search, setSearch] = useState('');
    const bySearch = (order, search) => {
        if (search) {
            return order.code.toUpperCase().includes(search.toUpperCase());
        } else 
            return order;
        };
    const filteredList = (filterOrder, search) => {
        return filterOrder.filter((order) => bySearch(order, search));
    };

    return (
        <div className="orderManage p-2 bg-white">
            <VerifyOrder
                isOpen={modalVerifyOrder}
                toggle={verifyOrder}
                updateOrder={updateOrder}
                verifyOrder={UpdateOrder}
            />

            <LoadingOverlay active={loadBill} spinner text='??ang g???i ho?? ????n, vui l??ng ?????i trong gi??y l??t...' >
                <SendBill
                    isOpen={modalSendBill}
                    toggle={sendBill}
                    bill={BillCustomer}
                    sendBill={Bill}
                />

                <h5 className="orderTitle mb-2">????n h??ng</h5>
                <TabOrder
                    status={status}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    order={order}
                />

                <TabContent activeTab={activeTab} className = 'listOrder'>
                    <TabPane tabId={activeTab} className= 'tableOrder' >
                        <SortOrder 
                            setSearch={setSearch}
                        />
                        <div className='list-order mt-3'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>M?? ??H</td>
                                        <td>Kh??ch h??ng</td>
                                        <td>S???n ph???m</td>
                                        <td>????n gi?? </td>
                                        <td>SL</td>
                                        <td>T???ng ti???n</td>
                                        <td>Ng??y ?????t</td>
                                        <td>Ng??y giao (DK)</td>
                                        <td>Tr???ng th??i</td>
                                        <td>T??c v???</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        filterOrder?.length > 0 ?
                                        filteredList(filterOrder, search)
                                        .slice(pagesVisited, pagesVisited + orderPerPage)
                                        .map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.code}</td>
                                                    <td className='text-primary font-weight-bold'>{item.username}</td>
                                                    <td>{item.name}</td>
                                                    <td>{numberFormat(item.sale)}</td>
                                                    <td>{item.qty}</td>
                                                    <td>{numberFormat(item.sale * item.qty)}</td>
                                                    <td>{item.date ? formatDateNew(item.date) : ''}</td>
                                                    <td>{item.dateDelivery ? formatDateNew(item.dateDelivery) : ''}</td>
                                                    <td className='font-weight-bold small'>
                                                        {item.status ==='S1' && <span className='badge badge-warning'>Ch??? x??? l??</span>}
                                                        {item.status ==='S2' && <span className='badge badge-success'>???? x??c nh???n</span>}
                                                        {item.status ==='S3' && <span className='badge badge-primary'>??ang giao</span>}
                                                        {item.status ==='S4' && <span className='badge badge-success'>???? giao</span>}
                                                        {item.status ==='S5' && <span className='badge badge-danger'>???? h???y</span>}
                                                        {item.status ==='S6' && <span className='badge badge-warning'>Ho??n tr???</span>}
                                                    </td>
                                                    <td style={{width: '10%'}}>
                                                        {
                                                            item.status ==='S1' && 
                                                            <>
                                                                <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">X??c nh???n</span>
                                                                <div className="actionOrder text-danger">Hu??? ????n</div>
                                                            </>
                                                        }

                                                        {
                                                            item.status ==='S2' && 
                                                            <>
                                                                <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Giao h??ng</span>
                                                                <div className="actionOrder text-danger">Hu??? ????n</div>
                                                            </>
                                                        }

                                                        {
                                                            item.status ==='S3' && 
                                                            <>
                                                                <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Ch???t ????n</span>
                                                                <div className="actionOrder text-danger">Hu??? ????n</div>
                                                            </>
                                                        }

                                                        {
                                                            item.status ==='S4' && item.bill === '0' &&
                                                            <span onClick={() => sendBill(item)}  className="actionOrder text-primary">G???i ho?? ????n</span>
                                                        }

                                                        {
                                                            item.status ==='S4' && item.bill === '1' &&
                                                            <span className="actionOrder text-success" disabled >???? g???i H??</span>
                                                        }

                                                        {
                                                            item.status ==='S5' && <span className="actionOrder text-primary">Mua l???i</span>
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan="10" className="text-center">Ch??a c?? ????n h??ng n??o...</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                        {
                            filterOrder?.length > 0 && filteredList(filterOrder, search).length > orderPerPage &&
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
                        }
                    </TabPane>
                </TabContent>
            </LoadingOverlay>
        </div>
    );
}
export default OrderManage;
