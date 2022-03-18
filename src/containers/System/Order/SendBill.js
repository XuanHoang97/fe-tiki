import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { formatDateNew } from 'components/Formatting/FormatDate';
import { numberFormat } from 'components/Formatting/FormatNumber';

const SendBill = (props) => { 
    const {isOpen, toggle, bill, sendBill} = props;
    
    // send Bill
    const Bill = () => {
        sendBill({
            userId: bill.userId,
            code: bill.code,
            username: bill.username,
            name: bill.name,
            qty: bill.qty,
            total: bill.total,
            payment: bill.payment,
            status: bill.status,
        })
        toggle();
        // console.log('gui hoa don khach hang: ', bill.name, bill.code, bill.username, bill.name);
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg">   
            <ModalHeader toggle={toggle}>Gứi hoá đơn khách hàng</ModalHeader>
            <ModalBody>

            <div>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '4%'}} alt='' />
                    <h4 className='ml-2'><small>Đơn hàng:</small>
                        <b className='text-success'>
                            {bill && bill.code} - 
                            <small>
                                {bill && bill.status ==='S1' ? ' Chờ xác nhận' : ''}
                                {bill && bill.status ==='S2' ? ' Đã xác nhận' : ''}
                                {bill && bill.status ==='S3' ? ' Đang giao hàng' : ''}
                                {bill && bill.status ==='S4' ? ' Đã giao hàng' : ''}
                            </small>
                        </b>
                    </h4>
                </div>

                <div className="d-flex justify-content-center bg-light p-3" style={{gap: '10px'}}>
                    <div className="customer bg-white col-6 py-3">
                        <h5 className=''>Thông tin khách hàng</h5>
                        <hr/>
                        <div className='d-flex'>
                            <span className='col-5 p-0'>Tên khách hàng:</span> 
                            <h6 className='text-primary  font-weight-bold'>{bill && bill.username}</h6>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>Số điện thoại:</span> 
                            <span className=''>{bill && bill.phone}</span>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>Địa chỉ:</span> 
                            <span className=''>{bill && bill.address}</span>
                        </div>

                        <div className="d-flex">
                            <label className='col-5 p-0'>Email</label>
                            <span className=''>{bill && bill.email}</span>
                        </div>
                    </div>

                    <div className="order bg-white col-6 py-3">
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
                            <span className='col-6 p-0'>Ngày giao hàng dự kiến: </span>
                            <span>{formatDateNew(bill && bill.dateDelivery)}</span>
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
                            <i className='text-secondary'>{bill ? bill.note : 'loading...'}</i>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Tổng tiền:</span> 
                            <b className='text-danger'>{numberFormat(bill && bill.total)}</b>
                        </div>
                    </div>
                </div>
            </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="btn" onClick={() => Bill()} >
                    Gửi hoá đơn
                </Button>
                <Button color="secondary" className="btn">Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
export default SendBill;
