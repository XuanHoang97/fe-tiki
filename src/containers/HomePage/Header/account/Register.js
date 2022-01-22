import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const RegisterAccount = (props) => {
    const {show, toggle} = props;

    const toggleModal = () => {
        props.toggle();
    }

    return (
        <div>
            <Modal isOpen={show} toggle={()=>toggleModal()} size="lg">   
                <ModalHeader toggle={()=>toggleModal()} >Có Tiki - mua sắm Mê li</ModalHeader>
                <ModalBody>
                    <div className="row m-0 p-0">
                        <div className="col-md-8 p-3">
                            <div className="form-group">
                                <label htmlFor="">Tạo nhanh tài khoản</label>
                                <input type="text" className="form-control" placeholder="Nhập email..." />
                                <input type="text" className="form-control my-3" placeholder="Nhập họ và tên..." />

                                <div className="form-group password" style={{position: 'relative', cursor: 'pointer'}}>
                                    <input type="text" className="form-control" placeholder="Nhập mật khẩu" />
                                    <span>
                                        <i className="far fa-eye text-secondary" style={{position: 'absolute', top: '10px', right: '10px'}}></i>      
                                    </span>
                                </div>

                                <button type="button" name="" id="" className="btn btn-success mt-3 mb-1 btn-smd btn-block">Đăng ký</button>
                                <span className='text-primary small text-end'>Đã có tài khoản ?</span>
                                
                                <div className="text-center mt-3 mb-2 small">Hoặc Tiếp tục bằng</div>
                                <div className="login-social d-flex justify-content-center">
                                    <div className="item-social" style={{width: '10%'}}>
                                        <a href=""><img className="w-75" src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="" /></a>
                                    </div>

                                    <div className="item-social" style={{width: '10%'}}>
                                        <a href=""><img className="w-75" src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="" /></a>
                                    </div>

                                    <div className="item-social" style={{width: '10%'}}>
                                        <a href=""><img className="w-75" src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="small mt-2 m-3 text-center">Bằng việc tiếp tục, bạn đã chấp nhận <a href="">điều khoản sử dụng</a> </div>
                            </div>
                        </div>

                        <div className="col-md-4 pt-5 text-center" style={{background: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)' }}>
                            <img className="w-75" src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="" />
                            <h6 className="mt-4 ">Mua sắm tại Tiki</h6>
                            <p className="small">Siêu ưu đãi mỗi ngày</p>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}
export default RegisterAccount;