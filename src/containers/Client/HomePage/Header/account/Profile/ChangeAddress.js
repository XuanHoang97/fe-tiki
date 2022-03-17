import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ChangeAddress = (props) => {
    const {isOpen, toggle} = props;
    return (
        <Modal isOpen={isOpen}>
            <ModalHeader toggle={()=>toggle()}>Địa chỉ mới</ModalHeader>
            <ModalBody>
                <div class="form-group">
                  <select className="form-control">
                    <option>ha noi</option>
                    <option>hcm</option>
                    <option></option>
                  </select>
                </div>

                <div class="form-group">
                  <input type="text"
                    className="form-control" placeholder="Địa chỉ cụ thể" />
                </div>

                <div class="form-check">
                  <label class="form-check-label">
                    <input type="checkbox" className="form-check-input" value="checkedValue" checked />
                    Đặt làm địa chỉ mặc định
                  </label>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className="btn" type='submit'>Hoàn thành</Button>
                <Button color="light" className="btn">Trở lại</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ChangeAddress;
