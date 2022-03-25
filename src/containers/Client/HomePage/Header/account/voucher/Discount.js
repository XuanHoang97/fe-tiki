import React, { useEffect, useState } from 'react';
import { GetAllDiscount, GetDiscountUser, SaveDiscount } from 'store/actions';
import { formatDateNew } from 'components/Formatting/FormatDate';
import Footer from 'containers/Client/HomePage/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../Header';
import './style.scss'; 

const Discount = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const vouchers = useSelector(state => state.discount.vouchers);
    const myDiscount = useSelector(state => state.auth.discounts);
    const [save, setSave] = useState([]);

    useEffect(() => {
        let userId = user? user.id :null;
        dispatch(GetDiscountUser(userId));
    }, [dispatch, user]);

    // compare status discount
    const compareDiscount = (discount) => {
        return myDiscount.some(item => item.discountId === discount.id);
    }

    // save coupon
    const saveCoupon = (coupon,i) => {
        let userId = user? user.id :null;
        dispatch(SaveDiscount({
            userId: userId,
            discountId: coupon.id,
            discountCode: coupon.discountCode,
            info: coupon.info,
            code: coupon.code,
            applyTo: coupon.applyTo,
            discount: coupon.discount,
            discountStart: coupon.discountStart,
            discountEnd: coupon.discountEnd,
            status: coupon.status,
        }));
        setSave([...save, i]);
    }

    useEffect(() => {
        dispatch(GetAllDiscount());
        document.title = 'Mã giảm giá';
    }, [dispatch]);

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
                                    <div className='vc-img'></div>
                                    <span>Thời trang</span>
                                    <span className='ribbon'></span>
                                </div>

                                <div className='voucher-info col-9'>
                                    <div className='voucher-value'>
                                        <b className='text-primary'>{item.info}</b>
                                        <div>Đơn tốI thiểu {item.applyTo}k</div>
                                        <span className='small text-secondary'>HSD: {formatDateNew(item.discountEnd)}, Đã dùng {item.Used}/{item.Max}</span>
                                        <div className='small text-danger'>Hiệu lực từ {formatDateNew(item.discountStart)}</div>
                                    </div>

                                    <div className='voucher-right'>
                                        <button 
                                            disabled={compareDiscount(item) ||save.includes(index)} 
                                            className={`${compareDiscount(item) ||save.includes(index) ? 'btn btn-secondary' : 'btn btn-warning'}`}
                                            
                                            onClick={() => saveCoupon(item,index)}>
                                            {
                                                (compareDiscount(item)||save.includes(index)) ? 
                                                'Đã lưu' : 'Lưu mã'
                                            }
                                        </button>
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