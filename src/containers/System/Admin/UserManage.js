import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModalUser from './ModalUser';
import TableUser from './TableUser';
import * as actions from '../../../store/actions';
import {CRUD_ACTIONS, CommonUtils} from "../../../utils"

class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModalUser: false,
            action: '',
        }
    }

    // Create users (CREATE)
    handleAddNewUser=()=> {
        this.setState({
            isOpenModalUser:  true,
        })
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

    //fire redux create user
    createNewUser=(data)=> {
        this.props.createNewUser({data });
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
                
                <div className="h5 text-dark mb-4">Quản lý thành viên</div>

                <div className="d-flex mb-3">
                    <button onClick ={() => this.handleAddNewUser()}  type="button" className="btn btn-success col-2">
                        <i className="fas fa-plus mr-2"></i> Add new user
                    </button>

                    <div className="input-group col-6">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-success px-2"><i className="fas fa-search"></i></button>
                        </div>
                    </div>

                    <div className="form-group d-flex col-4 pr-0">
                        <label className="col-3 p-0">Sắp xếp</label>
                        <select className="form-control col-9" name="" id="">
                            <option>All</option>
                            <option>Low</option>
                            <option>Hight</option>
                        </select>
                    </div>

                </div>

                <TableUser />

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
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: (data)=> dispatch(actions.createNewUser(data)),
        getGenderStart: ()=> dispatch(actions.fetchGenderStart()),
        getRoleStart: ()=> dispatch(actions.fetchRoleStart()),
        fetchUserRedux: ()=> dispatch(actions.fetchAllUsersStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
