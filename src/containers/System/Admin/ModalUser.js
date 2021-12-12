import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CRUD_ACTIONS, CommonUtils} from "../../../utils"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';

class ModalUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            genderArr: [],
            roleArr: [],
            previewImgURL: '',

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            gender : '',
            roleId: '',
            avatar: '',
        }
    }

    //fetch data
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getRoleStart();
        this.props.fetchUserRedux();
    }

    toggle =()=>{
        this.props.toggleFromParent();
    }

    // render data 
    componentDidUpdate(prevProps, prevState, snapshot){
        //get data default select option
        if(prevProps.genderRedux !== this.props.genderRedux){
            let arrGenders=this.props.genderRedux
            this.setState({
                genderArr: arrGenders,
                gender: arrGenders && arrGenders.length>0 ? arrGenders[0].keyMap : ''
            })
        }

        if(prevProps.roleRedux !== this.props.roleRedux){
            let arrRoles=this.props.roleRedux
            this.setState({
                roleArr: arrRoles,
                role: arrRoles && arrRoles.length>0 ? arrRoles[0].keyMap :''
            })
        }

        //reset value after create success a new user
        if(prevProps.listUsers !== this.props.listUsers){
            let arrGenders=this.props.genderRedux
            let arrRoles=this.props.roleRedux
            
            this.setState({
                email: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                gender: arrGenders && arrGenders.length>0 ? arrGenders[0].keyMap : '',
                role: arrRoles && arrRoles.length>0 ? arrRoles[0].keyMap :'',
                avatar: '',
                action: CRUD_ACTIONS.CREATE,
                previewImgURL: ''
            })
        }
    }

    //onChange Fields
    onChangeInput=(e, id)=>{
        //good code
        let copyState={...this.state}
        copyState[id]=e.target.value;
        this.setState({
            ...copyState
        });
    }

    //validate 
    checkValidateInput=()=>{
        let isValid=true;
        let arrInput=['email', 'phoneNumber', 'firstName', 'lastName', 'address']
        for(let i=0; i<arrInput.length; i++){
            if(!this.state[arrInput[i]]){
                isValid=false;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    // add new user
    handleAddNewUser=()=>{
        let isValid=this.checkValidateInput();
        if(isValid===true){
            this.props.createNewUser(this.state);
            this.props.toggleFromParent();
        }        
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

    //remove image
    removeImg=()=>{
        this.setState({
            previewImgURL: '',
            avatar: ''
        })
    }

    render() {
        let {genderArr, roleArr, email, password, firstName, lastName,
            phoneNumber, address, gender, roleId, avatar}=this.state;
        
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={()=>this.toggle()} 
                className={'modal-user-container'}
                size="lg"
            >
                
                <ModalHeader toggle={()=>this.toggle()}>Thêm mới thành viên</ModalHeader>
                <ModalBody>
                        <form>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Email</label>
                                    <input onChange={(e)=>this.onChangeInput(e, "email")} value={email} type="email" className="form-control" />
                                </div>

                                <div className="form-group col-md-3">
                                    <label>Ảnh đại diện</label>
                                    <input id="previewImg" type="file" hidden 
                                    onChange={(e)=>this.handleOnchangeImage(e)} 
                                    />

                                    <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                                
                                </div>

                                <div className="preview-image col-md-2 border" 
                                    style={{backgroundImage: `url(${this.state.previewImgURL})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                                >
                                    {
                                    this.state.previewImgURL ?
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
                            </div>

                        </form>
                </ModalBody>

                <ModalFooter>
                    <Button onClick={()=>this.handleAddNewUser()} color="primary" className="px-3">
                        Thêm mới
                    </Button>
                    <Button color="secondary" className="px-3" onClick={()=>this.toggle()}>Cancel</Button>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
