import { formatDate } from 'components/Formatting/FormatDate';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {useSelector} from 'react-redux';
import ReactStars from 'react-stars';
import React from 'react';

const ViewRating = (props) => {
    const { isOpen, toggle, visitRating} = props;
    const user = useSelector(state => state.auth.user);
    const ratingOrder=visitRating?.ratingOrder? visitRating.ratingOrder : '';
    const rating = ratingOrder.rating;
    const satisfactionLevel = ratingOrder.satisfactionLevel;
    const comment = ratingOrder.comment;
    const avatar = ratingOrder.avatar;

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader>Đánh giá sản phẩm</ModalHeader>
            <ModalBody>
                <div className='rating'>
                    <div className='rating-item'
                        onClick={() => window.open(`/products/${visitRating.productId}`, "_blank")}
                    >
                        <div className='rating-product col-10'>
                            <img src={visitRating.image} alt="" />
                            <b className='ml-3'>{visitRating.name}</b>
                        </div>
                    </div><hr/>

                    <div className='ratingUser'>
                        <img src={avatar?avatar :''} alt="avatar" />
                        <div>
                            <b>{user ? user.username : ''}</b>
                            <div className='viewRating'>
                                <ReactStars
                                count={5}
                                value= {rating}
                                edit={false}
                                size={20}
                                color2={'#ffd700'} />
                                <span>{satisfactionLevel}</span>
                            </div>
                            <span>{comment}</span>
                            <div className='small font-italic'>{formatDate(ratingOrder.date)}</div>
                        </div>
                    </div>
                </div>
                <div className='btnRating'>
                    <button 
                    onClick={toggle} 
                    type="button" className="btn btn-default"> OK</button>
                </div>
            </ModalBody>
        </Modal>
    );
}
export default ViewRating;