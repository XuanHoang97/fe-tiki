import React from 'react';
import './style/header.scss';

const Suggest = () => {
    return (
        <div className="menu--suggest">
            <div className="col-md-2 freeShip p-0">
                <img className="w-50" src="https://salt.tikicdn.com/ts/upload/23/97/dd/2d66c7c7cd54895f698aae24dce13b90.png" alt="" />
            </div>

            <div className="col-md-8 suggest">
                <span>Đồng hồ thông minh</span>
                <span>Mũ bảo hiểm</span>
                <span>Đầm dự tiệc</span>
                <span>Bình giữ nhiệt</span>
                <span>Tai nghe Bluetooth</span>
                <span>Máy lạnh</span>
            </div>

            <div className="saleTiki col-md-2 text-right text-white pr-0">
                <span className="small">💰Bán hàng cùng Tiki</span>
            </div>
        </div>
    );
}
export default Suggest;