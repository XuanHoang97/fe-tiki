import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { formatDate } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as actions from '../../../store/actions';

const VerifyOrder = (props) => { 
    const {isOpen, toggle, updateOrder} = props;
    const dispatch = useDispatch();
    const [id, setId] = useState('');
    const [code, setOrderCode] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [name, setName] = useState('');
    const [qty, setQty] = useState('');
    const [date, setDate] = useState('');
    const [dateDelivery, setDateDelivery] = useState('');
    const [delivery, setDelivery] = useState('');
    const [payment, setPayment] = useState('');
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const timeTrack = new Date().valueOf() + 7 * 60 * 60;
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
            setName(order.name);
            setQty(order.qty);
            setDate(order.date);
            setDateDelivery(order.dateDelivery);
            setDelivery(order.delivery);
            setPayment(order.payment);
            setEmail(order.email);
            setStatus(order.status);
        }
        dispatch(actions.getStatusOrder());
    }, [dispatch, props.updateOrder]);

    // update order
    const handleUpdateOrder = (data) => {
        props.verifyOrder({
            id: id,
            code: code,
            username: username,
            phone: phone,
            address: address,
            note: note,
            name: name,
            qty: qty,
            date: date,
            dateDelivery: dateDelivery,
            delivery: delivery,
            payment: payment,
            email: email,
            status: status,
            timeTrack: timeTrack
        });
        toggle();
    }
    
    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg">   
            <ModalHeader toggle={toggle}>Theo d??i ????n h??ng</ModalHeader>
            <ModalBody>
            <div>
                <div className='d-flex justify-content-center align-items-center mb-3'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '4%'}} alt='' />
                    <h4 className='ml-2'><small>????n h??ng:</small>
                        <b className={status ==='S1' ? 'text-warning ml-2' :'text-success ml-2'}>
                            {code} - 
                            <small>
                                {status ==='S1' ? ' Ch??? x??c nh???n' : ''}
                                {status ==='S2' ? ' ???? x??c nh???n' : ''}
                                {status ==='S3' ? ' ??ang giao h??ng' : ''}
                                {status ==='S4' ? ' ???? giao h??ng' : ''}
                            </small>
                        </b>
                    </h4>
                </div>

                <div className="d-flex justify-content-center bg-light p-3" style={{gap: '10px'}}>
                    <div className="customer bg-white col-5 py-3">
                        <h5 className=''>Th??ng tin kh??ch h??ng</h5>
                        <hr/>
                        <div className='d-flex'>
                            <span className='col-5 p-0'>Kh??ch h??ng:</span> 
                            <h6 className='text-primary  font-weight-bold'>{username}</h6>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>S??? ??i???n tho???i:</span> 
                            <span className=''>{phone}</span>
                        </div>

                        <div className='d-flex'>
                            <span className='col-5 p-0'>?????a ch???:</span> 
                            <span className=''>{address}</span>
                        </div>

                        <div className="d-flex">
                            <label className='col-5 p-0'>Email</label>
                            <span className=''>{email}</span>
                        </div>
                    </div>

                    <div className="order bg-white col-7 py-3">
                        <h5 className=''>Th??ng tin ????n h??ng</h5>
                        <hr/>
                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>S???n ph???m ?????t h??ng:</span> 
                            <span className='font-weight-bold'>{name}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>S??? l?????ng</span> 
                            <small>x{qty}</small>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ng??y ?????t h??ng:</span> 
                            <span>{formatDate(date)}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ng??y giao h??ng d??? ki???n: </span>
                            <span>{formatDate(dateDelivery)}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>H??nh th???c giao h??ng: </span> 
                            <span>{delivery}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ph?? giao h??ng: </span> 
                            <span>0 ??</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>H??nh th???c thanh to??n:</span> 
                            <span>{payment}</span>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>Ghi ch??:</span> 
                            <i className='text-secondary'>{note ? note : 'loading...'}</i>
                        </div>

                        <div className='d-flex mb-2'>
                            <span className='col-6 p-0'>T???ng ti???n:</span> 
                            <b className='text-danger'>{updateOrder ? numberFormat(updateOrder.sale * updateOrder.qty) : 0}</b>
                        </div>
                    </div>
                </div>
            </div>
            </ModalBody>
            <ModalFooter>
                <div className="d-flex mr-5 align-items-center">
                    <label className='col-5 pr-0'>Tr???ng th??i</label>
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
                    X??c nh???n
                </Button>
                <Button color="secondary" className="btn">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default VerifyOrder;
