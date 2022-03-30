import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import { FilterMyOrder, GetOrderByUser, getStatusOrder } from 'store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import DetailOrder from './DetailOrder';
import RatingProduct from './Rating';

function Purchase(props) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(4);
    const user = useSelector(state => state.auth.user);
    const listOrder = useSelector(state => state.client.listOrder);
    const statusOrder = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterMyOrder);
    const [modalDetail, setModalDetail] = useState(false);
    const [orderDetail, setOrderDetail] = useState({});
    const [rating, setRating] = useState(false);
    const [ratingEdit, setRatingEdit] = useState('');

    // get order
    useEffect(() => {
        try{
            let userId = user ? user.id : null;
            dispatch(getStatusOrder());
            dispatch(FilterMyOrder(userId, 'S0'));
            dispatch(GetOrderByUser(userId));
        }catch(e){
            console.log('get order fail', e)
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

    // rating
    const handleRated = (order) => {
        setRating(!rating);
        setRatingEdit(order);
        console.log('order', order);
    }

    return (
        <div>
            <DetailOrder
                isOpen={modalDetail}
                toggle={() => setModalDetail(!modalDetail)}
                order={orderDetail}
                statusOrder = {statusOrder}
            />

            <RatingProduct
                isOpen={rating}
                toggle={handleRated}
                currentOrder={ratingEdit}
            />

            <Nav tabs className='tabMyOrder'>
                {
                    statusOrder?.length >0 ?
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

            <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab}>
                    {
                        filterOrder?.length > 0 ?
                        filterOrder.slice(pagesVisited, pagesVisited + orderPerPage).map((item, index) => {
                            return (
                                <div className='order p-3 border-bottom' key={index}>
                                    <div className='statusOrder mb-4'>
                                        <div className='text-dark'>{index + 1}. Đơn hàng <b>{item.code}</b></div>
                                        <span>
                                            {item.status ==='S1' && <span className='text-warning'><i className="fas fa-clock"></i>  CHỜ XỬ LÝ</span>}
                                            {item.status ==='S2' && <span className='text-success'><i className="fa fa-check"></i> ĐÃ XÁC NHẬN</span>}
                                            {item.status ==='S3' && <span className='text-primary'><i className="fa fa-truck"></i>  ĐANG GIAO HÀNG</span>}

                                            {item.status ==='S4' && item.action ==='Chưa đánh giá' && <span className='text-success'><i className="fa fa-check"></i> ĐÃ GIAO</span>}
                                            {item.status ==='S4' && item.action ==='Đã đánh giá' && <span className='text-success'><i className="fa fa-check"></i> ĐÃ ĐÁNH GIÁ</span>}
                                            
                                            {item.status ==='S5' && <span className='text-danger'><i className="fa fa-times"></i> ĐÃ HUỶ</span>}
                                            {item.status ==='S6' && <span className='text-secondary'><i className="fa fa-undo"></i> HOÀN TRẢ</span>}
                                            {item.status ==='S7' && <span className='text-danger'><i className="fa fa-star"></i> ĐÃ ĐÁNH GIÁ</span>}
                                        </span>
                                    </div>

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
                                            <button onClick={()=>detailOrder(item)} type="button" className="btn btn-outline-secondary btn-sm">Chi tiết</button>
                                            {
                                                item.status ==='S1' || item.status ==='S2' || item.status ==='S3' &&
                                                <button type="button" className="btn btn-danger btn-sm">Huỷ đơn</button>
                                            }

                                            {
                                                item.status ==='S4' && item.action ==='Chưa đánh giá' &&
                                                <button onClick={() => handleRated(item)} type="button" className="btn btn-success btn-sm">Đánh giá</button>
                                            }

                                            {
                                                item.status ==='S4' && item.action ==='Đã đánh giá' &&
                                                <button type="button" className="btn btn-warning btn-sm">Xem đánh giá</button>
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