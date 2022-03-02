import React from 'react';
import './Index.scss'

function Setting(props) {
    return (
        <div className='d-flex text-white py-3' style={{backgroundImage: `url('https://media.istockphoto.com/photos/butterflies-picture-id1201252148?b=1&k=20&m=1201252148&s=170667a&w=0&h=G-CoAaoqRVk3ikZXMm-g0FtbXEx0OHOucGB9dj-27RI=`, backgroundSize: 'cover', backgroundOrigin: 'center', height:'86vh'}}>
            <div className='col-2'>
              <div className='mb-2'>1. Đổi Theme</div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

            <div className='col-3'>
                <div className="form-group">
                  <div className='mb-2'>2. Ngôn ngữ</div>
                  <select className="form-control" style={{height: '30px'}}>
                    <option>Tiếng Việt</option>
                    <option>Tiếng Anh</option>
                    <option>Tiếng Trung</option>
                  </select>
                </div>
            </div>

            <div className='col-3'>
              <div className='mb-2'>3. Play game</div>
              <button type='button' className='btn btn-success'><i className="fas fa-gamepad mr-2"></i> Chơi</button>
            </div>

            <div className='col-4'>
              <div className='mb-2'>4. Cập nhật Tài khoản</div>
              <button type='button' className='btn btn-warning'><i className="fas fa-user-edit mr-2"></i>Sửa thông tin cá nhân</button>
            </div>
        </div>
    );
}
export default Setting;