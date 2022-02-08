import { numberFormat } from 'components/Formatting/FormatNumber';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import * as actions from './../../../store/actions';

const StatisticalManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const dispatch = useDispatch();
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.filterOrderByStatus('S4'));
    }, [dispatch])


    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Báo cáo thống kê</div>

            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        <div className='font-weight-bold'>Doanh thu bán hàng</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        <div className='font-weight-bold'>Chi phí đầu tư</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <div className='font-weight-bold'>Doanh thu quảng cáo</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        <div className='font-weight-bold'>Lượng truy cập - SEO</div>
                    </NavLink>
                </NavItem>

            </Nav>
            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">

                <div className="d-flex">

                    <div className="d-flex align-items-center col-3">
                        <img src="https://thumbs.dreamstime.com/b/pile-medal-dollar-money-bag-isolated-white-background-coin-gold-icon-sack-infographics-green-flat-illustration-177216498.jpg" className="w-25 mr-2" alt="" />
                        <div className="stat">
                            <h3 className="card-text font-weight-bold text-primary">
                            {
                                filterOrder && filterOrder.length > 0 
                                && filterOrder.filter(item => item.status === 'S4').length > 0 ?
                                <span className="text-success font-weight-bold">
                                    {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                                    return total + item.total
                                    }, 0))}
                                </span>
                                : 
                                <span className='text-success'>0 đ</span>
                            }
                            </h3>
                            <h6 className="card-title">BÁN HÀNG</h6>
                        </div>
                    </div>

                    <div className="d-flex align-items-center col-3">
                        <img src="https://thumbs.dreamstime.com/b/pile-medal-dollar-money-bag-isolated-white-background-coin-gold-icon-sack-infographics-green-flat-illustration-177216498.jpg" className="w-25 mr-2" alt="" />
                        <div className="stat">
                            <h3 className="card-text font-weight-bold text-primary">0 đ</h3>
                            <h6 className="card-title">CHI PHÍ ĐẦU TU</h6>
                        </div>
                    </div>

                    <div className="d-flex align-items-center col-3">
                        <img src="https://thumbs.dreamstime.com/b/pile-medal-dollar-money-bag-isolated-white-background-coin-gold-icon-sack-infographics-green-flat-illustration-177216498.jpg" className="w-25 mr-2" alt="" />
                        <div className="stat">
                            <h3 className="card-text font-weight-bold text-primary">0 đ</h3>
                            <h6 className="card-title">QUẢNG CÁO</h6>
                        </div>
                    </div>

                    <div className="d-flex align-items-center col-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQce_fiZoq1HQdTe4Yh_byJiKkajhGdF4GhVqL_boXGep617frevLP1IusGfrPdXJMq5cg&usqp=CAU" className="w-25 mr-2" alt="" />
                        <div className="stat">
                            <h3 className="card-text font-weight-bold text-primary">0 <small>User</small></h3>
                            <h6 className="card-title">LƯỢNG TRUY CẬP - SEO</h6>
                        </div>
                    </div>
                </div>

                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
            </TabContent>
        </div>
    );

}
export default StatisticalManage;
