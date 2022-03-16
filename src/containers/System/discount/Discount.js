import React, { useState} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import AddDiscount from './AddDiscount';
import TabDiscount from './TabDiscount';
import './style.scss';

const Discount = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [modalDiscount, setModalDiscount] = useState(false);

    const addDiscount = () => {
        setModalDiscount(!modalDiscount);
    }
    return (
        
        <div className='Discount'>
            <AddDiscount
                isOpen={modalDiscount}
                toggle={addDiscount}
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
                    <div className='filterDiscount d-flex bg-white p-3' style={{gap: '10px'}}>
                        <div className='col-4'>
                          <input type="text" className="form-control" placeholder="Tìm sản phẩm ...." />
                        </div>

                        <select className="form-control col-2">
                            <option>Trạng thái</option>
                            <option>abc</option>
                        </select>
                    </div>

                    <div className="discountTable bg-white mt-3 p-3">
                        <div className='list-discount'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>Thông tin khuyến mãi</td>
                                        <td>Sử dụng</td>
                                        <td>Bắt đầu</td>
                                        <td>Kết thúc</td>
                                        <td>Người tạo</td>
                                        <td>Tác vụ</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='text-primary'>Tặng Voucher giảm giá mua hàng</td>
                                        <td>
                                            1
                                        </td>
                                        <td>15/03/2022</td>
                                        <td>30/06/2022</td>
                                        <td>Admin</td>
                                        <td className='text-primary'>
                                            <button className='btn btn-outline-secondary'>Ngừng</button>    
                                            <button className='btn btn-outline-danger'>Huỷ</button>    
                                        </td>
                                    </tr>
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