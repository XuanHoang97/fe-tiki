import React from 'react';

function Sort(props) {
    return (
        <div className="form-group d-flex col-4 pr-0">
            <label className="col-3 p-0">Sắp xếp</label>
            <select className="form-control col-9" name="" id="">
                <option>Tất cả</option>
                <option>Theo vai trò</option>
                <option>Theo tên</option>
            </select>
        </div>
    );
}

export default Sort;