import React from 'react';

const Suggest = () => {
    return (
        <div className="menu--suggest">
            <div className="col-md-2 freeShip p-0">
                <img className="w-50" src="https://salt.tikicdn.com/ts/upload/23/97/dd/2d66c7c7cd54895f698aae24dce13b90.png" alt="" />
            </div>

            <div className="col-md-8 suggest">
                <a href='/#' className="mr-3 text-white">Đồng hồ thông minh</a>
                <a href='/#' className="mr-3 text-white">Mũ bảo hiểm</a>
                <a href='/#' className="mr-3 text-white">Đầm dự tiệc</a>
                <a href='/#' className="mr-3 text-white">Bình giữ nhiệt</a>
                <a href='/#' className="mr-3 text-white">Tai nghe Bluetooth</a>
                <a href='/#' className="mr-3 text-white">Máy lạnh</a>
            </div>

            <div className="saleTiki col-md-2 text-right pr-0">
                <a href='/#' className="small text-white">💰Bán hàng cùng Tiki</a>
            </div>
        </div>
    );
}
export default Suggest;