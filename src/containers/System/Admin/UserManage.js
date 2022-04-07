import { createNewUser, deleteUser, editUser, fetchAllUser } from '../../../store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { formatDateNew } from 'components/Formatting/FormatDate';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import ModalEditUser from './ModalEditUser';
import DetailUser from './DetailUser';
import ModalUser from './ModalUser';
import './style.scss';

const UserManage = (props) => {
    const [modalUser, setModalUser] = useState(false);
    const [modalEditUser, setModalEditUser] = useState(false);
    const [userEdit, setUserEdit] = useState('');
    const [detailUser, setDetailUser] = useState(false);
    const [userInfo, setUserInfo] = useState('');

    // Fetch user
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.admin.users);
    useEffect(() => {
        dispatch(fetchAllUser());
    }, [dispatch]);

    const infoUser = (user) => {
        setDetailUser(!detailUser);
        setUserInfo(user);
    }
    
    // Create user
    const handleAddNewUser=()=> {
        setModalUser(!modalUser);
    }
    const AddNewUser=(data)=> {
        const dataUser = new FormData();
        dataUser.append('email', data.email);
        dataUser.append('username', data.username);
        dataUser.append('address', data.address);
        dataUser.append('gender', data.gender);
        dataUser.append('roleId', data.roleId);
        dataUser.append('positionId', data.positionId);
        dataUser.append('phoneNumber', data.phoneNumber);
        data.image && dataUser.append('image', data.image);
        dispatch(createNewUser(dataUser));
    }

    //delete user 
    const DeleteUser=(user)=>{
        dispatch(deleteUser(user.id));
    }

    //edit user
    const handleEditUser=(user)=>{
        setUserEdit(user);
        setModalEditUser(!modalEditUser);
    }
    const EditUser=(data)=>{
        const user = new FormData();
        user.append('id', userEdit.id);
        user.append('email', data.email);
        user.append('username', data.username);
        user.append('address', data.address);
        user.append('gender', data.gender);
        user.append('roleId', data.roleId);
        user.append('positionId', data.positionId);
        user.append('phoneNumber', data.phoneNumber);
        data.image && user.append('image', data.image);
        dispatch(editUser(user));
    }

    return (
        <div className="userManage">
            <ModalUser
                isOpen={modalUser} 
                toggleModal={handleAddNewUser}
                AddNewUser={AddNewUser}
            />

            <ModalEditUser
                isOpen={modalEditUser} 
                toggleModal={handleEditUser}
                currentUser={userEdit}
                editUser={EditUser}
            />

            <DetailUser
                isOpen={detailUser}
                toggle={infoUser}
                userInfo={userInfo}
            />

            <div className='addUser'>
                <div className='user-head'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wxYfRYb_Go_3bimYI19No2lBRt5H9hmBaw&usqp=CAU" className='rounded-circle' style={{width: '5%'}} alt="" />
                    <div className="userTitle">Khách hàng (<small>{listUsers.length}</small>)</div>
                </div>

                <div className="addUser">
                    <button onClick ={() => handleAddNewUser()}  type="button" className="btn btn-success">
                        <i className="fas fa-plus mr-2"></i> Thêm thành viên
                    </button>
                </div>
            </div>
            
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white">
                    <tr>
                        <td>STT</td>
                        <td>Avatar</td>
                        <td>Tên</td>
                        <td>Điểm tích luỹ</td>
                        <td>Tham gia</td>
                        <td>Email</td>
                        <td>SĐT</td>
                        <td>Giới tính</td>
                        <td>Năm sinh</td>
                        <td>Địa chỉ</td>
                        <td>Role</td>
                        <td>Position</td>
                        <td>Tác vụ</td>
                    </tr>
                </thead>
                {
                    listUsers?.length >0 ?
                    listUsers.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td style={{width:'4%'}}><img src={item.image} className="w-100 rounded-circle" style={{height:'40px'}} alt="" /> </td>
                                    <td className='text-primary'>{item.username}</td>
                                    <td style={{color:'orange'}}>{ item.userData ? numberFormat(item.userData.point) : 0 }</td>
                                    <td>{formatDateNew(item.joinDate)}</td>
                                    <td><span className='user-mail'>{item.email}</span></td>
                                    <td>{item.phoneNumber?item.phoneNumber : <small>updating..</small>}</td>
                                    <td>{item.gender}</td>
                                    <td>{formatDateNew(item.age)}</td>
                                    <td>{item.address?item.address : <small>updating..</small>}</td>
                                    <td>{item.roleId?item.roleId: <small>updating..</small>}</td>
                                    <td>{item.positionId?item.positionId: <small>updating..</small>}</td>
                                    <td className='d-flex'>
                                        <button onClick={()=> infoUser(item)} type="button" className="btn text-success p-0">
                                            <i className="fas fa-info-circle mr-2"></i>
                                        </button>

                                        <button onClick={()=> handleEditUser(item)} type="button" className="btn text-primary p-0 pr-1">
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button onClick={()=> DeleteUser(item)} type="button" className="btn text-danger p-0">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                    :
                    <tbody>
                        <tr><td colSpan={12}>Không có dữ liệu</td></tr> 
                    </tbody>
                }
            </table>
        </div>
    );
}
export default UserManage;
