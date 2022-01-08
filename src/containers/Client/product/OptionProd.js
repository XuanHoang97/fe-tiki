import React from 'react';

function OptionProd(props) {
    return (
        <div>
            <span><small>Chọn màu:</small> <strong className="text-primary">Trắng</strong> </span>
            <span><small>Chọn màu:</small> <strong className="" style={{ color: 'orange' }}>Vàng</strong> </span>
            <span><small>Chọn màu:</small> <strong className="text-secondary">Xám</strong> </span>

            <div>
                <span>Trắng</span>
                <span>Vàng</span>
                <span>Xám</span>
            </div>
        </div>
    );
}

export default OptionProd;