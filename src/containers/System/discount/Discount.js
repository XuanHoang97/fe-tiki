import { formatDateNew } from 'components/Formatting/FormatDate';
import { AddGift, GetAllDiscount } from 'store/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import AddDiscount from './AddDiscount';
import TabDiscount from './TabDiscount';
import './style.scss';

const Discount = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('1');
    const [modalDiscount, setModalDiscount] = useState(false);
    const vouchers = useSelector(state => state.discount.vouchers);

    useEffect(() => {
        dispatch(GetAllDiscount());
    }, [dispatch]);

    // Add discount
    const addDiscount = () => {
        setModalDiscount(!modalDiscount);
    }
    const handleAddDiscount = (data) => {
        dispatch(AddGift({
            ...data
        }));
    }

    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const voucherPerPage = 5;
    const pagesVisited = pageNumber * voucherPerPage;
    const pageCount = Math.ceil(vouchers.length / voucherPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='Discount'>
            <AddDiscount
                isOpen={modalDiscount}
                toggle={addDiscount}
                handleAddDiscount={handleAddDiscount}
            />

            <div className="addDiscount">
                <div className='discountHeader'>
                    <img src="https://img.freepik.com/free-vector/sales-promotion-cartoon-web-icon-marketing-strategy-rebate-advertising-discount-offer-low-price-idea-clearance-sale-customer-attraction-vector-isolated-concept-metaphor-illustration_335657-2752.jpg?size=338&ext=jpg" 
                    style={{width: '8%'}} alt=""/>
                    <div className='discountTitle'>Khuyến mãi ({vouchers?.length ? vouchers.length : 0})</div>
                </div>

                <button type="button" className="btn btn-success" onClick={() => addDiscount()}>
                    <i className="fas fa-plus mr-2"></i> Thêm khuyến mãi
                </button>
            </div>

            <TabDiscount
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className='discountContent'>
                <TabPane tabId="1" className='listDiscount'>
                    <div className='filterDiscount'>
                        <div className='col-4'>
                          <input type="text" className="form-control" placeholder="Tìm sản phẩm ...." />
                        </div>

                        <select className="form-control col-2">
                            <option>Trạng thái</option>
                            <option>abc</option>
                        </select>
                    </div>

                    <div className="discountTable">
                        <div className='list-discount'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>Thông tin khuyến mãi</td>
                                        <td>Giảm giá</td>
                                        <td>Áp dụng đơn</td>
                                        <td>Sử dụng</td>
                                        <td>Tối đa</td>
                                        <td>Bắt đầu</td>
                                        <td>Kết thúc</td>
                                        <td>Trạng thái</td>
                                        <td>Người tạo</td>
                                        <td>Tác vụ</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        vouchers?.length >0 ?
                                        vouchers.slice(pagesVisited, pagesVisited + voucherPerPage).map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td className='text-primary'>{item.info}</td>
                                                    <td>{item.discount}k</td>
                                                    <td>{item.applyTo}k</td>
                                                    <td>{item.Used}</td>
                                                    <td>{item.Max}</td>
                                                    <td>{formatDateNew(item.discountStart)}</td>
                                                    <td>{formatDateNew(item.discountEnd)}</td>
                                                    <td>{item.status}</td>
                                                    <td>{item.creator}</td>
                                                    <td className='text-primary'>
                                                        <button className='btn btn-outline-secondary btn-sm'>Ngừng</button>    
                                                        <button className='btn btn-outline-danger ml-2 btn-sm'>Huỷ</button>    
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan={9}>Không có khuyến mãi</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
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
export default Discount;