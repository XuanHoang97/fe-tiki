import { formatDate, formatDateNew } from 'components/Formatting/FormatDate';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';
import React from 'react';
import './style.scss';

const SendBill = (props) => { 
    const {isOpen, toggle, bill, sendBill} = props;
    const date = new Date();
    const timePayment = date.valueOf() + 7 * 60 * 60;
    const formatDatePayment = formatDateNew(timePayment);

    // date payment of bill
    const datePayment = formatDatePayment.split('/');
    const day = datePayment[0];
    const month = datePayment[1];
    const year = datePayment[2];

    // send Bill
    const Bill = () => {
        sendBill({
            userId: bill.userId,
            username: bill.username,
            address: bill.address,
            phone: bill.phone,
            email: 'vpkcnttdhtl@gmail.com',
            // email: bill.email,
            code: bill.code,
            name: bill.name,
            qty: bill.qty,
            sale: bill.sale,
            total: bill.sale * bill.qty,
            payment: bill.payment,
            status: bill.status,
            datePayment: timePayment,

            // bill send to email user
            datePaymentEmail: formatDate(timePayment),
            OrderValueEmail: numberFormat(bill.sale),
            totalEmail: numberFormat(bill.sale * bill.qty),
        })
        toggle();
    }

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg">   
            <ModalBody>
                <div className='logoBill'>
                    <img src="https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png" alt=""/>
                    <b>TikiShop</b>
                </div>
                <div className='bill-status'>GỬI HOÁ ĐƠN MUA HÀNG </div>
                <div className='datePayment'>
                    Ngày {day} Tháng {month} Năm {year}
                </div>

                <div className="bill-detail">
                    <div className="customer col-5">
                        <h6 className='title-info-bill'>THÔNG TIN KHÁCH HÀNG</h6><hr/>
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
                        <h6 className='title-info-bill'>CHI TIẾT ĐƠN HÀNG</h6>
                        <hr/>
                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Mã đơn hàng </span>
                            <b className='text-primary'> {bill && bill.code} </b>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Sản phẩm</span> 
                            <span>{bill && bill.name}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Số lượng</span> 
                            <small>x{bill && bill.qty}</small>
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
                            <span className='col-6 p-0'>Phí giao hàng: </span> 
                            <span>0 đ</span>
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
                            <b className='text-danger'>{numberFormat(bill && bill.sale * bill.qty)}</b>
                        </div>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="btn" onClick={() => Bill()}> Gửi hoá đơn</Button>
                <Button color="secondary" className="btn" onClick={toggle}>Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
export default SendBill;
