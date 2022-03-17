import React, { useState, useEffect} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import AddDiscount from './AddDiscount';
import TabDiscount from './TabDiscount';
import { AddGift, GetAllDiscount } from 'store/actions';
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

    return (
        
        <div className='Discount'>
            <AddDiscount
                isOpen={modalDiscount}
                toggle={addDiscount}
                handleAddDiscount={handleAddDiscount}
            />

            <div className="addDiscount">
                <div className='d-flex align-items-center'>
                    <img src="https://img.freepik.com/free-vector/sales-promotion-cartoon-web-icon-marketing-strategy-rebate-advertising-discount-offer-low-price-idea-clearance-sale-customer-attraction-vector-isolated-concept-metaphor-illustration_335657-2752.jpg?size=338&ext=jpg" 
                    style={{width: '10%'}} className="mr-2"   alt=""/>
                    <h5>Khuyến mãi</h5>
                </div>

                <div className="addUser">
                    <button type="button" className="btn btn-success" onClick={() => addDiscount()}>
                        <i className="fas fa-plus mr-2"></i> Thêm khuyến mãi
                    </button>
                </div>
            </div>

            <TabDiscount
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className='py-3 discountContent'>
                <TabPane tabId="1" className='listDiscount'>
                    <div className='filterDiscount d-flex' style={{gap: '10px'}}>
                        <div className='col-4'>
                          <input type="text" className="form-control" placeholder="Tìm sản phẩm ...." />
                        </div>

                        <select className="form-control col-2">
                            <option>Trạng thái</option>
                            <option>abc</option>
                        </select>
                    </div>

                    <div className="discountTable bg-white p-3">
                        <div className='list-discount'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>Thông tin khuyến mãi</td>
                                        <td>Áp dụng đơn</td>
                                        <td>Sử dụng</td>
                                        <td>Tối đa</td>
                                        <td>Bắt đầu</td>
                                        <td>Kết thúc</td>
                                        <td>Người tạo</td>
                                        <td>Tác vụ</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        vouchers?.length >0 ?
                                        vouchers.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td className='text-primary'>{item.info}</td>
                                                    <td>{item.applyTo}</td>
                                                    <td>{item.Used}</td>
                                                    <td>{item.Max}</td>
                                                    <td>{item.discountStart}</td>
                                                    <td>{item.discountEnd}</td>
                                                    <td>{item.creator}</td>
                                                    <td className='text-primary'>
                                                        <button className='btn btn-outline-secondary'>Ngừng</button>    
                                                        <button className='btn btn-outline-danger'>Huỷ</button>    
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <tr>
                                            <td colSpan={7}>Không có khuyến mãi</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default Discount;