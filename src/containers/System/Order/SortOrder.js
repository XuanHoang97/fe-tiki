import React from 'react';

function SortOrder(props) {
    return (
        <div className='filter'>
            <div className="orderSort">
                <label className="labelSort">Tìm kiếm</label>
                <input type="text" className="item-filterOrder form-control" placeholder="Mã đơn hàng..."/>
            </div>

            <div className="orderSort">
                <label className="labelSort">Ngày đặt</label>
                <select className="item-filterOrder form-control">
                    <option>Hôm nay</option>
                    <option>Tuần này</option>
                    <option>tháng này</option>
                </select>
            </div>
        </div>
    );
}
export default SortOrder;