import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './../../../store/actions';

const ModalVerifyOrder = (props) => { 
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
            <ModalHeader toggle={toggle}>Xác nhận đơn hàng</ModalHeader>
            <ModalBody>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '5%'}} alt='' />
                    <h4 className='ml-2'><small>Đơn hàng:</small>
                        <b className={status ==='S1' ? 'text-warning ml-2' :'text-success ml-2'}>
                            {code} - 
                            <small>
                                {status ==='S1' ? 'Chưa xác nhận' : ''}
                                {status ==='S2' ? 'Đã xác nhận' : ''}
                                {status ==='S3' ? 'Đang giao hàng' : ''}
                                {status ==='S4' ? 'Đã giao hàng' : ''}
                            </small>
                        </b>
                    </h4>
                </div>
                <hr/>

                <div className="">
                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tên khách hàng:</span> 
                        <h6 className='text-primary col-6 font-weight-bold'>{username}</h6>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số điện thoại:</span> 
                        <span className='col-6'>{phone}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Địa chỉ:</span> 
                        <span className='col-6'>{address}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Sản phẩm đặt hàng:</span> 
                        <span className='col-4 font-weight-bold'>{name}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số lượng</span> 
                        <small className='col-4'>x{qty}</small>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ngày đặt hàng:</span> 
                        <span className='col-6'>{date}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ngày giao hàng dự kiến: </span>
                        <input className='ml-3' type="date" />
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức giao hàng: </span> 
                        <b className='col-6'>{delivery}</b>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức thanh toán:</span> 
                        <span className='col-6'>{payment}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ghi chú:</span> 
                        <i className='col-6 text-secondary'>{note ? note : 'loading...'}</i>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tổng tiền:</span> 
                        <b className='text-danger col-6'>{numberFormat(total)}</b>
                    </div>
                </div>
                <hr/>

                <div className="d-flex">
                    <div className="form-group col-md-3">
                        <label>Trạng thái</label>
                        <select className="form-control" 
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

                    <div className="form-group col-md-4">
                        <label>Email</label>
                        <input type="input" value={email} className="form-control" placeholder='Email nhận hoá đơn..'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className='upload-file d-flex col-5 p-0'>
                        <div className="form-group col-5 p-0">
                            <label>Gửi hoá đơn</label>
                            <input id="previewImg" type="file" hidden
                                readOnly
                            />

                            <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload mr-2"></i>Tải file</label>  
                        </div>

                        <div className="preview-image col-7 border" 
                        >
                            <div 
                                className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div> 
                            : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="btn" onClick={() => handleUpdateOrder()} >
                    Xác nhận
                </Button>
                <Button color="secondary" className="btn">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalVerifyOrder;
