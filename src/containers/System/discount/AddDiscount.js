import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddDiscount = (props) => {
    const {isOpen, toggle, handleAddDiscount} = props;
    const [info, setInfo] = useState('');
    const [max, setDiscountMax] = useState(50);
    const [applyTo, setApplyTo] = useState('');
    const [discountStart, setDiscountStart] = useState('');
    const [discountEnd, setDiscountEnd] = useState('');
    const [creator, setCreator] = useState('');
    const [type, setDiscountType] = useState('');

    const formatDiscountStart = new Date(discountStart).getTime();
    const formatDiscountEnd = new Date(discountEnd).getTime();

    // add discount
    const addGift = () => {
        handleAddDiscount({
            info,
            max,
            applyTo,
            discountStart: formatDiscountStart,
            discountEnd: formatDiscountEnd,
            type,
            creator
        });
        toggle();
    }

    return (
        <Modal isOpen={isOpen} toggle={()=>toggle()} size="lg">
            <ModalHeader toggle={()=>toggle()}>Tạo khuyến mãi</ModalHeader>
            <ModalBody>
                <div className="infoDiscount d-flex">
                    <span className="col-md-4">Thông tin khuyễn mãi</span>
                    <div className="form-group col-md-8">
                      <input type="text" className="form-control" placeholder="thong tin khuyen mai giam gia" 
                        value={info} onChange={(e)=>setInfo(e.target.value)}
                      />
                    </div>
                </div>

                <div className="numbDiscount d-flex">
                    <span className="col-md-4">Voucher tối đa</span>
                    <div className="form-group col-md-8">
                      <input type="text" className="form-control" placeholder="50" 
                        value={max} onChange={(e)=>setDiscountMax(e.target.value)}
                      />
                    </div>
                </div>

                <div className="orderApply d-flex">
                    <span className="col-md-4" >Áp dụng cho giá trị đơn hàng từ</span>
                    <div className="form-group col-md-8">
                      <input type="text" className="form-control"  placeholder="100.000 đ" 
                        value={applyTo} onChange={(e)=>setApplyTo(e.target.value)}
                      />
                    </div>
                </div>

                <div className="TimeApply d-flex">
                    <span className="col-md-4" >Thời gian áp dụng</span>
                    <div className="d-flex form-group col-md-8">
                        <div className="d-flex align-items-center">
                            <input type="date" className="form-control" placeholder="Từ ngày" 
                                value={discountStart} onChange={(e)=>setDiscountStart(e.target.value)}
                            />
                            <span className="ml-2">-</span>
                            <input type="date" className="form-control" placeholder="Đến ngày" 
                                value={discountEnd} onChange={(e)=>setDiscountEnd(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="discount d-flex">
                    <span className="col-md-4" >Loại khuyến mãi</span>
                    <div className="form-group d-flex col-md-8">
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

                <div className="creator d-flex">
                    <span className="col-md-4" >Người tạo</span>
                    <div className="form-group col-md-8">
                      <input type="text" className="form-control" placeholder="Hoang97" 
                        value={creator} onChange={(e)=>setCreator(e.target.value)}
                      />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className="btn" type='button' onClick={()=>addGift()}>Tạo quà tặng</Button>
                <Button color="secondary" className="btn">Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
export default AddDiscount;
