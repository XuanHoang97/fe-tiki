import React from 'react';

const Sort = (props) => {
    return (
        <div className='d-flex col-md-9 p-0 mb-3'>
            <div className="input-group col-5 p-0">
                <label className="p-0">Tìm kiếm</label>
                <input type="text" className="form-control ml-2" placeholder="Search..." style={{height:'30px'}}/>
            </div>
        </div>
    );
}
export default Sort;