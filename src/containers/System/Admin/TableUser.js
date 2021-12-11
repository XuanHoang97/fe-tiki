import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

class TableUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
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

    //delete user 
    deleteUser=(user)=>{
        this.props.deleteUserRedux(user.id);
    }

    //edit user
    editUser=(user) =>{
        // this.props.editUserRedux(user);
        // this.props.
    }

    render() {
        const { users } = this.state;

        return (
            <>
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
                                            <button onClick={()=> this.editUser(item)} type="button" className="btn text-primary mx-3">
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
            </>
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
        editUserRedux: (user) => dispatch(actions.editUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUser);