import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import Rating from 'react-rating';

const RatingProduct = (props) => {
    const {isOpen, toggle} = props;
    return (
        <Modal  isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader toggle={toggle}>Đánh giá sản phẩm</ModalHeader>
            <ModalBody>
                <div className='rating'>
                    <div className='rating-item d-flex align-items-center'>
                        <img src="http://res.cloudinary.com/do7qmg6jr/image/upload/v1645756747/nwa9yfy5csmnawsowdgd.jpg" style={{width: '15%'}} alt="" />
                        <b className='ml-3'>Nokia 1280 version 2022</b>
                    </div><hr/>

                    <div className='rating d-flex'>
                        <span className='col-3'>Đánh giá</span>
                        <Rating 
                            fullSymbol="fa fa-star text-warning"
                            emptySymbol="fa fa-star "
                            onChange={(value) => console.log(value)}
                        />
                    </div>

                    <div className='cmt d-flex my-3'>
                        <label className='col-3' htmlFor="">Bình luận</label>
                        <textarea className="form-control" rows="3">
                            Sản phẩm rất chất lượng...
                        </textarea>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button type="button" className="btn btn-success">OK</button>
                </div>
            </ModalBody>
        </Modal>
    );
}

export default RatingProduct;