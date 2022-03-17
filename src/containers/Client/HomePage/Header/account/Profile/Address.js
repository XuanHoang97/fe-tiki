import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ChangeAddress from './ChangeAddress';
import './style.scss'

function Address(props) {
    const user = useSelector(state => state.auth.user);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [modalAddress, setModalAddress] = useState(false);

    // default address
    useEffect(() => {
        if(user){
            setName(user.username);
            setPhone(user.phoneNumber);
            setAddress(user.address);
        }
    }, [user])

    const addPlace = () => {
        setModalAddress(!modalAddress);
    }

    return (
        <div>
            <ChangeAddress
                isOpen={modalAddress}
                toggle={addPlace}
            />

            <div className='myAddress'>
                <h5>Địa chỉ của tôi</h5>
                <button onClick={()=>addPlace()} type="button" className="btn btn-primary">
                    <i className="fa fa-plus mr-3" aria-hidden="true"></i>Thêm địa chỉ mới
                </button>
            </div>
            <hr/>
            <div className='infoAddr'>
                <div className='col-6'>
                    <div className='d-flex'>
                        <span className='col-4'>Họ và tên: </span>
                        <h6>
                            {address ? 
                            <>
                                <b className='text-uppercase'>{name}</b>
                                <span className='badge badge-info ml-3'>Mặc định</span> 
                            </>
                            : 'Chưa đặt tên...'}
                        </h6>
                    </div>
                    <div className='d-flex'>
                        <span className='col-4'>Số điên thoại: </span>
                        <span>{address ? phone : 'Chưa có sdt...'}</span>
                    </div>
                    <div className='d-flex'>
                        <span className='col-4'>Địa chỉ:</span> 
                        <span>{address ? address : 'Chưa có địa chỉ...'}</span>
                    </div>
                </div>
                <div className='col-6 text-right'>
                    <span className="mr-4">Sửa</span>
                    <span>Xóa</span>
                </div>
            </div>
        </div>
    );
}
export default Address;