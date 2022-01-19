import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from 'store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';

const ModalVerifyOrder = ({isOpen, toggle, detailOrder}) => {

    console.log('chi tiet don hang:', detailOrder);

    return (
        <Modal 
            isOpen={isOpen} 
            toggle={toggle} 
            size="lg"
        >   
            <ModalHeader toggle={toggle}>Xác nhận đơn hàng</ModalHeader>
            <ModalBody>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '5%'}} alt='' />
                    <h4 className='ml-2'><small>Đơn hàng:</small>
                        <b className={detailOrder.status ==='S1' ? 'text-warning ml-2' :'text-success ml-2'}>
                            {detailOrder.orderCode} 
                            <small>
                                ({detailOrder.status ==='S1' ? 'Chưa xác nhận' :'Đã xác nhận'})
                            </small>
                        </b>
                    </h4>
                </div>
                <hr/>

                <div className="">
                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tên khách hàng:</span> 
                        <h6 className='text-primary col-6 font-weight-bold'>{detailOrder.username}</h6>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số điện thoại:</span> 
                        <span className='col-6'>{detailOrder.phone}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Địa chỉ:</span> 
                        <span className='col-6'>{detailOrder.address}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Sản phẩm đặt hàng:</span> 
                        <span className='col-4 font-weight-bold'>{detailOrder.Name}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số lượng</span> 
                        <small className='col-4'>x{detailOrder.qty}</small>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ngày đặt hàng:</span> 
                        <span className='col-6'>{detailOrder.date}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ngày giao hàng dự kiến: </span>
                        <input className='ml-3' type="date" />
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức giao hàng: </span> 
                        <b className='col-6'>{detailOrder.delivery}</b>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức thanh toán:</span> 
                        <span className='col-6'>{detailOrder.payment}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ghi chú:</span> 
                        <i className='col-6 text-secondary'>{detailOrder.note ? detailOrder.note : 'loading...'}</i>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tổng tiền:</span> 
                        <b className='text-danger col-6'>{numberFormat(detailOrder.total)}</b>
                    </div>
                </div>
                <hr/>

                <div className="d-flex">
                    <div className="form-group col-md-3">
                        <label>Trạng thái</label>
                        <select className="form-control" 
                            readOnly={true}                      
                        >  
                            <option value="">Chưa xác nhận</option>                                                                               
                            <option value="">Xác nhận</option>                                                                               
                            <option value="">Đang giao hàng</option>                                                                               
                            <option value="">Đã giao hàng</option>                                                                               
                        </select>
                    </div> 

                    <div className="form-group col-md-4">
                        <label>Email</label>
                        <input type="input" value={detailOrder.email} className="form-control" placeholder='Email nhận hoá đơn..'
                            readOnly
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
                            // style={{backgroundImage: `url(${previewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                        >
                            {/* {
                            previewImg ? */}
                            <div 
                                // onClick={() =>removeImg()} 
                                className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div> 
                            : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                            {/* } */}
                        </div>
                    </div>


                </div>
            </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="px-3">
                    Xác nhận
                </Button>
                <Button color="secondary" className="px-3">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalVerifyOrder;
