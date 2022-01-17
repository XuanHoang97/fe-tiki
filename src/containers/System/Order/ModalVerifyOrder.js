import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from 'store/actions';

const ModalVerifyOrder = (props) => {
    const toggle =()=>{
        props.toggle();
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            size="lg"
        >   
            <ModalHeader toggle={()=>toggle()}>Xác nhận đơn hàng</ModalHeader>
            <ModalBody>
            <div>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yFntpSafsNXW2rPoGfpBqshjjmEfG-Yr_dj8Pw8cntTdbHPNB3JDN9MBV9yo9jFtO1g&usqp=CAU" style={{width: '5%'}} alt='' />
                    <h4 className='ml-2'><small>Đơn hàng:</small><b className='text-warning ml-2'>1dx45ab7d <small>(Chưa xác nhận)</small></b></h4>
                </div>
                <hr/>

                <div className="">
                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tên khách hàng:</span> 
                        <h6 className='text-primary col-6 font-weight-bold'>Lê Xuân Hoàng</h6>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số điện thoại:</span> 
                        <span className='col-6'>0123456789</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Địa chỉ:</span> 
                        <span className='col-6'>Ngõ 123, đường 456, Đội Cấn, Ba Đình, Hà Nội</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Sản phẩm đặt hàng:</span> 
                        <span className='col-4 font-weight-bold'>Vertu 2022 <small>(v.128GB/pro)</small></span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số lượng</span> 
                        <small className='col-4'>x3</small>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ngày đặt hàng:</span> 
                        <span className='col-6'>13/01/2022</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ngày giao hàng dự kiến: </span> 
                        <span className='col-6'>20/01/2022</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức giao hàng: </span> 
                        <b className='col-6'>Nhận hàng trực tiếp</b>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức thanh toán:</span> 
                        <span className='col-6'>Tiền mặt</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Ghi chú:</span> 
                        <i className='col-6 text-secondary'>Kiểm tra hàng trước khi nhận</i>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tổng tiền:</span> 
                        <b className='text-danger col-6'>1.250.000.000 VND 
                            <i className='text-secondary small ml-3'>(Một tỷ hai trăm năm mươi triệu đồng chẵn)</i>
                        </b>
                    </div>
                </div>
                <hr/>

                <div className="d-flex">
                    <div className="form-group col-md-3">
                        <label>Trạng thái</label>
                        <select className="form-control"                       
                        >  
                            <option value="">Chưa xác nhận</option>                                                                               
                            <option value="">Xác nhận</option>                                                                               
                        </select>
                    </div> 

                    <div className="form-group col-md-4">
                        <label>Email</label>
                        <input type="input" value="" className="form-control" placeholder='Email nhận hoá đơn..'
                        />
                    </div>
                    
                    <div className='upload-file d-flex col-5 p-0'>
                        <div className="form-group col-5 p-0">
                            <label>Gửi hoá đơn</label>
                            <input id="previewImg" type="file" hidden
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
