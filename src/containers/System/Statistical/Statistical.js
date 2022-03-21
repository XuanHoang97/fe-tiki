import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import TabStatistical from './TabStatistical';
import './style.scss';

const StatisticalManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="report-statistical">
            <div className="report-header">
                <img src="https://cdn-icons-png.flaticon.com/512/3309/3309960.png" style={{width: '3%'}} alt="" />
                <div className="reportTitle">Báo cáo lợi nhuận</div>
            </div>
            <TabStatistical
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className ="content-statistical">
                <TabPane tabId="1" className='report-revenue'>
                    {/* filter  */}
                    <div className="filter-report">
                        <div className="row">
                            <div className="col-4">
                                <input type="text" className="form-control" placeholder="Tìm sản phẩm ...." />
                            </div>
                            <div className="col-2">
                                <div className="form-group">
                                  <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="form-group">
                                  <input type="date" className="form-control" />
                                </div>
                            </div>

                            <div className="col-2">
                                <button type="button" className="btn btn-primary">Tìm</button>
                            </div>
                        </div>
                    </div>

                    <div className="revenueTable bg-white mt-3 p-3">
                        <div className='list-revenue'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>Ngày bán</td>
                                        <td>Tên khách hàng</td>
                                        <td>Sản phẩm</td>
                                        <td>Số lượng</td>
                                        <td>Đơn giá</td>
                                        <td>Giá vốn</td>
                                        <td>Doanh số</td>
                                        <td>Chênh lệch</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='text-primary'>15/03/2022</td>
                                        <td>hoang</td>
                                        <td>vertu 2022</td>
                                        <td>10</td>
                                        <td>10</td>
                                        <td>100.000</td>
                                        <td>10</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr/>
                    <div className="chartSale d-flex">
                        <div className='col-md-6  border-right'>
                            <h5>Số lượng đơn hàng</h5>
                            <div>updating chart...</div>
                        </div>
                        <div className='col-md-6'>
                            <h5>Doanh thu</h5>
                            <div>Updating chart ...</div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <h5>Thống kê sản phẩm bán ra</h5>
                    <div className="listProductSold d-flex">
                        <div className="col-md-6 border-right">
                        <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>Tên sản phẩm</td>
                                        <td>Số lượng bán ra</td>
                                        <td>Giá bán</td>
                                        <td>Thành tiền</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>Vertu 2022</td>
                                        <td>10</td>
                                        <td>98.567.678 đ</td>
                                        <td>98.000.000 đ</td>
                                    </tr>
                                    <tr>
                                        <td>Nokia 1280</td>
                                        <td>20</td>
                                        <td>198.567 đ</td>
                                        <td>108.000 đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-md-6">
                            <h5>Chart product sold</h5>
                            <div>updating...</div>
                        </div>
                    </div>
                    <hr/>
                    <h5>Sản phẩm bán chạy</h5>
                    <div>uppadting chart...</div>

                </TabPane>
                <TabPane tabId="3">
                    <h5>Khách hàng tiềm năng</h5>   
                    <div>updating...</div>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default StatisticalManage;
