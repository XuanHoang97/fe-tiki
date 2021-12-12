import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CRUD_ACTIONS, CommonUtils} from "../../../utils"

import _ from 'lodash';
import * as actions from '../../../store/actions';

class InfoUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }

    }


    toggle =()=>{
        this.props.toggleFromParent();
    }


    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={()=>this.toggle()} 
                className={'modal-user-container'}
                size="md"
            >
                
                <ModalHeader toggle={()=>this.toggle()}>Thông tin thành viên</ModalHeader>
                <ModalBody>
                   <div className="text-center py-2" style={{background: `url("https://png.pngtree.com/thumb_back/fw800/back_pic/03/57/04/33579fed2bb5808.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>                        
                        <img src="http://sun9-67.userapi.com/c10774/g34624437/a_c5d09208.jpg" className="w-25 rounded-circle border border-success" style={{height: '120px'}} alt="" />
                        <div className="mt-2 h4 font-weight-bold">Elle Fanning </div>
                        <div className="d-flex justify-content-center text-white" style={{gap : '20px'}}>
                            <span className=""><i class="fas fa-circle mr-1 small text-danger"></i>Nữ</span>
                            <span className=""><i class="fas fa-circle mr-1 small text-info"></i>24 Tuổi</span>
                            <span className=""><i class="fas fa-circle mr-1 small text-success"></i>Bán hàng</span>
                            <span className=""><i class="fas fa-circle mr-1 small text-warning"></i>100 P</span>
                        </div>
                   </div>
                    <div className="mt-3 mx-5 justify-content-center" style={{display: 'grid',}}>
                        <div className=""><b>Email</b>: Angel@gmail.com </div>
                        <div className="my-2"><b>Liên hệ</b>: 0987654321 </div>
                        <div className=""><b>Địa chỉ</b>: Hà Nội </div>
                        <div className="my-2"><b>Sở thích</b>: Xem phim, nghe nhạc... </div>
                        <div className=""><b>Giới thiệu</b>: Beautiful, smart, personality, independence... </div>
                    </div>
                </ModalBody>

                <ModalFooter className="d-flex justify-content-between">
                    <Button color="info " className="px-3 btn-sm" onClick={()=>this.toggle()}><i className="fas fa-print mr-2"></i>In profile</Button>
                    <Button color="secondary" className="px-3 btn-sm" onClick={()=>this.toggle()}>Đóng</Button>
                </ModalFooter>
            </Modal>
        )
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
        getGenderStart: ()=> dispatch(actions.fetchGenderStart()),
        getRoleStart: ()=> dispatch(actions.fetchRoleStart()),
        fetchUserRedux: ()=> dispatch(actions.fetchAllUsersStart()),
        createNewUser: (data)=> dispatch(actions.createNewUser(data)),
        editUserRedux: (user) => dispatch(actions.editUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoUser);
