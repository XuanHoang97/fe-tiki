import React, { useEffect, useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import { FilterMyOrder, GetOrderByUser, getStatusOrder } from 'store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';
import DetailOrder from './DetailOrder';
import ReactPaginate from "react-paginate";

function Purchase(props) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(4);
    const user = useSelector(state => state.auth.user);
    const listOrder = useSelector(state => state.client.listOrder);
    const statusOrder = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterMyOrder);
    const [modalDetail, setModalDetail] = useState(false);
    const [orderDetail, setOrderDetail] = useState({});

    // get status order
    useEffect(() => {
        try{
            dispatch(getStatusOrder());
            dispatch(FilterMyOrder(user.id, 'S0'));
        }catch(e){
            console.log('get status order fail', e)
        }
    }, [dispatch, user]);

    // get order by user
    useEffect(() => {
        try {
            dispatch(GetOrderByUser(user.id));
        } catch (e) {
            console.log('get order by user fail', e)
        }
    }, [dispatch, user]);

    // detail order
    const detailOrder = (order) => {
        setModalDetail(!modalDetail);
        setOrderDetail(order);
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
        <div>
            <DetailOrder
                isOpen={modalDetail}
                toggle={() => setModalDetail(!modalDetail)}
                order={orderDetail}
                statusOrder = {statusOrder}
            />

            <Nav tabs>
                {
                    statusOrder && statusOrder.length >0 ?
                    statusOrder.map((item, index) => {
                        return (
                            <NavItem key={index}>
                                <NavLink
                                    className={activeTab === item.id ? 'active' : ''}
                                    onClick={() => {
                                        setActiveTab(item.id);
                                        dispatch(FilterMyOrder(user.id, item.keyMap));
                                    }}
                                >
                                    <span className='mr-2'>{item.valueVi}</span>
                                    {
                                        item.keyMap === 'S0' ?
                                        <span>({listOrder.length})</span> 
                                        :
                                        <span>({listOrder.filter(x => x.status === `${item.keyMap}`).length})</span>
                                    }
                                </NavLink>
                            </NavItem>
                        )
                    }) : 'loading...'
                }
            </Nav>

            <TabContent activeTab={activeTab} className='bg-light border'>
                <TabPane tabId={activeTab} className='p-2 py-3'>
                    {
                        filterOrder && filterOrder.length > 0 ?
                        filterOrder.slice(pagesVisited, pagesVisited + orderPerPage).map((item, index) => {
                            return (
                                <div className='order p-3 mb-3 bg-white border-bottom' key={index}>
                                    <div className='statusOrder'>
                                        <div className='text-dark'>{index + 1}. Đơn hàng <b>{item.code}</b></div>
                                        <span>
                                            {item.status ==='S1' && <span className='text-warning'><i className="fas fa-clock"></i>  Đang chờ xử lý</span>}
                                            {item.status ==='S2' && <span className='text-success'><i className="fa fa-check"></i> Đã xác nhận</span>}
                                            {item.status ==='S3' && <span className='text-primary'><i className="fa fa-truck"></i>  Đang giao hàng</span>}
                                            {item.status ==='S4' && <span className='text-success'><i className="fa fa-check"></i> Đã giao</span>}
                                            {item.status ==='S5' && <span className='text-danger'><i className="fa fa-times"></i> Đã hủy</span>}
                                        </span>
                                    </div>
                                    <hr/>

                                    <div className='infoProduct'>
                                        <div className='imgProduct'>
                                            <img src={item.image} style={{width: '60px'}} alt='img' />
                                            <div className='text-secondary'>
                                                <h6>{item.name}</h6>
                                                <span>x{item.qty}</span>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <span className='text-danger'>{numberFormat(item.price*item.qty)}</span>
                                            <button onClick={()=>detailOrder(item)} type="button" className="btn btn-outline-secondary btn-sm px-3">Chi tiết</button>
                                            {
                                                item.status ==='S1' || item.status ==='S2' || item.status ==='S3' ?
                                                <button type="button" className="btn btn-danger btn-sm px-3">Huỷ đơn</button>
                                                : null
                                            }

                                            {
                                                item.status ==='S4' ?
                                                <button type="button" className="btn btn-primary btn-sm px-3">Đổi hàng</button>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='text-center'>Không có đơn hàng nào...</div>
                    }
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
export default Purchase;