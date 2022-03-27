import { numberFormat } from 'components/Formatting/FormatNumber';
import { formatDate } from 'components/Formatting/FormatDate';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import React from 'react';
import './Order.scss'

const DetailOrder = (props) => { 
    const { isOpen, toggle, order, statusOrder } = props;

    return (
        <Modal  isOpen={isOpen} toggle={toggle} size="lg">   
            <ModalHeader toggle={toggle}>Theo dõi đơn hàng</ModalHeader>
            <ModalBody>
            <div className='mx-2'>
                <div className="my-2">
                    <div className="card mb-3">
                        <div className="p-2 text-center text-white" style={{background: '#f39006'}}>
                            <span className="text-uppercase mr-2">Đơn hàng</span>
                            <span className="">#{order.code} </span>
                        </div>
                        <div className="d-flex justify-content-around py-3 bg-light">
                            <div className=" py-1 px-2">
                                <span className="text-medium">Đơn vị vận chuyển:</span> VN Post
                            </div>
                            <div className=" py-1 px-2">
                                <span>Trạng thái:</span> 
                                <span className='text-success ml-2'>
                                    {order.status ==='S1' && 'Đang xử lý'}
                                    {order.status ==='S2' && 'Đã xác nhận'}
                                    {order.status ==='S3' && 'Đang giao hàng'}
                                    {order.status ==='S4' && 'Đã giao'}
                                    {order.status ==='S5' && 'Đã huỷ'}
                                </span>
                            </div>

                            {
                                order.status !=='S4' && 
                                <div className=" py-1 px-2">
                                    <span className="text-medium">Giao hàng dự kiến:</span>
                                    <span> {formatDate(order.dateDelivery)}</span>
                                </div>
                            }
                        </div>
                        <div className="card-body my-2">
                            <div className="steps d-flex flex-wrap flex-sm-nowrap py-2">
                                <div className='step completed'>
                                    <div className="step-icon-wrap">
                                        <div className="step-icon">
                                            <i className='pe-7s-cart'></i>
                                        </div>
                                    </div>
                                    <h4 className='step-title activeStatus'>Đơn hàng đã đặt</h4>
                                    <small className='text-secondary'>{formatDate(order.date)}</small>
                                </div>
                            {
                                statusOrder?.length >0 ?
                                statusOrder.slice(1,5).map((item, index) => {
                                    return (
                                        <div 
                                            className=
                                                {
                                                    (item.keyMap === order.status) ? 'step completed' 
                                                    :
                                                    (item.keyMap < order.status) ? 'step completed' : 'step'
                                                }
                                            key={index}
                                        >
                                            <div className="step-icon-wrap">
                                                <div className="step-icon">
                                                    <i className={
                                                        item.keyMap === 'S1' ? 'pe-7s-config' : ''
                                                        || item.keyMap === 'S2' ? 'pe-7s-check' : ''
                                                        || item.keyMap === 'S3' ? 'pe-7s-car' : ''
                                                        || item.keyMap === 'S4' ? 'pe-7s-home' : ''
                                                    }></i>
                                                </div>
                                            </div>

                                            <h4 className=
                                                {
                                                    (item.keyMap === order.status) ? 'step-title activeStatus'
                                                    :
                                                    (item.keyMap < order.status) ? 'step-title activeStatus' : 'step-title'
                                                }
                                            >{item.valueVi}</h4>
                                            <span className='text-secondary small'>{
                                                item.keyMap === order.status ?
                                                formatDate(order.timeTrack)
                                                : ''
                                            }</span>
                                        </div>
                                    )
                                }) : 'loading...'
                            }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='infoOrder mb-3'>
                    <div className='d-flex align-items-center mb-2'>
                        <span className='col-3'>Sản phẩm:</span> 
                        <span className='col-4 font-weight-bold d-flex  align-items-center'>
                            <img src={order.image} alt="" className='w-25 mr-3' />
                            <span>{order.name}</span>
                        </span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Số lượng</span> 
                        <small className='col-4'>x{order.qty}</small>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức giao hàng: </span> 
                        <span className='col-6'>{order.delivery}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Hình thức thanh toán:</span> 
                        <span className='col-6'>{order.payment}</span>
                    </div>

                    <div className='d-flex mb-2'>
                        <span className='col-3'>Tổng tiền:</span> 
                        <h5 className='text-danger col-6'>{numberFormat(order.total)}</h5>
                    </div>
                </div>
            </div>
            </ModalBody>
        </Modal>
    )
}
export default DetailOrder;
