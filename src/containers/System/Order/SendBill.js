import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { formatDateNew } from 'components/Formatting/FormatDate';
import { numberFormat } from 'components/Formatting/FormatNumber';
import React from 'react';
import './style.scss';

const SendBill = (props) => { 
    const {isOpen, toggle, bill, sendBill} = props;
    const date = new Date();
    const timePayment = date.valueOf() + 7 * 60 * 60;

    // send Bill
    const Bill = () => {
        sendBill({
            userId: bill.userId,
            address: bill.address,
            phone: bill.phone,
            code: bill.code,
            username: bill.username,
            name: bill.name,
            qty: bill.qty,
            payment: bill.payment,
            status: bill.status,
            datePayment: timePayment,
        })
        toggle();
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg">   
            <ModalHeader toggle={toggle}>Gứi hoá đơn</ModalHeader>
            <ModalBody>
                <div className='bill-status'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '4%'}} alt='' />
                    <h4 className='ml-2'><small>Đơn hàng:</small>
                        <b className='text-success'>
                            {bill && bill.code} - 
                            <small>
                                {bill?.status ==='S1' ? ' Chờ xác nhận' : ''}
                                {bill?.status ==='S2' ? ' Đã xác nhận' : ''}
                                {bill?.status ==='S3' ? ' Đang giao hàng' : ''}
                                {bill?.status ==='S4' ? ' Đã giao hàng' : ''}
                            </small>
                        </b>
                    </h4>
                </div>

                <div className="bill-detail">
                    <div className="customer col-5">
                        <h5 className=''>Thông tin khách hàng</h5>
                        <hr/>
                        <div className='d-flex'>
                            <span className='col-5 p-0'>Tên khách hàng:</span> 
                            <h6 className='text-primary font-weight-bold'>{bill && bill.username}</h6>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>Số điện thoại:</span> 
                            <span>{bill && bill.phone}</span>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>Địa chỉ:</span> 
                            <span>{bill && bill.address}</span>
                        </div>

                        <div className="d-flex">
                            <label className='col-5 p-0'>Email: </label>
                            <span>{bill && bill.email}</span>
                        </div>
                    </div>

                    <div className="order-info col-7">
                        <h5 className=''>Thông tin đơn hàng</h5>
                        <hr/>
                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Sản phẩm</span> 
                            <span className='font-weight-bold'>{bill && bill.name}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Số lượng</span> 
                            <small>{bill && bill.qty}</small>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ngày đặt hàng:</span> 
                            <span>{formatDateNew(bill && bill.date)}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Đã giao ngày: </span>
                            <span>{formatDateNew(bill && bill.timeTrack)}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Hình thức giao hàng: </span> 
                            <span>{bill && bill.delivery}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Hình thức thanh toán:</span> 
                            <span>{bill && bill.payment}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ghi chú:</span> 
                            <i className='text-secondary'>{bill?.note? bill.note : 'loading...'}</i>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Tổng tiền:</span> 
                            <b className='text-danger'>{numberFormat(bill && bill.price * bill.qty)}</b>
                        </div>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <div className="d-flex form-group col-md-4">
                    <label>Hoá đơn</label>
                    <input id="previewImg" type="file" hidden />

                    <label htmlFor="previewImg" className="btn btn-warning ml-2"><i className="fas fa-upload"></i> Tải hoá đơn</label>      
                </div>

                <Button color="primary" className="btn" onClick={() => Bill()}> Gửi hoá đơn</Button>
                <Button color="secondary" className="btn">Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
export default SendBill;
