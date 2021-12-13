import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import InfoUser from './InfoUser';
import * as actions from '../../../store/actions';
import Sort from './Sort';
import Pagination from './Pagination';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            isOpenModalInfoUser: false,
            userEdit: '',
            selectInfoUser: [],

            users: [],
            searchUser: '',
            sortUser: '',
        }
    }

    // fetch all user  
    componentDidMount() {
        this.props.fetchUser()
    }

    //compare state_old vs state_present
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                users: this.props.listUsers
            })
        }
    }

    //OPEN MODAL View, Create, Edit User
    toggleUserModal=()=> {
        this.setState({
            isOpenModalUser:  !this.state.isOpenModalUser,
        })
    }

    toggleUserEditModal=()=>{
        this.setState({
            isOpenModalEditUser:  !this.state.isOpenModalEditUser,
        })
    }

    toggleInfoModal=()=> {
        this.setState({
            isOpenModalInfoUser:  !this.state.isOpenModalInfoUser,
        })
    }
    
    // Create users
    handleAddNewUser=()=> {
        this.setState({
            isOpenModalUser:  true,
        })
    }

    createNewUser=(data)=> {
        this.props.createNewUser({data});
    }

    //delete user 
    deleteUser=(user)=>{
        this.props.deleteUserRedux(user.id);
    }

    //edit user
    handleEditUser=(user)=>{
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user,
        })
    }

    editUser=(data)=>{
        this.props.editUserRedux({
            id: data.id,
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            roleId: data.roleId,
            avatar: data.avatar,
        });
    }

    //info user
    handleInfoUser=(user)=>{
        this.setState({
            selectInfoUser: user,
            isOpenModalInfoUser: true,
        })
    }

    //search user
    onSearch = (searchUser) => {
        this.setState({ searchUser });
    };

    //sorting user
    sorting = (e) => {
        const sorting = e.target.value;
        const { users } = this.state;

        const sortRes = users.sort((a, b) => {
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
        this.setState({
            sortUser: sorting,
            users: sortRes
        });
    };

    render() {
        const {users, searchUser, sortUser} = this.state;

        return (
            <div className="mx-2">
                <ModalUser
                    isOpen={this.state.isOpenModalUser} 
                    toggleFromParent={this.toggleUserModal} 
                    createNewUser={this.createNewUser}
                />

                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser} 
                        toggleFromParent={this.toggleUserEditModal} 
                        currentUser={this.state.userEdit}
                        editUser={this.editUser}
                    />
                }

                <InfoUser
                    isOpen={this.state.isOpenModalInfoUser} 
                    toggleFromParent={this.toggleInfoModal} 
                    details={this.state.selectInfoUser}
                />
                
                <div className="h5 text-dark mb-4">Quản lý thành viên</div>

                <div className="d-flex mb-3 justify-content-between">
                    <button onClick ={() => this.handleAddNewUser()}  type="button" className="btn btn-success col-2">
                        <i className="fas fa-plus mr-2"></i> Thêm thành viên
                    </button>

                    <Sort searchUser={searchUser} onSearch={this.onSearch} sorting={this.sorting}
                    sorts={sortUser} />
                </div>
                
                {/* list user  */}
                <div className="text-dark">Danh sách thành viên 
                    (<b>{users.filter((item) => `${item.firstName} ${item.lastName}`.toUpperCase().includes(searchUser.toUpperCase())).length}</b>)
                </div>

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
                        users && users.length >0 &&
                        users.filter((item) => `${item.firstName} ${item.lastName}`.toUpperCase().includes(searchUser.toUpperCase()))
                        .map((item, index) => {
                            //endCode image
                            let imageBase64='';
                            if(item.image){
                                imageBase64=new Buffer(item.image, 'base64').toString('binary')
                            }

                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>
                                            <div className="form-group">
                                                <input type="checkbox" className="w-100" />
                                            </div>
                                        </td>
                                        <td>{index + 1}</td>
                                        <td style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '45px',
                                        width: '45px', borderRadius: '50%', display: 'flex', margin: '0 auto'}}></td>
                                        <td>{item.firstName} {item.lastName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.address}</td>
                                        <td>{item.gender}</td>
                                        <td>24</td>
                                        <td>{item.roleId}</td>
                                        <td>Updating...</td>
                                        <td>
                                            <button onClick={()=> this.handleInfoUser(item)} type="button" className="btn text-success">
                                                <i className="fas fa-info-circle"></i>
                                            </button>
                                            <button onClick={()=> this.handleEditUser(item)} type="button" className="btn text-primary mx-2">
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button onClick={()=> this.deleteUser(item)} type="button" className="btn text-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }

                    {   
                        users && users.length ===0 &&
                        <tbody>
                            <tr><td className="">Không có dữ liệu</td></tr> 
                        </tbody> 
                    }
                </table>

                <Pagination />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUser: ()=> dispatch(actions.fetchAllUsersStart()),
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
        editUserRedux: (data) => dispatch(actions.editUser(data)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
