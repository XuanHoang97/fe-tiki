import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { FilterMyOrder, getStatusOrder } from 'store/actions';
import {useDispatch, useSelector} from 'react-redux';
import React, { useEffect, useState } from 'react';
import ReactPaginate from "react-paginate";
import DetailOrder from './DetailOrder';
import RatingProduct from './Rating';
import ViewRating from './ViewRating';

function Purchase(props) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(4);
    const user = useSelector(state => state.auth.user);
    const statusOrder = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterMyOrder);

    const [modalDetail, setModalDetail] = useState(false);
    const [orderDetail, setOrderDetail] = useState({});
    const [rating, setRating] = useState(false);
    const [ratingEdit, setRatingEdit] = useState('');
    const [showRating, setShowRating] = useState(false);
    const [visitRating, setVisitRating] = useState('');

    // get order
    useEffect(() => {
        let userId = user ? user.id : null;
        dispatch(getStatusOrder());
        dispatch(FilterMyOrder(userId, 'S0'));
    }, [dispatch, user]);

    // detail order
    const detailOrder = (order) => {
        setModalDetail(!modalDetail);
        setOrderDetail(order);
    }
    
    // rating
    const handleRated = (order) => {
        setRating(!rating);
        setRatingEdit(order);
    }

    // view rating
    const viewRating = (order) => {
        setShowRating(!showRating);
        setVisitRating(order);
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

            <RatingProduct
                isOpen={rating}
                toggle={handleRated}
                currentOrder={ratingEdit}
                />

            <ViewRating
                isOpen={showRating}
                toggle={viewRating}
                visitRating={visitRating}
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
                                        <div className='text-dark'>{index + 1}. ????n h??ng <b>{item.code}</b></div>
                                        <span>
                                            {item.status ==='S1' && <span className='text-warning'> CH??? X??? L??</span>}
                                            {item.status ==='S2' && <span className='text-success'> ???? X??C NH???N</span>}
                                            {item.status ==='S3' && <span className='text-primary'> ??ANG GIAO</span>}

                                            {item.status ==='S4' && item.action ==='Ch??a ????nh gi??' && <span className='text-success'> ???? GIAO</span>}
                                            {item.status ==='S4' && item.action ==='???? ????nh gi??' && <span className='text-success'> ???? ????NH GI??</span>}
                                            
                                            {item.status ==='S5' && <span className='text-danger'> ???? HU???</span>}
                                            {item.status ==='S6' && <span className='text-secondary'> HO??N TR???</span>}
                                        </span>
                                    </div>

                                    <div className='infoProduct'>
                                        <div className='imgProduct'>
                                            <img src={item.image} alt='img' />
                                            <div className='text-secondary'>
                                                <h6>{item.name}</h6>
                                                <span>x{item.qty}</span>
                                            </div>
                                        </div>
                                        <span>T???ng ti???n: <span className='text-danger ml-1' style={{fontSize: '18px'}}>{numberFormat(item.sale*item.qty)}</span></span>
                                    </div>
                                    <div className='detail'>
                                        <button onClick={()=>detailOrder(item)} type="button" className="btn btn-outline-primary btn-sm">Chi ti???t</button>
                                        {
                                            item.status ==='S1' || item.status ==='S2' || item.status ==='S3' ?
                                            <button type="button" className="btn btn-danger btn-sm">Hu??? ????n</button>
                                            : null
                                        }

                                        {
                                            item.status ==='S4' && item.action ==='Ch??a ????nh gi??' &&
                                            <button onClick={() => handleRated(item)} type="button" className="btn btn-success btn-sm">????nh gi??</button>
                                        }

                                        {
                                            item.status ==='S4' && item.action ==='???? ????nh gi??' &&
                                            <button onClick={()=> viewRating(item)} type="button" className="btn btn-warning btn-sm">Xem ????nh gi??</button>
                                        }
                                    </div>
                                </div>
                            )
                        })
                        : <div className='text-center my-3'>Ch??a c?? ????n h??ng n??o...</div>
                    }

                    {
                        filterOrder?.length > 0 &&
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
        </div>
    );
}
export default Purchase;