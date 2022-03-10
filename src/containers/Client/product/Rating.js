import React from 'react';
import { formatDate } from 'components/Formatting/FormatDate';

const Rating = (props) => {
    const {detailProduct} = props;

    console.log('detailProduct', detailProduct);
    console.log('rating data', detailProduct.ratingData);

    return (
        <div className='vote'>
            <h5>Đánh giá - Nhận xét từ khách hàng </h5>
            <div className='star-overview'>
                <div className='col-3'>
                    <span className='text-primary mr-2' style={{fontSize: '27px'}}>4.8</span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star"></span>

                    <div className='small'>{detailProduct.ratingData ? detailProduct.ratingData.length : 0} nhận xét</div>
                </div>

                <div className='filter-vote col-9'>
                    <label>Lọc xem theo: </label>
                    <span>Mới nhất</span>
                    <span>Có hình ảnh</span>
                    <span>Đã mua hàng</span>
                    

                    <div>5<span className="fa fa-star"></span></div>
                    <div>4<span className="fa fa-star"></span></div>
                    <div>3<span className="fa fa-star"></span></div>
                    <div>2<span className="fa fa-star"></span></div>
                    <div>1<span className="fa fa-star"></span></div>
                </div>
            </div>
            <hr/>

            <div className='list-vote d-flex'>
                <div className='customer col-3'>
                    <img src="http://res.cloudinary.com/do7qmg6jr/image/upload/v1645867723/wp5vgklspxgam0pw9kii.jpg" className='w-25' alt="" />
                    <div>
                        <div>Hoang le</div>
                        <span className='text-secondary small'>Đã tham gia 1 tháng</span>
                    </div>
                </div>

                <div className='list-vote-customer col-9'>
                    <div className='title d-flex'>
                        <div>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star text-warning"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span>Cực kỳ hài lòng</span>
                    </div>
                    <span className='small text-success'>
                        <i className="fa fa-check-circle mr-2" aria-hidden="true"></i>
                        Đã mua hàng</span>
                    <div className='my-2'>
                        {
                            detailProduct && detailProduct.ratingData ?
                            detailProduct.ratingData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='d-flex'>
                                            <span className='small'>{item.comment}</span>
                                        </div>
                                        <span className='small text-secondary'>{formatDate(item.date)}</span>
                                    </div>
                                )
                            })
                            :
                            'loading...'
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Rating;