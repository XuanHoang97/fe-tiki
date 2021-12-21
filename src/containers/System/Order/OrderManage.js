import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import './OrderManage.scss';

const OrderManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý đơn đặt hàng</div>

            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        <div className='font-weight-bold'>Tất cả</div>
                        <span className='text-secondary statical'>0 đơn hàng</span>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        <div className='font-weight-bold'>Chờ xác nhận</div>
                        <span className='text-secondary statical'>0/0 đơn quá hạn xác nhận</span>
                        
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <div className='font-weight-bold'>Đang xử lý</div>
                        <span className='text-secondary statical'>0/0 đơn quá hạn xác nhận</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                        <div className='font-weight-bold'>Đang vận chuyển</div>
                        <span className='text-secondary statical'>0 đơn hàng</span>
                    </NavLink>
                </NavItem>
                
                <NavItem>
                    <NavLink className={activeTab == '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                        <div className='font-weight-bold'>Đã giao hàng</div>
                        <span className='text-secondary statical'>0 đơn hàng</span>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>                 
                        <div className='font-weight-bold'>Đã huỷ</div>
                        <span className='text-secondary statical'>0 đơn hàng</span>
                    </NavLink>
                </NavItem>
                
            </Nav>
            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    <div className='filter d-flex'>
                        <div className="input-group col-5 p-0">
                            <label className="p-0">Chọn mã Đơn</label>
                            <input type="text" className="form-control ml-2" placeholder="Search..." 
                                style={{height:'30px'}}
                            />
                        </div>

                        <div className="form-group d-flex col-2 p-0">
                            <select className="form-control" name="" id=""  style={{height:'30px'}}>
                                <option>Ngày đặt hàng</option>
                                <option>Mới nhất</option>
                                <option>Muộn nhất</option>
                            </select>
                        </div>

                        <div className="form-group d-flex col-2 p-0">
                            <select className="form-control" name="" id=""  style={{height:'30px'}}>
                                <option>Bộ lọc khác</option>
                                <option>Từ cao xuống thấp</option>
                                <option>Từ thấp lên cao</option>
                            </select>
                        </div>
                    </div>

                    <div className='list-order mt-4'>
                        <div className="text-dark">Danh sách đơn đặt hàng (<b>150</b>)</div>
                        <table className="table table-striped table-bordered table-hover table-responsive">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>Tick</td>
                                    <td>Mã đơn hàng</td>
                                    <td>Hình thức giao hàng</td>
                                    <td>Trạng thái</td>
                                    <td>Số lượng</td>
                                    <td>Khách hàng phải trả</td>
                                    <td>Hạn xác nhận</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>1dx45ab7d</td>
                                    <td>Tiki giao hàng</td>
                                    <td>Tiki đã tiếp nhận đơn hàng</td>
                                    <td>5</td>
                                    <td>1.450.374 đ</td>
                                    <td>Ngày mai 18/12/2021</td>
                                    <td className='d-flex flex-column-reverse'>
                                        <button type="button" className="btn text-danger">
                                            <span className=''>Xem chi tiết</span>
                                        </button>
                                        <button type="button" className="btn text-primary">
                                            <span className=''>Xem và xác nhận</span>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane tabId="2">Tab 2 Content</TabPane>
                <TabPane tabId="3">Tab 3 Content</TabPane>
                <TabPane tabId="4">Tab 4 Content</TabPane>
                <TabPane tabId="5">Tab 5 Content</TabPane>
                <TabPane tabId="6">Tab 6 Content</TabPane>
            </TabContent>
        </div>
    );

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderManage);
