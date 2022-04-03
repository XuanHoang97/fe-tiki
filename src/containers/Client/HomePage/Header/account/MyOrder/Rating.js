import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {FilterMyOrder} from 'store/actions/clientAction';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { rate } from 'store/actions';
import ReactStars from 'react-stars';

const RatingProduct = (props) => {
    const dispatch = useDispatch();
    const point = 5000;
    const {isOpen, toggle, currentOrder} = props;
    const [rating, setRating] = useState(0);
    const [satisfactionLevel, setSatisfactionLevel] = useState('');
    const [comment, setComment] = useState('');
    const [imgProduct, setImgProduct] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const date = new Date();
    const timeTrack = date.valueOf() + 7 * 60 * 60;
    const user = useSelector(state => state.auth.user);

    // fill info order
    useEffect (() => {
        let order = currentOrder;
        if(order) {
            setImgProduct(order.image);
            setNameProduct(order.name);
        }
    }, [dispatch, currentOrder]);

    // level useful
    useEffect (() => {
        switch (true) {
            case rating > 4 && rating <= 5:
                setSatisfactionLevel('Cực kỳ hài lòng');
                break;
            case rating > 3 && rating <= 4:
                setSatisfactionLevel('Hài lòng');
                break;
            case rating >= 2 && rating <= 3:
                setSatisfactionLevel('Bình thường');
                break;
            case rating > 1 && rating <= 2:
                setSatisfactionLevel('Không hài lòng');
                break;
            case rating >= 0 && rating <= 1:
                setSatisfactionLevel('Rất tệ');
                break;
            default:
                setSatisfactionLevel('');
                break;
        }
    }, [rating]);
    
    // Rating product -update order - add notify -add point
    const ratingProduct = () => {
        const userId = user ? user.id : null;
        dispatch(rate({
            userId: userId,
            orderId: currentOrder.id,
            productId: currentOrder.productId,
            point: point,
            rating: rating,
            satisfactionLevel: satisfactionLevel,
            comment: comment,
            timeTrack: timeTrack
        }));
        toggle();
        setTimeout(() => {
            dispatch(FilterMyOrder(userId, 'S4'));
        }, 1000);
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader toggle={toggle}>Đánh giá sản phẩm</ModalHeader>
            <ModalBody>
                <div className='rating'>
                    <div className='rating-item'>
                        <div className='rating-product col-10'>
                            <img src={imgProduct} alt="" />
                            <b className='ml-3'>{nameProduct}</b>
                        </div>
                        <span className='text-warning'>+ {point} xu</span>
                    </div><hr/>

                    <div className='ratingUser'>
                        <span className='col-3'>Đánh giá</span>
                        <ReactStars
                        count={5}
                        value={rating}
                        onChange= {(newRating) => setRating(newRating)}
                        size={24}
                        color2={'#ffd700'} />
                        <span>{satisfactionLevel}</span>
                    </div>

                    <div className='cmt d-flex my-3'>
                        <label className='col-3' htmlFor="">Bình luận</label>
                        <textarea className="form-control" rows="3"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        >
                        </textarea>
                    </div>
                </div>
                <div className='btnRating'>
                    <button onClick={() => ratingProduct() }
                        type="button" className="btn btn-success">OK 
                    </button>
                </div>
            </ModalBody>
        </Modal>
    );
}
export default RatingProduct;