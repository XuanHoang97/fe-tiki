import { investmentCost, numberFormat } from 'components/Formatting/FormatNumber';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import * as actions from './../../../store/actions';
import TabStatistical from './TabStatistical';
import './style.scss';

const StatisticalManage = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('1');
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.filterOrderByStatus('S0'));
    }, [dispatch])

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-3">Báo cáo thống kê</div>
            <TabStatistical
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    <div className="d-flex">
                        <div className="statistical col-9 p-0">
                            <div className="item-statistical align-items-center">
                                <img src="https://thumbs.dreamstime.com/b/pre-order-icon-isolated-white-background-pre-order-icon-isolated-white-background-your-web-mobile-app-design-133861058.jpg" 
                                className='w-75' alt="" />
                                <div className="stat">
                                    <h5 className="card-text font-weight-bold text-danger">0</h5>
                                    <h6 className="card-title text-secondary small">ĐƠN HÀNG HÔM NAY</h6>
                                </div>
                            </div>

                            <div className="item-statistical  align-items-center">
                                <img src="https://icones.pro/wp-content/uploads/2021/03/icone-de-l-argent-symbole-png-gris.png" className="w-50" alt="" />
                                <div className="stat">
                                    <h5 className="card-text font-weight-bold text-primary">
                                    0 đ
                                    </h5>
                                    <h6 className="card-title small">Doanh thu hôm nay</h6>
                                </div>
                            </div>

                            <div className="item-statistical  align-items-center">
                                <img src="https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195161330.jpg" className='w-75' alt="" />
                                <div className="stat">
                                    <h5 className="card-text font-weight-bold text-success">
                                    0
                                    </h5>
                                    <h6 className="card-title small">Khách mới trong ngày</h6>
                                </div>
                            </div>

                            <div className="item-statistical align-items-center">
                                <img src="https://icons-for-free.com/iconfiles/png/512/icons+money+profit+icon-1320086484158263552.png" className="w-75" alt="" />
                                <div className="stat">
                                    <h5 className="card-text font-weight-bold text-danger">{numberFormat(investmentCost())}</h5>
                                    <h6 className="card-title small">ĐẦU TƯ</h6>
                                </div>
                                <button className="btn btn-success">Xem</button>
                            </div>

                            <div className="item-statistical  align-items-center">
                                <img src="https://icon-library.com/images/revenue-icon-png/revenue-icon-png-2.jpg" className="w-75" alt="" />
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
                                    <h6 className="card-title small">TỔNG DOANH THU</h6>
                                </div>
                                <button className="btn btn-success">Xem</button>
                            </div>

                            <div className="item-statistical  align-items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPASvr7pHWSq77PnCQ5F6mt7QecM3tQNqwX_1NtZ-6QVUQbDC81d_kBSMF85fvY8jYLM&usqp=CAU" className="w-75" alt="" />
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
                                    <h6 className="card-title small">TỔNG LỢI NHUẬN</h6>
                                </div>
                                <button className="btn btn-success">Xem</button>
                            </div>
                        </div>

                        <div className="col-3 overview">
                            <div className='reportStatus'>
                                <span className='number'>0</span>
                                <span className='status'>Đơn chưa thanh toán</span>
                            </div>
                            <div className='reportStatus'>
                                <span className='number'>
                                    {
                                        filterOrder && filterOrder.length > 0 ?
                                        filterOrder.filter(item => item.status === 'S3').length
                                        :
                                        <span className='text-primary'>0</span>
                                    }
                                </span>
                                <span className='status'>Đơn hàng chưa giao</span>
                            </div>
                            <div className='reportStatus'>
                                <span className='number'>
                                    {
                                        filterOrder && filterOrder.length > 0 ?
                                        filterOrder.filter(item => item.status === 'S2').length
                                        + filterOrder.filter(item => item.status === 'S1').length
                                        :
                                        <span className='text-primary'>0</span>
                                    }
                                </span>
                                <span className='status'>Đơn hàng chưa hoàn tất</span>
                            </div>
                            <div className='reportStatus'>
                                <span className='number'>
                                    {
                                        filterOrder && filterOrder.length > 0 ?
                                        filterOrder.filter(item => item.status === 'S6').length
                                        :
                                        <span className='text-primary'>0</span>
                                    }
                                </span>
                                <span className='status'>Đơn hoàn trả</span>
                            </div>
                            <div className='reportStatus'>
                                <span className='number'>
                                    {
                                        filterOrder && filterOrder.length > 0 ?
                                        filterOrder.filter(item => item.status === 'S5').length
                                        :
                                        <span className='text-primary'>0</span>
                                    }
                                </span>
                                <span className='status'>Đơn hàng huỷ</span>
                            </div>
                        </div>
                    </div>

                <div className='bg-white p-3 mt-3'>
                    <div>THỐNG KÊ</div>
                    <div className='d-flex bg-light py-3 my-3'>
                        <div className="form-group d-flex col-4 p-0">
                            <label className='mx-2'>Từ ngày</label>
                            <input type="date" className="form-control col-8" />
                        </div>

                        <div className="form-group d-flex col-4 p-0">
                            <label className='mx-2'>Đến</label>
                            <input type="date" className="form-control col-8" />
                            <button type="button" className="btn btn-primary">Xem</button>  
                        </div>
                    </div>
                    <div>Updating... </div>
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
