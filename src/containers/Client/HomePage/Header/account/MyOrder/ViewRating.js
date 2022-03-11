import React  from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ReactStars from 'react-stars'

const ViewRating = (props) => {
    const {isOpen, toggle} = props;

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="md">   
            <ModalHeader toggle={toggle}>Đánh giá sản phẩm</ModalHeader>
            <ModalBody>
                view
            </ModalBody>
        </Modal>
    );
}
export default ViewRating;