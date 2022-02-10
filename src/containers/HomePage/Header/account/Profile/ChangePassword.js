import React from 'react';

function ChangePassword(props) {
    return (
        <div className=''>
            <h5>Đổi Mật Khẩu </h5>
            <span className='text-secondary'>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
            <hr/>

            <div className='d-flex my-4'>
                <div className='col-8 p-0'>
                    <div className='form-group d-flex'>
                        <label className='col-3'>Mật khẩu hiện tại</label>
                        <input type="password" className="form-control col-9" />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Mật khẩu mới</label>
                        <input type="password" className="form-control col-9" />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Xác nhận mật khẩu</label>
                        <input type="password" className="form-control col-9" />
                    </div>
                    <button type="button" className="btn btn-primary px-3 mx-3">Xác nhận</button>
                </div>
                <div className='col-4 text-secondary'>
                    <span>Quên mật khẩu ?</span>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;