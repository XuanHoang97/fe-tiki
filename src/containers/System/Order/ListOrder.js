import React from 'react';
import {numberFormat} from 'components/Formatting/FormatNumber';
import Moment from 'react-moment';

function ListOrder(props) {
    const {filterOrder, loadOrder, verifyOrder} = props;

    return (
        <div className='list-order mt-3'>
            <div className="text-dark">Danh sách (<b>{filterOrder.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover w-100">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <td>STT</td>
                        <td>Mã ĐH</td>
                        <td>Khách hàng</td>
                        <td>Sản phẩm</td>
                        <td>SL</td>
                        <td>Tổng tiền</td>
                        <td>Ngày đặt</td>
                        <td>Ngày giao dự kiến</td>
                        <td>Trạng thái</td>
                        <td>Tác vụ</td>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        loadOrder ?
                        <tr>
                            <td colSpan="10" className="text-center">
                                <div className="spinner-border text-primary spinner-border-sm" role="status">
                                </div>
                                <span className="ml-2">Đang tải...</span>
                            </td>
                        </tr>
                        :
                        filterOrder && filterOrder.length > 0 ?
                        filterOrder.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.code}</td>
                                    <td className='text-primary font-weight-bold'>{item.username}</td>
                                    <td>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>{numberFormat(item.total)}</td>
                                    <td><Moment format="DD/MM/YYYY">{item.date}</Moment></td>
                                    <td><Moment format="DD/MM/YYYY">{item.date}</Moment></td>
                                    <td className=
                                        {item.status ==='S1' ? "text-warning small font-weight-bold" : 'text-success small font-weight-bold'}
                                        id={item.status ==='S5' && "cancel"}
                                        >
                                        {item.status ==='S1' && 'Chưa xác nhận'}
                                        {item.status ==='S2' && 'Đã xác nhận'}
                                        {item.status ==='S3' && 'Đang giao hàng'}
                                        {item.status ==='S4' && 'Đã giao'}
                                        {item.status ==='S5' && 'Đã hủy'}
                                    </td>
                                    <td style={{width: '10%'}}>
                                        {
                                            item.status ==='S1' && <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Xác nhận</span>
                                        }

                                        {
                                            item.status ==='S2' && <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Giao hàng</span>
                                        }

                                        {
                                            item.status ==='S3' && <span onClick={() => verifyOrder(item)} className="actionOrder text-primary">Chốt đơn</span>
                                        }

                                        {
                                            item.status ==='S4' && <span className="actionOrder text-primary">Đổi hàng</span>
                                        }

                                        {
                                            item.status ==='S5' && <span className="actionOrder text-primary">Mua lại</span>
                                        }
                                        <br/>
                                        <span className="actionOrder text-danger">Huỷ đơn</span>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr>
                            <td colSpan="10" className="text-center text-primary">Chưa có đơn hàng nào...</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListOrder;