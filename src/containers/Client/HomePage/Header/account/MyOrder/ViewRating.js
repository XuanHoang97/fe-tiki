import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {useSelector} from 'react-redux';
import ReactStars from 'react-stars';
import React from 'react';

const ViewRating = (props) => {
    const { isOpen, toggle, ratingOrder, listOrder} = props;
    const user = useSelector(state => state.auth.user);

    console.log('rating order:', ratingOrder?.ratingOrder > 0 ? ratingOrder.ratingOrder.rating : 'null');
    console.log('rating:', listOrder);

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader toggle={toggle}>Đánh giá sản phẩm</ModalHeader>
            <ModalBody>
                <div className='rating'>
                    <div className='rating-item'
                        onClick={() => window.open(`/products/${ratingOrder.productId}`, "_blank")}
                    >
                        <div className='rating-product col-10'>
                            <img src={ratingOrder.image} alt="" />
                            <b className='ml-3'>{ratingOrder.name}</b>
                        </div>
                    </div><hr/>

                    <div className='ratingUser'>
                        <img src={user ? user.image : ''} alt="" />
                        <div>
                            <span>{user ? user.username : ''}</span>
                            <ReactStars
                            count={5}
                            value= {parseInt(5)}
                            edit={false}
                            size={20}
                            color2={'#ffd700'} />
                            <span>Good</span>
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