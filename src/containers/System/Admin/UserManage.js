import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import { formatDateNew } from 'components/Formatting/FormatDate';
import ModalEditUser from './ModalEditUser';
import ModalUser from './ModalUser';
import './style.scss'

const UserManage = (props) => {
    const [modalUser, setModalUser] = useState(false);
    const [modalEditUser, setModalEditUser] = useState(false);
    const [userEdit, setUserEdit] = useState('');

    //fetch data
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.admin.users);

    useEffect(() => {
        dispatch(actions.fetchAllUser());
    }, [dispatch]);
    
    // Create users
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
        dispatch(actions.createNewUser(dataUser));
    }

    //delete user 
    const deleteUser=(user)=>{
        dispatch(actions.deleteUser(user.id));
    }

    //edit user
    const handleEditUser=(user)=>{
        setUserEdit(user);
        setModalEditUser(!modalEditUser);
    }
    const editUser=(data)=>{
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
        dispatch(actions.editUser(user));
    }

    return (
        <div className="userManage">
            <ModalUser
                isOpen={modalUser} 
                toggleModal={handleAddNewUser}
                AddNewUser={AddNewUser}
            />

            {
                <ModalEditUser
                    isOpen={modalEditUser} 
                    toggleModal={handleEditUser}
                    currentUser={userEdit}
                    editUser={editUser}
                />
            }

            <div className='addUser'>
                <div className="h5 text-dark mb-4">Quản lý thành viên (<small>{listUsers.length}</small>)</div>
                <div className="addUser">
                    <button onClick ={() => handleAddNewUser()}  type="button" className="btn btn-success">
                        <i className="fas fa-plus mr-2"></i> Thêm thành viên
                    </button>
                </div>
            </div>
            
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white">
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số ĐT</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">Năm sinh</th>
                        <th scope="col">Nghề nghiệp</th>
                        <th scope="col">Chức danh</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                {
                    listUsers && listUsers.length >0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td style={{width:'6%'}}><img src={item.image} className='w-100 rounded-circle' alt="" /> </td>
                                    <td className='text-primary'>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.gender}</td>
                                    <td>{formatDateNew(item.age)}</td>
                                    <td>{item.roleId}</td>
                                    <td>{item.positionId}</td>
                                    <td>
                                        <button type="button" className="btn text-success">
                                            <i className="fas fa-info-circle"></i>
                                        </button>
                                        <button onClick={()=> handleEditUser(item)} type="button" className="btn text-primary">
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button onClick={()=> deleteUser(item)} type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }

                {   
                    listUsers && listUsers.length ===0 &&
                    <tbody>
                        <tr><td className="">Không có dữ liệu</td></tr> 
                    </tbody> 
                }
            </table>
        </div>
    );
}
export default UserManage;
