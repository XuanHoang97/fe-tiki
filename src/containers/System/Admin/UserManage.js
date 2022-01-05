import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import InfoUser from './InfoUser';
import * as actions from '../../../store/actions';
import Sort from './Sort';
import Pagination from './Pagination';

const UserManage = (props) => {
    const [users, setListUsers] = useState([]);
    const [searchUser, setSearchUser] = useState('');
    const [sortUser, setSortUser] = useState('role');
    const [selectInfoUser, setSelectInfoUser] = useState([]);
    const [isOpenModalUser, setIsOpenModalUser] = useState(false);
    const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);
    const [isOpenModalInfoUser, setIsOpenModalInfoUser] = useState(false);
    const [userEdit, setUserEdit] = useState('');


    //fetch data
    const dispatch = useDispatch();
    const listUsers = useSelector(state => state.admin.users);


    useEffect(() => {
        dispatch(actions.fetchAllUser());
    }, [dispatch]);

    //OPEN MODAL View, Create, Edit User
    const toggleUserModal=()=> {
        setIsOpenModalUser(!isOpenModalUser);
    }

    const toggleUserEditModal=()=>{
        setIsOpenModalEditUser(!isOpenModalEditUser);
    }

    const toggleInfoModal=()=> {
        setIsOpenModalInfoUser(!isOpenModalInfoUser);
    }
    
    // Create users
    const handleAddNewUser=()=> {
        setIsOpenModalUser(true);
    }

    const AddNewUser=(data)=> {
        dispatch(actions.createNewUser(data));
    }

    //delete user 
    const deleteUser=(user)=>{
        dispatch(actions.deleteUser(user.id));
    }

    //edit user
    const handleEditUser=(user)=>{
        setUserEdit(user);
        setIsOpenModalEditUser(true);
    }

    const editUser=(data)=>{
        dispatch(actions.editUser(data));
    }

    //info user
    const handleInfoUser=(user)=>{
        setSelectInfoUser(user);
        setIsOpenModalInfoUser(true);
    }

    //search user
    const onSearch = (searchUser) => {
        setSearchUser(searchUser);
    };

    //sorting user
    const sorting = (e) => {
        const sorting = e.target.value;
        const sortRes = listUsers.sort((a, b) => {
            if (sorting === "role") {
                return a.id > b.id ? 1 : -1;
            }

            if (sorting === "admin") {
                return a.roleId < b.roleId ? 1 : -1;
            }

            if (sorting === "seller") {
                return a.roleId > b.roleId ? 1 : -1;
            }

            if (sorting === "user") {
                return a.roleId > b.roleId ? 1 : -1;
            }
        });
        setSortUser(sorting);
        setListUsers(sortRes);
    };
    const filterUser =listUsers.filter((item) => `${item.firstName} ${item.lastName} ${item.address}`.toLowerCase().includes(searchUser.toLowerCase()));

    return (
        <div className="mx-2">
            <ModalUser
                isOpen={isOpenModalUser} 
                toggleFromParent={toggleUserModal} 
                AddNewUser={AddNewUser}
            />

            {
                isOpenModalEditUser &&
                <ModalEditUser
                    isOpen={isOpenModalEditUser} 
                    toggleFromParent={toggleUserEditModal} 
                    currentUser={userEdit}
                    editUser={editUser}
                />
            }

            <InfoUser
                isOpen={isOpenModalInfoUser} 
                toggleFromParent={toggleInfoModal} 
                details={selectInfoUser}
            />
            
            <div className="h5 text-dark mb-4">Quản lý thành viên</div>

            <div className="d-flex mb-3 justify-content-between">
                <button onClick ={() => handleAddNewUser()}  type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus mr-2"></i> Thêm thành viên
                </button>
                <Sort searchUser={searchUser} onSearch={onSearch} sorting={sorting} sorts={sortUser} />
            </div>
            
            {/* list user  */}
            <div className="text-dark">Danh sách thành viên  (<b>{filterUser.length}</b>) </div>

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
                    filterUser.map((item, index) => {
                        //endCode image
                        let imageBase64='';
                        if(item.image){
                            imageBase64=new Buffer(item.image, 'base64').toString('binary')
                        }

                        return (
                            <tbody key={index}>
                                <tr>
                                    <th scope='row'>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </th>
                                    <td>{index + 1}</td>
                                    <td style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '45px',
                                    width: '45px', borderRadius: '50%', display: 'flex', margin: '0 auto'}}></td>
                                    <td className='text-primary'>{item.firstName} {item.lastName}</td>
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
            <Pagination />
        </div>
    );
}
export default UserManage;
