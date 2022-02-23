import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import InfoUser from './InfoUser';
import * as actions from '../../../store/actions';

const UserManage = (props) => {
    const [infoUser, setInfoUser] = useState([]);
    const [modalUser, setModalUser] = useState(false);
    const [modalEditUser, setModalEditUser] = useState(false);
    const [modalInfoUser, setModalInfoUser] = useState(false);
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
        dispatch(actions.editUser({
            id: userEdit.id,
            email : data.email,
            username : data.username,
            address : data.address,
            phoneNumber : data.phoneNumber,
            roleId : data.roleId,
            positionId : data.positionId,
            gender : data.gender,
            image : data.previewImgURL,
            previewImgURL: data.previewImgURL
        }));
    }

    //info user
    const handleInfoUser=(user)=>{
        setInfoUser(user);
        setModalInfoUser(!modalInfoUser);
    }

    return (
        <div className="mx-2">
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

            <InfoUser
                isOpen={modalInfoUser} 
                toggleModal={handleInfoUser}
                details={infoUser}
            />
            
            <div className="h5 text-dark mb-4">Quản lý thành viên</div>

            <div className="d-flex mb-3 justify-content-between">
                <button onClick ={() => handleAddNewUser()}  type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus mr-2"></i> Thêm thành viên
                </button>
            </div>
            
            <div className="text-dark">Danh sách thành viên  (<b>{listUsers.length}</b>) </div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <th scope="col">Tick</th>
                        <th scope="col">STT</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số ĐT</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Giới tính</th>
                        <th scope="col">TuổI</th>
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
                                    <th scope='row'>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </th>
                                    <td>{index + 1}</td>
                                    <td style={{width:'6%'}}><img src={item.image} className='w-100 rounded-circle' alt="" /> </td>
                                    <td className='text-primary'>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.address}</td>
                                    <td>{item.gender}</td>
                                    <td>24</td>
                                    <td>{item.roleId}</td>
                                    <td>{item.positionId}</td>
                                    <td>
                                        <button onClick={()=> handleInfoUser(item)} type="button" className="btn text-success">
                                            <i className="fas fa-info-circle"></i>
                                        </button>
                                        <button onClick={()=> handleEditUser(item)} type="button" className="btn text-primary mx-2">
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
