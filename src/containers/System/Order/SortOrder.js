import React from 'react';

function SortOrder(props) {
    const {status, StatusOrder, FilterOrder} = props;

    return (
        <div className='filter bg-success py-2 text-white d-flex align-items-center'>
            <div className="orderSort col-4 d-flex align-items-center">
                <label className="labelSort p-0 col-md-3">Tìm kiếm</label>
                <input type="text" className="col-md-9 form-control" placeholder="Mã đơn hàng..." 
                    style={{height:'30px'}}
                />
            </div>

            <div className="orderSort col-4 p-0 d-flex align-items-center">
                <label className="labelSort col-md-3 p-0">Trạng thái</label>
                <select className="col-md-9 form-control" style={{height:'30px'}}
                    value={StatusOrder}
                    onChange={(e) => FilterOrder(e)}
                >
                    {
                        status.map((item, index) => {
                            return <option key={index} value={item.keyMap} >{item.valueVi}</option>
                        })
                    }
                </select>
            </div>

            <div className="orderSort col-4 d-flex align-items-center">
                <label className="labelSort col-md-4 p-0">Ngày đặt</label>
                <select className="col-md-8 form-control" name="" id=""  style={{height:'30px'}}>
                    <option>Ngày đặt</option>
                    <option>Mới nhất</option>
                    <option>Muộn nhất</option>
                </select>
            </div>
        </div>
    );
}
export default SortOrder;