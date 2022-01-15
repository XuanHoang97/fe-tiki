import { orderBy } from 'lodash';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { path } from 'utils';

const ModalOrderNow = (props) => {

    const toggle =()=>{
        props.toggle();
    }

    // add new category
    const order=()=>{
        toggle();
    }
    
    return (
        <Modal 
            isOpen={props.show} 
            toggle={()=>toggle()} 
            size="lg"
        >
            <ModalHeader toggle={()=>toggle()}>Có 1 sản phẩm trong giỏ hàng</ModalHeader>
            <ModalBody>
            <div>
                <div className="my-3">
                    <div className="product_info d-flex">
                        <div className="product_image d-flex col-6">
                            <img src="http://res.cloudinary.com/do7qmg6jr/image/upload/v1641951665/xaqcd2hpeonyce6ele6m.jpg" style={{width: '20%'}} alt="" />
                            <h5 className='font-weight-bold ml-3'>Vertu 2022 </h5>
                        </div>

                        <div className="product_price col-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button className="btn btn-light btn-sm px-2"><i className="fas fa-minus small" /></button>
                                </div>

                                <input type="text" value="1" className="form-control text-center" style={{ height: '31px' }}
                                />

                                <div className="input-group-append">
                                    <button className="btn btn-light btn-sm px-2"><i className="fas fa-plus small" /></button>
                                </div>
                            </div>       
                        </div>

                        <div className='col-3 text-right'>
                            <div className='text-danger'>9.240.000 đ</div>
                            <del className='text-secondary'>9.734.000 đ</del>
                        </div>
                    </div>
                    <hr />

                    <div className="totalPay d-flex">
                        <div className="form-group col-6">
                            <label>Mã giảm giá</label>
                            <div className='d-flex'>
                                <input type="text" className="form-control col-9" style={{ height: '31px' }} />
                                <button type="button" className="btn btn-primary col-3 px-2">Áp dụng</button>
                            </div>
                        </div>
                        
                        <div className='col-6'>
                            <div className='d-flex justify-content-between'>
                                <span>Tổng tiền:</span>
                                <span>9.240.000 đ</span>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <span>Giảm:</span>
                                <span className="text-secondary">- 240.000 đ</span>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <span>Cần thanh toán:</span>
                                <span className="text-danger font-weight-bold">9.240.000 đ</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="order_info">
                    <div className="gender d-flex px-3">
                        <div className="radio mr-4">
                            <label><input type="radio" name="gender" checked />Anh</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="gender" />Chị</label>
                        </div>
                    </div>

                    <div className='info d-flex'>
                        <div className="form-group col-6">
                            <input type="text" className="form-control" placeholder="Nhập họ tên..." />
                            <input type="text" className="form-control my-2" placeholder="Nhập số điện thoại..." />
                            <input type="text" className="form-control" placeholder="Nhập Email..." />
                            <input type="text" className="form-control mt-2" placeholder="Nhập địa chỉ..." />
                        </div>

                        <div className="form-group col-6">
                            <label>Hình thức nhận hàng</label>
                            <div className="delivery d-flex mb-4">
                                <div className="radio mr-4">
                                    <label><input type="radio" name="delivery" checked />Giao hàng tận nơi</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="delivery" />Nhận tại cửa hàng</label>
                                </div>
                            </div>

                            <label>Hình thức thanh toán</label>
                            <div className="payment d-flex">
                                <div className="radio">
                                    <label><input type="radio" name="payment" checked />Tiền mặt</label>
                                </div>
                                <div className="radio mx-4">
                                    <label><input type="radio" name="payment" />Thẻ ATM</label>
                                </div>

                                <div className="radio mr-4">
                                    <label><input type="radio" name="payment" />MoMo</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="payment" />Thẻ quốc tế</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </ModalBody>

            <ModalFooter>
                <Button color="success" className="px-4 font-weight-normal" onClick={()=>order()}>
                    HOÀN TẤT ĐẶT HÀNG
                </Button>
                <Button color="secondary" className="px-4 font-weight-normal">HUỶ ĐƠN</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ModalOrderNow;
