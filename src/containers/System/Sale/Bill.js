import { numberFormat } from 'components/Formatting/FormatNumber';
import { formatDateNew } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
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

    // search 
    const [search, setSearch] = useState('');
    const bySearch = (bill, search) => {
        if (search) {
            return bill.billCode.toUpperCase().includes(search.toUpperCase());
        } else 
            return bill;
        };
    const filteredList = (Bills, search) => {
        return Bills.filter((bill) => bySearch(bill, search));
    };

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
                <div className='container-bill'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOVkwC2h6PD5RTotWCpIlDo4FvyCr5hadR3wR9uYb79xzACB0NbfVy5Le1eXJp0BAcLQ&usqp=CAU" style={{width:'3.5%'}} alt="" />
                    <div className='billTitle'>Hoá đơn <small>({Bills.length? Bills.length : 0})</small></div>
                </div>

                <div className="search-bill form-group">
                  <label>Tìm kiếm</label>
                  <input type="search" className="form-control" placeholder="Nhập hoá đơn cần tìm..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
            </div>
            <TabBill
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                Bills = {Bills} 
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
                                    <td>Ngày thanh toán</td>
                                    <td>Thanh toán</td>
                                    <td>Trạng thái</td>
                                    <td>Tác vụ</td>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    Bills?.length > 0 ?
                                    filteredList(Bills, search)
                                    .slice(pagesVisited, pagesVisited + billPerPage).map((item, index) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.billCode}</td>
                                                <td>{item.code}</td>
                                                <td>{item.username}</td>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>{numberFormat(item.sale * item.qty)}</td>
                                                <td>{formatDateNew(item.datePayment)}</td>
                                                <td>{item.payment}</td>
                                                <td>
                                                    {item.status === 'S4' && <span className='badge badge-success'>Đã thanh toán</span>}
                                                </td>
                                                <td>
                                                    <span onClick={()=> detailBill(item)} className = 'btnViewBill' >Xem</span>
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
                    
                    {
                        Bills?.length > 0 &&
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
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default Bill;