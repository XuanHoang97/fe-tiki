import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Address(props) {
    const user = useSelector(state => state.auth.user);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        setName(user ? user.username : '');
        setPhone(user ? user.phoneNumber : '');
        setAddress(user ? user.address : '');
    }, [user])

    console.log(user, user.address)

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div className='font-weight-bold'>Địa chỉ của tôi</div>
                <button type="button" className="btn btn-primary">
                    <i className="fa fa-plus mr-3" aria-hidden="true"></i>
                    Thêm địa chỉ mới
                </button>
            </div>
            <hr/>
            <div className='d-flex justify-content-between'>
                <div className='col-6'>
                    <div className='d-flex'>
                        <span className='col-4'>Họ và tên: </span>
                        <span>{address ? name : 'Chưa có địa chỉ...'}</span>
                    </div>
                    <div className='d-flex'>
                        <span className='col-4'>Số điên thoại: </span>
                        <span>{address ? phone : 'Chưa có địa chỉ...'}</span>
                    </div>
                    <div className='d-flex'>
                        <span className='col-4'>Địa chỉ:</span> 
                        <span>{address ? address : 'Chưa có địa chỉ...'}</span>
                    </div>
                </div>
                <div className='col-6 text-right'>
                    <span className="text-primary mr-4">Sửa</span>
                    <span className="text-danger">Xóa</span>
                </div>
            </div>
        </div>
    );
}

export default Address;