import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { formatDateNew } from 'components/Formatting/FormatDate';
import React from 'react';
import './style.scss';

const DetailUser = (props) => {
    const {isOpen, toggle, userInfo} = props;

    console.log('info user:', userInfo);
    return (
        <Modal isOpen={isOpen} toggle={toggle}  size="md">
            <ModalHeader toggle={()=>toggle()}>Thông tin khách hàng</ModalHeader>
            <ModalBody>
                <div className='wall-user'>
                    <div className='avatar-user'>
                        <img src={userInfo.image} alt=""/>
                        <div className='nameCustomer'>{userInfo.username}</div>
                        <span className='joinDate-user'>Ngày tham gia {formatDateNew(userInfo.joinDate)}</span>
                    </div>
                    <div className='overview-user'>
                        <span><i className="fas fa-circle mr-1 small text-primary"></i> {userInfo.roleId?userInfo.roleId : 'Khách hàng'}</span>
                        <span><i className="fas fa-circle mr-1 small text-warning"></i> {userInfo?.userData?.point? userInfo.userData.point : 0} Point</span>
                    </div>
                </div>

                <div className='contact-user'>
                    <div className='item-contact'>
                        <div className='label-contact'>Email </div>
                        <span>{userInfo.email}</span>
                    </div>

                    <div className='item-contact'>
                        <div className='label-contact'>Ngày sinh</div>
                        <span>{formatDateNew(userInfo.age)}</span>
                    </div>

                    <div className='item-contact'>
                        <div className='label-contact'>Giới tính </div>
                        <span>{userInfo.gender}</span>
                    </div>

                    <div className='item-contact'>
                        <div className='label-contact'>Liên hệ </div>
                        <span>{userInfo.phoneNumber?userInfo.phoneNumber : 'updating...'}</span>
                    </div>

                    <div className='item-contact'>
                        <div className='label-contact'>Địa chỉ </div>
                        <span>{userInfo.address?userInfo.address : 'updating...'}</span>
                    </div>

                    <div className='item-contact'>
                        <div className='label-contact'>Giới thiệu </div>
                        <span>Baby, I'm right here, I'll hold you when things go wrong</span>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter className='d-flex justify-content-between'>
                <Button color="info " className="px-3 btn-sm"><i className="fas fa-print mr-2"></i>In profile</Button>
                <Button color="secondary" className="btn" onClick={toggle}>Đóng</Button>
            </ModalFooter>
        </Modal>
    )
}
export default DetailUser;
