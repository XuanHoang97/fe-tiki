import { formatDateNew } from 'components/Formatting/FormatDate';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import React from 'react';
import './style.scss';

const ViewBill = (props) => {
    const {isOpen, toggle, bill} = props;

    // date bill
    const dateBill = formatDateNew(bill ? bill.datePayment : '');
    const dateBillSplit = dateBill.split('/');
    const day = dateBillSplit[0];
    const month = dateBillSplit[1];
    const year = dateBillSplit[2];

    // total money of bill
    const Tax = 0;
    let totalAmount = bill ? bill.sale * bill.qty : 0;
    let TaxFee = + (totalAmount * Tax/100).toFixed();
    let totalPayment = +(totalAmount + TaxFee).toFixed();

    return (
        <Modal isOpen={isOpen} toggle={()=>toggle()} size="lg">
            <div className='bill-header'>HOÁ ĐƠN MUA HÀNG</div>
            <span className='date-bill'>Ngày {day} tháng {month} năm {year}</span>
            <ModalBody className='px-4'>
                <div className='detail-bill'>
                    <div className='info-bill'>
                        <span className='label-bill'>Đơn vị bán hàng</span>

                        <div className='value-bill'>
                            <div className='text-primary'>Tiki Entertaiment</div>
                        </div>

                        <div className='bill-customer'>
                            <div className="form-check">
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" readOnly value="checkedValue" checked />
                                Hoá đơn đã thanh toán
                            </label>
                            </div>
                        </div>
                    </div>

                    <div className='info-bill'>
                        <span className='label-bill'>Mã số thuế</span>
                        <div className='value-bill'>ABC123456</div>
                    </div>

                    <div className='info-bill'>
                        <span className='label-bill'>Mã số thuế người mua</span>
                        <div className='value-bill'>0101243150</div>
                    </div>

                    <div className='info-bill'>
                        <span className='label-bill'>Địa chỉ</span>
                        <div className='value-bill'>{bill? bill.address : ''}</div>
                    </div>

                    <div className='info-bill'>
                        <span className='label-bill'>Người mua hàng</span>
                        <div className='value-bill border-bottom text-primary'>{bill ? bill.username : ''}</div>

                        <div className='bill-customer'>
                            <span className='label-bill'>Email</span>
                            <div className='value-bill'>{bill ? bill.email : ''}</div>
                        </div>
                    </div>

                    <div className='info-bill'>
                        <span className='label-bill'>Số điện thoại</span>
                        <div className='value-bill border-bottom'>{bill ? bill.phone : ''}</div>
                        <div className='bill-customer'>
                            <span className='label-bill'>Hình thức thanh toán</span>
                            <div className='value-bill'>{bill ? bill.payment : ''}</div>
                        </div>
                    </div>


                    <div className='info-bill'>
                        <span className='label-bill'>TK Ngân hàng</span>
                        <div className='value-bill border-bottom'>...</div>
                        <div className='bill-customer'>
                            <span className='label-bill'>Tên ngân hàng </span>
                            <div className='value-bill'>...</div>
                        </div>
                    </div>
                </div>

                <div className='commodity'>
                    <b>Hàng hoá / Dịch vụ</b>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr className='text-white'>
                                <td>STT</td>
                                <td>Mã hàng hoá</td>
                                <td>Tên hàng hoá/Dịch vụ</td>
                                <td>Số lượng</td>
                                <td>Đơn giá</td>
                                <td>Thành tiền</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{bill ? bill.billCode : ''}</td>
                                <td>{bill ? bill.name : ''}</td>
                                <td>{bill ? bill.qty : ''}</td>
                                <td>{bill ? numberFormat(bill.sale) : ''}</td>
                                <td>{bill ? numberFormat(bill.sale * bill.qty) : ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='totalMoney-bill'>
                    <div className='tax'>
                        <span>Thuế GTGT</span>
                        <span>{Tax} %</span>
                    </div>

                    <div className='moneyBill'>
                        <div className='item-money-bill'>
                            <span>Tổng tiền hàng</span>
                            <span>{numberFormat(totalAmount)}</span>
                        </div>

                        <div className='item-money-bill'>
                            <span>Tiền thuế GTGT</span>
                            <span>
                                {numberFormat(TaxFee)}
                            </span>
                        </div>

                        <div className='item-money-bill'>
                            <b>Tổng tiền thanh toán</b>
                            <b className='text-danger'>
                                {numberFormat(totalPayment)}
                            </b>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" className="btn" type='submit'>Lưu</Button>
                <Button color="secondary" className="btn">Huỷ</Button>
            </ModalFooter>
        </Modal>
    )
}
export default ViewBill;
