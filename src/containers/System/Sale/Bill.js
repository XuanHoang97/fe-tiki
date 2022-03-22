import React, { useEffect, useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { formatDateNew } from 'components/Formatting/FormatDate';
import ReactPaginate from 'react-paginate';
import { GetBill } from 'store/actions';
import ViewBill from './ViewBill';
import TabBill from './TabBill';
import './style.scss';

const Bill = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('1');
    const Bills = useSelector(state => state.order.Bills);
    const [infoBill, setInfoBill] = useState(false);
    const [billDetail, setBillDetail] = useState([]);

    useEffect(() => {
        dispatch(GetBill());
    }, [dispatch]);
    
    const detailBill = (bill) => {
        setInfoBill(!infoBill);
        setBillDetail(bill);
    }

    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const billPerPage = 10;
    const pagesVisited = pageNumber * billPerPage;
    const pageCount = Math.ceil(Bills.length / billPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='Bill'>
            <ViewBill
                isOpen={infoBill}
                toggle={detailBill}
                bill={billDetail}
            />

            <div className='billHeader'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOVkwC2h6PD5RTotWCpIlDo4FvyCr5hadR3wR9uYb79xzACB0NbfVy5Le1eXJp0BAcLQ&usqp=CAU" style={{width:'4%'}} alt="" />
                <div className='billTitle'>Hoá đơn <small>({Bills.length? Bills.length : 0})</small></div>
            </div>
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
                                {
                                    Bills?.length > 0 ?
                                    Bills.slice(pagesVisited, pagesVisited + billPerPage).map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.billCode}</td>
                                                <td>{item.code}</td>
                                                <td>{item.username}</td>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>{numberFormat(item.total)}</td>
                                                <td>{formatDateNew(item.datePayment)}</td>
                                                <td>{item.payment}</td>
                                                <td>
                                                    {item.status === 'S4' && <span className='badge badge-success'>Đã thanh toán</span>}
                                                </td>
                                                <td>
                                                    <button onClick={()=> detailBill(item)} className='btn btn-outline-primary'>Xem</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan={11}>Chưa có hoá đơn nào...</td>
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
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default Bill;