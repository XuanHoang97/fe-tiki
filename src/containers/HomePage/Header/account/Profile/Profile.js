import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import instance from './../../../../../axios';
import { getUser } from 'store/actions';

function Profile(props) {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.auth.user);

    const [userInfo, setUserInfo] = useState([])
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // Refresh token
    useEffect(() => {
        if(token){
            instance.get(`/user`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                dispatch(getUser(res))
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
        }
    }, [dispatch, token]);

    return (
        <div className=''>
            <h5>Hồ Sơ Của Tôi </h5>
            <span className='text-secondary'>Quản lý thông tin hồ sơ để bảo mật tài khoản</span>
            <hr/>
            <div className='d-flex'>
                <div className='col-8 pl-0'>
                    <div className=''>
                        <label className='col-3'>Tên đăng nhập</label>
                        <span className='ml-2'>
                            { user ? user.username : '' }
                        </span>
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Tên</label>
                        <input type="text" className="form-control" 
                            value={ user ? user.username : '' }
                            onChange={ (e) => setUserInfo(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Số Điện Thoại</label>
                        <input type="text" className="form-control" 
                            value={ user ? user.phoneNumber : '' }
                            onChange={ (e) => setPhone(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Địa chỉ</label>
                        <input type="text" className="form-control" 
                            value={ user ? user.address : '' }
                            onChange={ (e) => setAddress(e.target.value) }
                        />
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Giới Tính</label>
                        <div className="gender d-flex px-3">
                            <div className="radio">
                                <label><input type="radio" name="gender" readOnly checked />Nam</label>
                            </div>
                            <div className="radio mx-3">
                                <label><input type="radio" name="gender" readOnly />Nữ</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="gender" readOnly />Khác</label>
                            </div>
                        </div>
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3'>Ngày sinh</label>
                        <input type="text" className="form-control" />
                    </div>

                    <button type="button" className="btn btn-primary px-4 mx-3">Lưu</button>
                </div>

                <div className='col-4 bg-light text-center border-left'>
                    <img src="https://cf.shopee.vn/file/0da87e797bc536f57ff4dadbd8781db4_tn" className='rounded-circle' alt="" style={{width: '40%'}}/>
                    <input type="file" className='my-2' />
                    <span className='text-secondary'>Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;