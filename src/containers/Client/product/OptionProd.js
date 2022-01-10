import React from 'react';

function OptionProd(props) {
    return (
        <div className='my-2'>
            <span><small className='mr-3'>Chọn màu:</small></span>
        
            <button className="btn btn-outline-success border border-success px-3 text-dark">Đen</button>
            <button className="btn btn-outline-success border border-success px-3 text-dark mx-3">Vàng</button>
            <button className="btn btn-outline-success border border-success px-3 text-dark">Xanh</button>
        </div>
    );
}

export default OptionProd;