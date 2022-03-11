import React from 'react';
import { formatDate , formatDateNew} from 'components/Formatting/FormatDate';

const Rating = (props) => {
    const {detailProduct} = props;

    return (
        <div className='vote'>
            <h5>Đánh giá - Nhận xét từ khách hàng </h5>
            <div className='star-overview'>
                <div className='col-3'>
                    <span className='text-primary mr-2' style={{fontSize: '27px'}}>4.5</span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star text-warning"></span>
                    <span className="fa fa-star"></span>

                    <div className='small'>{detailProduct && detailProduct.ratingData ? detailProduct.ratingData.length : 0} nhận xét</div>
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

            {
                detailProduct && detailProduct.ratingData &&
                detailProduct.ratingData.map((item, index) => {
                    return (
                        <div className='list-vote d-flex border-bottom py-3' key={index}>
                            <div className='customer col-3'>
                                <img src={item.avatar} alt="" />
                                <div>
                                    <div className='font-weight-bold'>{item.username}</div>
                                    <span className='text-secondary small mr-1'>Tham gia từ</span>
                                    <small>{formatDateNew(item.joinDate) }</small>
                                </div>
                            </div>

                            <div className='list-vote-customer col-9'>
                                <div className='title d-flex'>
                                    {item.rating === 5 &&
                                    <div className='star'>
                                        <span>
                                            {[...Array(5)].map((e, i) => {
                                                return (
                                                    <span key={i} className='fa fa-star text-warning'></span>
                                                )
                                            })}
                                        </span>
                                        <span>Cực kỳ hài lòng</span>
                                    </div>}

                                    {item.rating === 4 &&
                                    <div className='star'>
                                        <span>
                                            {[...Array(4)].map((e, i) => {
                                                return (
                                                    <span key={i} className='fa fa-star text-warning'></span>
                                                )
                                            })}
                                            <span className='fa fa-star'></span>
                                        </span>
                                        <span>Hài lòng</span>
                                    </div>}

                                    {item.rating === 3 &&
                                    <div className='star'>
                                        <span>
                                            {[...Array(3)].map((e, i) => {
                                                return (
                                                    <span key={i} className='fa fa-star text-warning'></span>
                                                )
                                            })}
                                            <span className='fa fa-star'></span>
                                        </span>
                                        <span>Bình thường</span>
                                    </div>}

                                    {item.rating === 2 &&
                                    <div className='star'>
                                        <span>
                                            {[...Array(2)].map((e, i) => {
                                                return (
                                                    <span key={i} className='fa fa-star text-warning'></span>
                                                )
                                            })}
                                            <span className='fa fa-star'></span>
                                        </span>
                                        <span>Không hài lòng</span>
                                    </div>}

                                    {item.rating === 1 &&
                                    <div className='star'>
                                        <span>
                                            {[...Array(1)].map((e, i) => {
                                                return (
                                                    <span key={i} className='fa fa-star text-warning'></span>
                                                )
                                            })}
                                            <span className='fa fa-star'></span>
                                        </span>
                                        <span>Rất tệ</span>
                                    </div>}
                                </div>
                                <span className='small text-success'>
                                    <i className="fa fa-check-circle mr-2" aria-hidden="true"></i>
                                    Đã mua hàng
                                </span>
                                <div className='my-2'>
                                    <div className='d-flex'>
                                        <span>{item.comment}</span>
                                    </div>
                                    <span className='small text-secondary'>{formatDate(item.date)}</span>
                                </div>

                                <div className='reply'>
                                    <button type="button" className="btn btn-outline-primary font-weight-normal">Hữu ích</button>
                                    <span>Bình luận</span>
                                </div>
                            </div>
                        </div>
                    )
                })
                
            }

            {
                detailProduct && detailProduct.ratingData && detailProduct.ratingData.length === 0 &&
                <div className='text-center'>Chưa có nhận xét nào</div>
            }
        </div>
    );
}
export default Rating;