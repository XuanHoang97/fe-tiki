import { numberFormat } from 'components/Formatting/FormatNumber';
import React from 'react';

function Statistical(props) {
    const {totalRevenue, filterOrder} = props;

    return (
        <div>
            <div>
                <div>
                    <span className="text-dark">Tổng tiền: </span>
                    <span className="text-danger">
                        {
                            filterOrder && filterOrder.length > 0 ?
                            numberFormat(totalRevenue(filterOrder))
                            :
                            <span className='text-danger'>0 đ</span>
                        }
                    </span>
                </div>

                <div>
                    <span className="text-dark">Tổng doanh thu: </span>
                    {
                        filterOrder && filterOrder.length > 0 
                        && filterOrder.filter(item => item.status === 'S4').length > 0 ?
                        <span className="text-success">
                            {numberFormat(filterOrder.filter(item => item.status === 'S4').reduce((total, item) => {
                            return total + item.total
                            }, 0))}
                        </span>
                        : 
                        <span className='text-success'>0 đ</span>
                    }
                </div>

                <div>
                    <span className="text-dark">Tổng chi phí: </span>
                    <span className='text-danger'>Đang cập nhật...</span>
                </div>

                <div>   
                    <span className="text-dark">Tổng lợi nhuận: </span>
                    <span className='text-success'>Đang cập nhật...</span>
                </div>
            </div>
        </div>
    );
}

export default Statistical;