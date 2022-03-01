import React from 'react';

const Suggest = () => {
    return (
        <div className="row menu--suggest pb-2 pl-3 pr-2 justify-content-between align-items-center">
            <div className="col-md-2">
                <a href='/#'>
                    <img className="w-50" src="https://salt.tikicdn.com/ts/upload/23/97/dd/2d66c7c7cd54895f698aae24dce13b90.png" alt="" />
                </a>
            </div>

            <div className="col-md-8 row suggest">
                <a href='/#' className="mr-3 text-white">Đồng hồ thông minh</a>
                <a href='/#' className="mr-3 text-white">Mũ bảo hiểm</a>
                <a href='/#' className="mr-3 text-white">Đầm dự tiệc</a>
                <a href='/#' className="mr-3 text-white">Bình giữ nhiệt</a>
                <a href='/#' className="mr-3 text-white">Tai nghe Bluetooth</a>
                <a href='/#' className="mr-3 text-white">Máy lạnh</a>
            </div>

            <div className="col-md-2 text-right mr-2">
                <a href='/#' className="small text-white">💰Bán hàng cùng Tiki</a>
            </div>
        </div>
    );
}

export default Suggest;