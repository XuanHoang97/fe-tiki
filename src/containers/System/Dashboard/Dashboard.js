import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { investmentCost, numberFormat } from 'components/Formatting/FormatNumber';
import {filterOrderByStatus} from '../../../store/actions';
import './style.scss'

const  Dashboard = (props) => {
    const dispatch = useDispatch();
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(filterOrderByStatus('S0'));
    }, [dispatch])

    return (
        <div className="dashboardTiki">
            <h5 className='my-2'>Tổng quan</h5>
             <div className="detail-overview">
                <div className="statistical col-md-8 col-xs-12 p-0">
                    <div className="item-statistical" style={{background:'rgb(239 169 64) '}}>
                        <img src="https://thumbs.dreamstime.com/b/shopping-cart-icon-trolley-icon-shopping-cart-icon-trolley-icon-vector-illustration-isolated-white-background-163727286.jpg" alt="" />
                        <div className="stat">
                            <h6 className="card-title small">ĐƠN HÀNG HÔM NAY</h6>
                            <h5 className="card-text font-weight-bold">0</h5>
                        </div>
                    </div>

                    <div className="item-statistical" style={{background:'rgb(25 159 47)'}}>
                        <img src="https://image.shutterstock.com/image-vector/dollar-icon-symbol-vector-money-260nw-1723606144.jpg"  alt="" />
                        <div className="stat">
                            <h6 className="card-title small">DOANH THU HÔM NAY</h6>
                            <h5 className="card-text font-weight-bold">
                            0 đ
                            </h5>
                        </div>
                    </div>

                    <div className="item-statistical" style={{background:'rgb(76 117 235)'}}>
                        <img src="https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195161330.jpg" alt="" />
                        <div className="stat">
                            <h6 className="card-title small">KHÁCH HÀNG MỚI</h6>
                            <h5 className="card-text font-weight-bold">
                            0
                            </h5>
                        </div>
                    </div>

                    <div className="item-statistical text-danger">
                        <img src="https://previews.123rf.com/images/mariiasimakova/mariiasimakova2004/mariiasimakova200400644/145706280-investment-icon-simple-illustration-from-startup-collection-creative-investment-icon-for-web-design-.jpg"  alt="" />
                        <div className="stat">
                            <h6 className="card-title small text-dark">ĐẦU TƯ</h6>
                            <h5 className="card-text font-weight-bold">{numberFormat(investmentCost())}</h5>
                        </div>
                    </div>

                    <div className="item-statistical text-primary">
                        <img src="https://icon-library.com/images/revenue-icon-png/revenue-icon-png-2.jpg"  alt="" />
                        <div className="stat">
                            <h6 className="card-title small text-dark">TỔNG DOANH THU</h6>
                            <h5 className="card-text font-weight-bold">
                            {
                                filterOrder && filterOrder.length > 0 
                                && filterOrder.filter(item => item.status === 'S4').length > 0 ?
                                <span className="font-weight-bold">
                                    {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                                    return total + item.total
                                    }, 0))}
                                </span>
                                : 
                                <span className='text-primary'>0 đ</span>
                            }
                            </h5>
                        </div>
                    </div>

                    <div className="item-statistical text-success">
                        <img src="https://image.shutterstock.com/image-illustration/growth-icon-business-success-conceptselement-260nw-1464772178.jpg"  alt="" />
                        <div className="stat">
                            <h6 className="card-title small text-dark">TỔNG LỢI NHUẬN</h6>
                            <h5 className="card-text font-weight-bold">
                            {
                                <span className="font-weight-bold">
                                    {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                                    return total + item.total
                                    }, 0) - investmentCost())}
                                </span>
                            }
                            </h5>
                        </div>
                    </div>

                    <div className="overview">
                        <div className='reportStatus'>
                            <img src="https://thumbs.dreamstime.com/b/dollar-banknote-stack-icon-money-cash-symbol-simple-style-financial-banking-infographic-design-element-183107279.jpg" className='illustrator' alt="" />
                            <span className='number'>
                                {
                                    filterOrder?.length > 0 ?
                                    filterOrder.filter(item => item.status === 'S4').length
                                    :
                                    <span className='text-primary'>0</span>
                                }    
                            </span>
                            <span className='status'>Đơn chưa thanh toán</span>
                        </div>

                        <div className='reportStatus'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/206/240/small/fast-delivery-icon-free-vector.jpg" className='illustrator' alt="" />
                            <span className='number'>
                                {
                                    filterOrder?.length > 0 ?
                                    filterOrder.filter(item => item.status === 'S3').length
                                    :
                                    <span className='text-primary'>0</span>
                                }
                            </span>
                            <span className='status'>Đơn hàng chưa giao</span>
                        </div>

                        <div className='reportStatus'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_P9W5aTdeA3o7lq1gOyn3afbgJXrOAJ13ZQ&usqp=CAU" className='illustrator' alt="" />
                            <span className='number'>
                                {
                                    filterOrder?.length > 0 ?
                                    filterOrder.filter(item => item.status === 'S2').length
                                    + filterOrder.filter(item => item.status === 'S1').length
                                    :
                                    <span className='text-primary'>0</span>
                                }
                            </span>
                            <span className='status'>Đơn hàng chưa hoàn tất</span>
                        </div>

                        <div className='reportStatus'>
                            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/refund-2225859-1853324.png" className='illustrator' alt="" />
                            <span className='number'>
                                {
                                    filterOrder?.length > 0 ?
                                    filterOrder.filter(item => item.status === 'S6').length
                                    :
                                    <span className='text-primary'>0</span>
                                }
                            </span>
                            <span className='status'>Đơn hoàn trả</span>
                        </div>

                        <div className='reportStatus'>
                            <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-cancel-illustration-260nw-1405493777.jpg" className='illustrator' alt="" />
                            <span className='number'>
                                {
                                    filterOrder?.length > 0 ?
                                    filterOrder.filter(item => item.status === 'S5').length
                                    :
                                    <span className='text-primary'>0</span>
                                }
                            </span>
                            <span className='status'>Đơn hàng huỷ</span>
                        </div>
                </div>
                </div>

                <div className="col-md-4 col-xs-12 revenue">
                    <div className='d-flex justify-content-between'>
                        <div className='item-revenue'>DOANH THU</div>
                        <div className="form-group">
                            <select className="form-control">
                                <option>Hôm nay</option>
                                <option>Tuần nay</option>
                            </select>
                        </div>
                    </div>
                    <div className="revenue-chart">
                        updating chart ...
                        <br />
                        <br />
                        <br />
                        <hr />
                    </div>  

                    <div className='item-revenue'>SẢN PHÂM BÁN CHẠY</div>
                    <div className="">
                        updating ...
                        <br />
                        <br />
                        <br />
                        <hr />
                    </div> 

                    <div className='item-revenue'>KHÁCH HÀNG TIỀM NĂNG</div>
                    <div className="">
                        updating ...
                        <br />
                        <br />
                        <br />
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
