import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useDispatch } from 'react-redux';
import ReactStars from 'react-stars'
import { rate } from 'store/actions';

const RatingProduct = (props) => {
    const {isOpen, toggle, currentOrder} = props;
    const [point, setPoint] = useState(5000);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('good');
    const [imgProduct, setImgProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const dispatch = useDispatch();

    
    // fil info order
    useEffect (() => {
        let order = currentOrder;
        if(order) {
            setImgProduct(order.image);
            setNameProduct(order.name);
        }
    }, [dispatch, currentOrder]);
    
    console.log('currentOrder', currentOrder);

    
    // Rating product -update order - add notify -add point
    const ratingProduct = () => {
        dispatch(rate(
            {
                userId: currentOrder.userId,
                orderId: currentOrder.id,
                productId: currentOrder.productId,
                point: point,
                rating: rating,
                comment: comment
            })
            );
            toggle();
        }
        // console.log('currentOrder', currentOrder && currentOrder.userId, currentOrder.id, currentOrder.productId);
        // console.log('rating', point, rating, comment);

    return (
        <Modal  isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader toggle={toggle}>Đánh giá sản phẩm</ModalHeader>
            <ModalBody>
                <div className='rating'>
                    <div className='rating-item d-flex align-items-center justify-content-between'>
                        <div className='col-10'>
                            <img src={imgProduct} style={{width: '15%'}} alt="" />
                            <b className='ml-3'>{nameProduct}</b>
                        </div>
                        <span className='text-warning'>+ {point} xu</span>
                    </div><hr/>

                    <div className='rating d-flex'>
                        <span className='col-3'>Đánh giá</span>
                        <ReactStars
                        count={5}
                        value={rating}
                        onChange= {(newRating) => setRating(newRating)}
                        size={24}
                        color2={'#ffd700'} />
                    </div>

                    <div className='cmt d-flex my-3'>
                        <label className='col-3' htmlFor="">Bình luận</label>
                        <textarea className="form-control" rows="3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                            Sản phẩm rất chất lượng...
                        </textarea>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button onClick={() => ratingProduct() }
                        type="button" className="btn btn-success">
                        OK
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
}
export default RatingProduct;