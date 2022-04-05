import React from 'react';

function SortOrder(props) {
    const {setSearch} = props;

    return (
        <div className='filter'>
            <div className="orderSort">
                <label className="labelSort">Tìm kiếm</label>
                <input type="search" className="item-filterOrder form-control" placeholder="Mã đơn hàng..."
                    onChange={(e) => setSearch(e.target.value)}
                />
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