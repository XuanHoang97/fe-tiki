import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {useSelector} from 'react-redux';
import ReactStars from 'react-stars';
import React from 'react';

const ViewRating = (props) => {
    const { isOpen, toggle, visitRating} = props;
    const user = useSelector(state => state.auth.user);
    const rating = visitRating?.ratingOrder? visitRating.ratingOrder.rating : 0;
    const comment = visitRating?.ratingOrder? visitRating.ratingOrder.comment : 'Good';

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader toggle={toggle}>Đánh giá sản phẩm</ModalHeader>
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
                        <img src={user ? user.image : ''} alt="" />
                        <div>
                            <span>{user ? user.username : ''}</span>
                            <ReactStars
                            count={5}
                            value= {rating}
                            edit={false}
                            size={20}
                            color2={'#ffd700'} />
                            <span>{comment}</span>
                        </div>
                    </div>
                </div>
                <div className='btnRating'>
                    <button type="button" className="btn btn-default"> OK</button>
                </div>
            </ModalBody>
        </Modal>
    );
}
export default ViewRating;