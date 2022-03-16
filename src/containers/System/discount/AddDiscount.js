import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddDiscount = (props) => {
    const {isOpen, toggle} = props;

    return (
        <Modal isOpen={isOpen} toggle={()=>toggle()} size="lg">
            <ModalHeader toggle={()=>toggle()}>Tạo khuyến mãi</ModalHeader>
            <ModalBody>
            
            <div>
                <div className="TimeApply d-flex">
                    <span className="col-md-4" >Thời gian áp dụng</span>
                    <div className="d-flex form-group">
                        <div className="d-flex align-items-center">
                            <input type="date" className="form-control" placeholder="Từ ngày" />
                            <span className="ml-2">-</span>
                            <input type="date" className="form-control" placeholder="Đến ngày" />
                        </div>
                    </div>
                </div>

                <div className="discountType d-flex">
                    <span className="col-md-4">Loại khuyến mãi</span>
                    <div className="d-flex form-group">
                        <select className="form-control">
                            <option>Loại khuyến mãi</option>
                            <option>abc</option>
                        </select>
                    </div>
                </div>

                <div className="orderApply d-flex">
                    <span className="col-md-4" >Áp dụng cho giá trị đơn hàng từ</span>
                    <div className="form-group">
                      <input type="text" className="form-control"  placeholder="100.000 đ" />
                    </div>
                </div>

                <div className="discount d-flex">
                    <span className="col-md-4" >Khuyến mãi</span>
                    <div className="form-check">
                        <label className="form-check-label" htmlFor="radio1">
                            <input type="radio" className="form-check-input" readOnly id="radio1" name="optradio" value="option1" checked/>Sản phẩm
                        </label>
                    </div>
                    <div className="form-check ml-3">
                        <label className="form-check-label" htmlFor="radio2">
                            <input type="radio" className="form-check-input" readOnly id="radio2" name="optradio" value="option2"/>Giảm giá
                        </label>
                    </div>
                </div>
            </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className="btn" type='button'>Tạo quà tặng</Button>
                <Button color="secondary" className="btn">Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
export default AddDiscount;
