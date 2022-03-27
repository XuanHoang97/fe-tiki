import React from 'react';
import './style/body.scss';

const Mail = () => {
    const iconMail = 'https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png';
    return (
        <div className="mail">
            <div className="titleMail col-6">
                <div className="imgMail col-md-3">
                    <img className="w-100" src={iconMail} alt="" />
                </div>
                <div className="info--mail col-md-9">
                    <h6>Đăng ký nhận bản tin Tiki</h6>
                    <p className="small">Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                </div>
            </div>
            <div className="formMail col-md-6">
                <input type="text" className="form-control" placeholder="Địa chỉ Email của bạn" />
                <button className="btn btn-success" type="submit">Đăng ký</button>
            </div>
        </div>
    );
}
export default Mail;