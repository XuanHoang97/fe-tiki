import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import { formatDate } from 'components/Formatting/FormatDate';

const VerifyOrder = (props) => { 
    const {isOpen, toggle} = props;
    const [id, setId] = useState('');
    const [code, setOrderCode] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [total, setTotal] = useState('');
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [date, setDate] = useState('');
    const [delivery, setDelivery] = useState('');
    const [payment, setPayment] = useState('');
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const statusOrder = useSelector(state => state.client.statusOrder);

    // fill data order
    useEffect (() => {
        let order = props.updateOrder;
        if(order) {
            setId(order.id);
            setOrderCode(order.code);
            setUsername(order.username);
            setPhone(order.phone);
            setAddress(order.address);
            setNote(order.note);
            setTotal(order.total);
            setName(order.name);
            setQty(order.qty);
            setDate(order.date);
            setDelivery(order.delivery);
            setPayment(order.payment);
            setEmail(order.email);
            setStatus(order.status);
        }
        dispatch(actions.getStatusOrder());
    }, [dispatch, props.updateOrder]);

    // update order
    const handleUpdateOrder = (data) => {
        props.UpdateOrder({
            id: id,
            code: code,
            username: username,
            phone: phone,
            address: address,
            note: note,
            total: total,
            name: name,
            qty: qty,
            date: date,
            delivery: delivery,
            payment: payment,
            email: email,
            status: status
        });
        toggle();
    }
    
    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg">   
            <ModalHeader toggle={toggle}>Theo dõi đơn hàng</ModalHeader>
            <ModalBody>
            <div>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '4%'}} alt='' />
                    <h4 className='ml-2'><small>Đơn hàng:</small>
                        <b className={status ==='S1' ? 'text-warning ml-2' :'text-success ml-2'}>
                            {code} - 
                            <small>
                                {status ==='S1' ? ' Chờ xác nhận' : ''}
                                {status ==='S2' ? ' Đã xác nhận' : ''}
                                {status ==='S3' ? ' Đang giao hàng' : ''}
                                {status ==='S4' ? ' Đã giao hàng' : ''}
                            </small>
                        </b>
                    </h4>
                </div>

                <div className="d-flex justify-content-center bg-light p-3" style={{gap: '10px'}}>
                    <div className="customer bg-white col-6 py-3">
                        <span className=''>Thông tin khách hàng</span>
                        <hr/>
                        <div className='d-flex'>
                            <span className='col-5 p-0'>Tên khách hàng:</span> 
                            <h6 className='text-primary  font-weight-bold'>{username}</h6>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>Số điện thoại:</span> 
                            <span className=''>{phone}</span>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>Địa chỉ:</span> 
                            <span className=''>{address}</span>
                        </div>

                        <div className="d-flex">
                            <label className='col-5 p-0'>Email</label>
                            <span className=''>{email}</span>
                        </div>
                    </div>

                    <div className="order bg-white col-6 py-3">
                        <span className=''>Thông tin đơn hàng</span>
                        <hr/>
                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Sản phẩm đặt hàng:</span> 
                            <span className='font-weight-bold'>{name}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Số lượng</span> 
                            <small>x{qty}</small>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ngày đặt hàng:</span> 
                            <span>{formatDate(date)}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ngày giao hàng dự kiến: </span>
                            <input type="date" />
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Hình thức giao hàng: </span> 
                            <b>{delivery}</b>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Hình thức thanh toán:</span> 
                            <span>{payment}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ghi chú:</span> 
                            <i className='text-secondary'>{note ? note : 'loading...'}</i>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Tổng tiền:</span> 
                            <b className='text-danger'>{numberFormat(total)}</b>
                        </div>
                    </div>
                </div>
            </div>
            </ModalBody>
            <ModalFooter>
                <div className="d-flex mr-5 align-items-center">
                    <label className='col-5 pr-0'>Trạng thái</label>
                    <select className="form-control pl-0" 
                        value={status}  
                        onChange={(e) => setStatus(e.target.value)}                   
                    >  
                        {
                            statusOrder.slice(1,6).map(item => (
                                <option key={item.id} value={item.keyMap}>{item.valueVi}</option>
                            ))
                        }                                                                       
                    </select>
                </div> 
                <Button color="primary" className="btn" onClick={() => handleUpdateOrder()} >
                    Xác nhận
                </Button>
                <Button color="secondary" className="btn">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default VerifyOrder;
