import { formatDateNew } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { GetDiscountUser } from 'store/actions';
import TabVoucher from './TabVoucher';
import { path } from 'utils';
import './style.scss';

function Voucher(props) {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('1');
    const user = useSelector(state => state.auth.user);
    const myDiscount = useSelector(state => state.auth.discounts);

    // Discount user
    useEffect(() => {
        let userId = user? user.id :null;
        dispatch(GetDiscountUser(userId));
    }, [dispatch, user]);

    return (
        <>
            <div className='overview-voucher'>
                <h5>Ví voucher</h5>
                <div style={{cursor: 'pointer'}}
                    onClick={() => window.open(`${path.DISCOUNT_DETAIL}`, "_blank")}
                >
                    <span className='text-danger'>Tìm thêm voucher</span>
                </div>
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
                        {
                            myDiscount?.length >0 ?
                            myDiscount.map((item, index) => {
                                return (
                                    <div className='voucher' key={index}>
                                        <div className='voucher-provider col-3'>
                                            <div className='vc-img'>
                                            </div>
                                            <span>Thời trang</span>
                                            <span className='ribbon'></span>
                                        </div>

                                        <div className='voucher-info col-9'>
                                            <div className='voucher-value'>
                                                <b className='text-primary'>{item.info}</b>
                                                <div>Đơn tốI thiểu {item.applyTo}k</div>
                                                <span className='small text-secondary'>HSD: {formatDateNew(item.discountEnd)}</span>
                                                <div className='small text-secondary'> 
                                                có liệu lực từ {formatDateNew(item.discountStart)}</div>
                                            </div>

                                            <div className='voucher-right'>
                                                <span className='text-danger'>Dùng ngay <i className='fa fa-angle-right'></i></span>
                                                <span className='text-primary'>Điều kiện</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className='voucher p-3 w-100'>
                                Bạn chưa có voucher nào...
                            </div>
                        }
                    </div>
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
            </TabContent>
        </>
    );
}
export default Voucher;