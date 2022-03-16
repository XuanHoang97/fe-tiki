import React from 'react';

const Mail = () => {
    return (
        <div className="mail d-flex p-3 my-3 align-items-center">
            <div className="col-6 row">
                <div className="col-3">
                    <img className="w-100" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/newsletter.png" alt="" />
                </div>
                <div className="info--mail col-9">
                    <h6>Đăng ký nhận bản tin Tiki</h6>
                    <p className="small">Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
                </div>
            </div>
            <div className="input-group col-6">
                <input type="text" className="form-control" placeholder="Địa chỉ Email của bạn" />
                <button className="btn btn-success" type="submit" style={{ height: '32px', borderRadius: 0 }}>Đăng ký</button>
            </div>
        </div>
    );
}
export default Mail;