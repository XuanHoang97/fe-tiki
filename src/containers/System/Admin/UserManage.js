import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import InfoUser from './InfoUser';
import TableUser from './TableUser';
import * as actions from '../../../store/actions';
import Search from './Search';
import Sort from './Sort';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            isOpenModalInfoUser: false,
            userEdit: '',
            selectInfoUser: []
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
        console.log('detail user from parent: ', user);
    }

    render() {
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

                <div className="d-flex mb-3">
                    <button onClick ={() => this.handleAddNewUser()}  type="button" className="btn btn-success col-2">
                        <i className="fas fa-plus mr-2"></i> Thêm thành viên
                    </button>

                    <Search />
                    <Sort />
                </div>

                <TableUser deleteUser ={this.deleteUser} handleEditUser ={this.handleEditUser} handleInfoUser ={this.handleInfoUser}  />

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
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteUserRedux: (id) => dispatch(actions.deleteUser(id)),
        editUserRedux: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
