import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CommonUtils} from "../../../utils"

import _ from 'lodash';
import * as actions from '../../../store/actions';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: '',
            genderArr: [],
            roleArr: [],
            positionArr: [],
            previewImgURL: '',

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender : '',
            roleId : '',
            positionId: ''
        }

    }

    componentDidMount() {
        let user =this.props.currentUser;
        if(user && !_.isEmpty(user)){
            //fix bug buffer
            let imageBase64='';
            if(user.image){
                imageBase64= new Buffer(user.image, 'base64').toString('binary');
            }
            // fill info user to edit
            this.setState({  
                id: user.id,  
                email: user.email,
                password: 'harcode',
                firstName: user.firstName,
                lastName:user.lastName,
                address: user.address,
                phoneNumber: user.phoneNumber,

                gender: user.gender,
                roleId: user.roleId,
                positionId: user.positionId,
                previewImgURL: imageBase64,

            });
        }
        this.props.getGenderStart();
        this.props.getRoleStart();
        this.props.fetchPosition();
    }

    // render data when change props
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.genderRedux !== this.props.genderRedux){
            this.setState({
                genderArr: this.props.genderRedux,
            })
        }

        if(prevProps.roleRedux !== this.props.roleRedux){
            this.setState({
                roleArr: this.props.roleRedux,
            })
        }

        if(prevProps.positionRedux !== this.props.positionRedux){
            this.setState({
                positionArr: this.props.positionRedux,
            })
        }

    }

    toggle =()=>{
        this.props.toggleFromParent();
    }

    onChangeInput=(e, id)=>{
        let copyState={...this.state}
        copyState[id]=e.target.value;
        this.setState({
            ...copyState
        });
    }

    checkValidateInput=()=>{
        let isValid=true;
        let arrInput=['email', 'firstName', 'lastName', 'address']
        for(let i=0; i<arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid=false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    //upload file
    handleOnchangeImage=async(e)=>{
        let data=e.target.files;
        let file=data[0];
        if(file){
            let base64=await CommonUtils.getBase64(file);
            
            let objectUrl=URL.createObjectURL(file)
            this.setState({
                previewImgURL: objectUrl,
                avatar: base64
            })
        }

    }

    handleSaveUser=()=>{
        let isValid=this.checkValidateInput();
        if(isValid===true){
            this.props.editUser(this.state);
            this.props.toggleFromParent();
        }
    }

    render() {
        let {genderArr, roleArr, positionArr, email, firstName, lastName,
            phoneNumber, address, gender, roleId, positionId, previewImgURL}=this.state;

        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={()=>this.toggle()} 
                className={'modal-user-container'}
                size="lg"
            >
                
                <ModalHeader toggle={()=>this.toggle()}>Cập nhật thành viên</ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input onChange={(e)=>this.onChangeInput(e, "email")} value={email} type="email" className="form-control" />
                                </div>

                                <div className="form-group col-md-3">
                                    <label>Ảnh đại diện</label>
                                    <input id="previewImg" type="file" hidden 
                                    onChange={(e)=>this.handleOnchangeImage(e, 'previewImgURL')} 
                                    />

                                    <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                                
                                </div>


                                <div className="preview-image col-md-2 border" 
                                    style={{backgroundImage: `url(${previewImgURL})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                                >
                                    {
                                    previewImgURL ?
                                    <div onClick={() => this.removeImg()} className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                        <i className="far fa-times-circle text-danger"></i>
                                    </div> : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-100" alt="..." />
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Họ </label>
                                    <input onChange={(e)=>this.onChangeInput(e, "firstName")} value={firstName} type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Đệm</label>
                                    <input onChange={(e)=>this.onChangeInput(e, "lastName")} value={lastName} type="text" className="form-control" />
                                </div>
                            </div>
                            
                            .<div className="row">    
                                <div className="form-group col-6">
                                    <label>Địa chỉ</label>
                                    <input onChange={(e)=>this.onChangeInput(e, "address")} value={address} type="text" className="form-control" />
                                </div>

                                <div className="form-group col-6">
                                    <label>Số điện thoại</label>
                                    <input onChange={(e)=>this.onChangeInput(e, "phoneNumber")} value={phoneNumber} type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Giới tính</label>
                                    <select className="form-control"
                                        onChange={(e) => this.onChangeInput(e, 'gender')}
                                        value={gender}
                                    >
                                        {
                                            genderArr && genderArr.length >0 &&
                                            genderArr.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.ValueVi}>{item.valueVi}</option>
                                                )
                                            })
                                        }           
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Vai trò</label>
                                    <select className="form-control"
                                        onChange={(e) => this.onChangeInput(e, 'roleId')}
                                        value={roleId}
                                    >
                                        {
                                            roleArr && roleArr.length >0 &&
                                            roleArr.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                                )
                                            })
                                        }           
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Chức danh</label>
                                    <select className="form-control"
                                        onChange={(e) => this.onChangeInput(e, 'positionId')}
                                        value={positionId}
                                    >
                                        {
                                            positionArr && positionArr.length >0 &&
                                            positionArr.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                                )
                                            })
                                        }           
                                    </select>
                                </div>
                            </div>

                        </form>
                        
                    </div>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={()=>this.handleSaveUser()} color="primary" className="px-3">Cập nhật</Button>{' '}
                    <Button color="secondary" className="px-3" onClick={()=>this.toggle()}>Huỷ</Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
        genderRedux: state.admin.genders,
        roleRedux: state.admin.roles,
        listUsers: state.admin.users,
        positionRedux: state.admin.positions,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: ()=> dispatch(actions.fetchGenderStart()),
        getRoleStart: ()=> dispatch(actions.fetchRoleStart()),
        fetchPosition: ()=> dispatch(actions.fetchPositionStart()),

        fetchUserRedux: ()=> dispatch(actions.fetchAllUsersStart()),
        createNewUser: (data)=> dispatch(actions.createNewUser(data)),
        editUserRedux: (user) => dispatch(actions.editUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
