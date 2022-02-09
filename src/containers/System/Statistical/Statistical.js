import { investmentCost, numberFormat, totalRevenue } from 'components/Formatting/FormatNumber';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import * as actions from './../../../store/actions';
import TabStatistical from './TabStatistical';
import './style.scss';

const StatisticalManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const dispatch = useDispatch();
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.filterOrderByStatus('S0'));
    }, [dispatch])

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Báo cáo thống kê</div>
            <TabStatistical
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                <div className="statistical">
                    <div className="item-statistical align-items-center">
                        <img src="https://icons-for-free.com/iconfiles/png/512/icons+money+profit+icon-1320086484158263552.png" className="" alt="" />
                        <div className="stat">
                            <h5 className="card-text font-weight-bold text-danger">{numberFormat(investmentCost())}</h5>
                            <h6 className="card-title small">CHI PHÍ ĐẦU TƯ</h6>
                        </div>
                        <button className="btn btn-success px-3">Xem</button>
                    </div>

                    <div className="item-statistical  align-items-center">
                        <img src="https://media.istockphoto.com/vectors/profit-analysis-icon-earning-growth-blue-version-vector-id1211747430?k=20&m=1211747430&s=170667a&w=0&h=HMmsVRj54hQQRXWFPqOurfc-LHMkG6q4dxxh-F9tAsU=" className="" alt="" />
                        <div className="stat">
                            <h5 className="card-text font-weight-bold text-success">
                            <span className="text-warning">
                                {
                                    filterOrder && filterOrder.length > 0 ?
                                    numberFormat(totalRevenue(filterOrder))
                                    :
                                    <span className='text-warning'>0 đ</span>
                                }
                            </span>
                            </h5>
                            <h6 className="card-title small">TỔNG TIỀN ĐẶT HÀNG</h6>
                        </div>
                        <button className="btn btn-success px-3">Xem</button>

                    </div>

                    <div className="item-statistical  align-items-center">
                        <img src="https://icon-library.com/images/revenue-icon-png/revenue-icon-png-2.jpg" className="" alt="" />
                        <div className="stat">
                            <h5 className="card-text font-weight-bold text-primary">
                            {
                                filterOrder && filterOrder.length > 0 
                                && filterOrder.filter(item => item.status === 'S4').length > 0 ?
                                <span className="text-primary font-weight-bold">
                                    {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                                    return total + item.total
                                    }, 0))}
                                </span>
                                : 
                                <span className='text-primary'>0 đ</span>
                            }
                            </h5>
                            <h6 className="card-title small">DOANH THU</h6>
                        </div>
                        <button className="btn btn-success px-3">Xem</button>

                    </div>

                    <div className="item-statistical  align-items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPASvr7pHWSq77PnCQ5F6mt7QecM3tQNqwX_1NtZ-6QVUQbDC81d_kBSMF85fvY8jYLM&usqp=CAU" className="" alt="" />
                        <div className="stat">
                            <h5 className="card-text font-weight-bold text-success">
                            {
                                <span className="text-success font-weight-bold">
                                    {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                                    return total + item.total
                                    }, 0) - investmentCost())}
                                </span>
                            }
                            </h5>
                            <h6 className="card-title small">LỢI NHUẬN</h6>
                        </div>
                        <button className="btn btn-success px-3">Xem</button>

                    </div>
                </div>

                <div className='bg-white p-3 mt-3'>
                    <div>THỐNG KÊ THEO THỜI GIAN</div>
                    <div className='d-flex bg-light py-2 my-3'>
                        <div className="form-group d-flex col-4 p-0">
                            <label className='col-4'>Từ ngày</label>
                            <input type="date" className="form-control col-8" />
                        </div>

                        <div class="form-group d-flex col-4 p-0 mx-4">
                            <label className='col-4'>Đến ngày</label>
                            <input type="date" className="form-control col-8" />
                        </div>

                        <button type="button" className="col-1 btn btn-primary px-3">Xem</button>
                    </div>
                    
                    <div>
                        Updating...
                    </div>
                </div>

                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3">
                    <div className="d-flex align-items-center col-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce_fiZoq1HQdTe4Yh_byJiKkajhGdF4GhVqL_boXGep617frevLP1IusGfrPdXJMq5cg&usqp=CAU" className="w-25 mr-2" alt="" />
                        <div className="stat">
                            <h3 className="card-text font-weight-bold text-success">0 <small>User</small></h3>
                            <h6 className="card-title small">LƯỢNG TRUY CẬP - SEO</h6>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default StatisticalManage;
