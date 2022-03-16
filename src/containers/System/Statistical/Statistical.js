import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import TabStatistical from './TabStatistical';
import './style.scss';

const StatisticalManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="report-statistical">
            <h5 className="mb-3">Báo cáo lợi nhuận bán hàng</h5>
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
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default StatisticalManage;
