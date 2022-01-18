import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const SetAdrrOrder = (props) => {
    const toggle = () => {
        props.toggleParent();
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            size="md"
        >   
            <ModalHeader toggle={()=>toggle()}>Địa chỉ nhận hàng</ModalHeader>
            <ModalBody>
                <div className='d-flex'>
                    <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="">Họ và tên</label>
                        <input type="text" className="form-control"  />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="">Địa chỉ</label>
                        <input type="text" className="form-control"  />
                        </div>
                    </div>
                </div>

                <div className='d-flex'>
                    <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="">Số điện thoại</label>
                        <input type="text" className="form-control"  />
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" className="form-control"  />
                        </div>
                    </div>

                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="px-3" >
                    Thêm mới
                </Button>
                <Button color="secondary" className="px-3" onClick={()=>toggle()}>Cancel</Button>
            </ModalFooter>        
        </Modal>
    );
}

export default SetAdrrOrder;