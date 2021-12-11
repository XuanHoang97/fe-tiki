import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
// import TableUser from './TableUser';
import * as actions from '../../../store/actions';

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit: ''
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
            image: data.avatar
        });
    }

    render() {
        const { users } = this.state;

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
                
                <div className="h5 text-dark mb-4">Quản lý thành viên</div>

                <div className="d-flex mb-3">
                    <button onClick ={() => this.handleAddNewUser()}  type="button" className="btn btn-success col-2">
                        <i className="fas fa-plus mr-2"></i> Thêm thành viên
                    </button>

                    <div className="input-group col-6">
                        <input type="text" className="form-control" placeholder="Search..." />
                        <div className="input-group-append">
                            <button className="btn btn-success px-2"><i className="fas fa-search"></i></button>
                        </div>
                    </div>

                    <div className="form-group d-flex col-4 pr-0">
                        <label className="col-3 p-0">Sắp xếp</label>
                        <select className="form-control col-9" name="" id="">
                            <option>Tất cả</option>
                            <option>Theo vai trò</option>
                            <option>Theo tên</option>
                        </select>
                    </div>
                </div>

                {/* <TableUser /> */}
                <div className="text-dark">Danh sách thành viên (<b>{users.length}</b>)</div>

                <table className="table table-striped table-bordered table-hover">
                    <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                        <tr>
                            <th scope="col">Tick</th>
                            <th scope="col">STT</th>
                            <th scope="col">Ảnh đại diện</th>
                            <th scope="col">Họ và tên</th>
                            <th scope="col">Email</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Giới tính</th>
                            <th scope="col">Vai trò</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.length >0 &&
                            users.map((item, index) => {
                                let imageBase64='';
                                if(item.image){
                                    imageBase64=new Buffer(item.image, 'base64').toString('binary')
                                }

                                return (
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
                                        <td>{item.roleId}</td>
                                        <td>
                                            <button type="button" className="btn text-success">
                                                <i className="fas fa-info-circle"></i>
                                            </button>
                                            <button onClick={()=> this.handleEditUser(item)} type="button" className="btn text-primary mx-3">
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button onClick={()=> this.deleteUser(item)} type="button" className="btn text-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                                
                    </tbody>
                </table>

                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
        editUserRedux: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
