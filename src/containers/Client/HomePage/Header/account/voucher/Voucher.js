import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import TabVoucher from './TabVoucher';
import { NavLink } from 'react-router-dom';
import { path } from 'utils';
import './style.scss';

function Voucher(props) {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <>
            <div className='overview-voucher'>
                <h5>Ví voucher</h5>
                <NavLink to={`${path.DISCOUNT_DETAIL}`}>
                    <span className='text-danger'>Tìm thêm voucher</span>
                </NavLink>
            </div>

            <div className='search-voucher'>
                Mã voucher
                <input type="text" className="form-control" placeholder="Nhập mã voucher tại đây ..." />
                <button className='btn btn-secondary'>Lưu</button>
            </div>

            <TabVoucher
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="list-voucher">
                        <div className='voucher'>
                            <div className='voucher-provider col-3'>
                                <div className='vc-img'>
                                </div>
                                <span>Thời trang</span>
                                <span className='ribbon'></span>
                            </div>

                            <div className='voucher-info d-flex justify-content-between col-9 py-2'>
                                <div className='voucher-value'>
                                    <b className='text-primary'>Giảm 10k</b>
                                    <div>Đơn tốI thiểu 20k</div>
                                    <span className='small text-secondary'>HSD: 30.06.2022</span>
                                </div>

                                <div className='voucher-right text-right'>
                                    <span className='text-danger'>Dùng ngay <i className='fa fa-angle-right'></i></span>
                                    <span className='text-primary'>Điều kiện</span>
                                </div>
                            </div>
                        </div>

                        <div className='voucher'>
                            <div className='voucher-provider col-3'>
                                <div className='vc-img'>
                                </div>
                                <span>Thời trang</span>
                                <span className='ribbon'></span>
                            </div>

                            <div className='voucher-info d-flex justify-content-between col-9 py-2'>
                                <div className='voucher-value'>
                                    <b className='text-primary'>Giảm 10k</b>
                                    <div>Đơn tốI thiểu 20k</div>
                                    <span className='small text-secondary'>HSD: 30.06.2022</span>
                                </div>

                                <div className='voucher-right text-right'>
                                    <span className='text-danger'>Dùng ngay <i className='fa fa-angle-right'></i></span>
                                    <span className='text-primary'>Điều kiện</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
            </TabContent>
        </>
    );
}
export default Voucher;