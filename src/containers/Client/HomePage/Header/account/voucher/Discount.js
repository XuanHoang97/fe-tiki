import React, { useEffect } from 'react';
import Footer from 'containers/Client/HomePage/Footer/Footer';
import Header from '../../Header';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss'; 
import { GetAllDiscount, SaveDiscount } from 'store/actions';
import { formatDateNew } from 'components/Formatting/FormatDate';

const Discount = () => {
    const dispatch = useDispatch();
    const vouchers = useSelector(state => state.discount.vouchers);
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        dispatch(GetAllDiscount());
    }, [dispatch]);
    
    useEffect(() => {
        document.title = 'Mã giảm giá';
    }, []);

    // save coupon
    const saveCoupon = (coupon) => {
        let userId = user? user.id :null;
        dispatch(SaveDiscount(
            {
                userId: userId,
                info: coupon.info,
                code: coupon.code,
                applyTo: coupon.applyTo,
                discount: coupon.discount,
                discountStart: coupon.discountStart,
                discountEnd: coupon.discountEnd,
                status: coupon.status,
            }
        ));

        console.log('save coupon', coupon, coupon.info, coupon.applyTo, coupon.discount, coupon.discountStart, coupon.discountEnd, coupon.status, userId);
    }

    return (
        <>
            <Header />
            <div className="container discount">
                <img src="https://cf.shopee.vn/file/c54c4af5703c67e263ff78b94e68c8a0" className='w-50' alt="" />
                <h5 className='titleDiscount'>Voucher có hạn, áp dụng cho người dùng và đơn hàng thoả mãn điều kiện chương trình</h5>
                <div className="list-discount">
                    {
                        vouchers?.length >0 ?
                        vouchers.map((item, index) => {
                            return (
                                <div className='voucher' key={index}>
                                    <div className='voucher-provider col-3'>
                                        <div className='vc-img'>
                                        </div>
                                        <span>Thời trang</span>
                                        <span className='ribbon'></span>
                                    </div>

                                    <div className='voucher-info d-flex justify-content-between col-9 py-2'>
                                        <div className='voucher-value'>
                                            <b className='text-primary'>{item.info}</b>
                                            <div>Đơn tốI thiểu {item.applyTo}k</div>
                                            <span className='small text-secondary'>HSD: {formatDateNew(item.discountEnd)}</span>
                                            <div className='small text-secondary'>Đã dùng {item.Used}/{item.Max}, 
                                            có liệu lực từ {formatDateNew(item.discountStart)}</div>
                                        </div>

                                        <div className='voucher-right text-right'>
                                            {
                                            !item.status === 'active' ?
                                                <button disabled className='btn btn-secondary'>
                                                    <span>Đã lưu</span>
                                                </button>
                                                :
                                                <button onClick={()=> saveCoupon(item)} className='btn btn-warning'>
                                                    <span>Lưu</span>
                                                </button>
                                            }
                                            <span className='text-primary'>Điều kiện</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : 
                        <h5>Không có mã giảm giá</h5>
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Discount;