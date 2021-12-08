// import React, { Component } from 'react';
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import './Login.scss';
import {handleLoginApi} from '../../services/userService';

const Login = (props) => {
    const [useName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    //login
    const handleLogin=async()=>{
        setErrMessage('');

        try{
            let data= await handleLoginApi(useName, password);
            if(data && data.data.errCode !==0){
                setErrMessage(data.data.errMessage);
            }
            if(data && data.data.errCode ===0){
                props.userLoginSuccess(data.user)
            }
        }catch(error){
            if(error.response){
                if(error.response.data){
                    setErrMessage(error.response.data.message);
                }
            }   
        }
    }

    //show-hide password
    const handleShowHidePassword=()=>{
        setIsShowPassword(!isShowPassword);
    }

    //press enter
    const handleKeyDown=(e)=>{
        if(e.key=== 'Enter' || e.keyCode=== 13){
            handleLogin();
        }
    }

    return (
        <div className="login-bg">
            <div className="login-container">
                <div className="login-content row">
                    <div className="login col-12 text-login"> Login </div>
                    <div className="col-12 form-group login-input">
                        <label>Username:</label>
                        <input type="text" className="form-control" 
                            placeholder="Enter your username..."
                            value={useName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    
                    <div className="col-12 form-group login-input">
                        <label>Password:</label>
                        <div className="custom-input-password">
                            <input type={isShowPassword ? 'text': 'password'}
                                className="form-control" 
                                placeholder="Enter your password... "
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e)=> handleKeyDown(e)}
                            /> 
                            <span onClick={()=> handleShowHidePassword()}>
                                <i className={isShowPassword ? "far fa-eye" : "far fa-eye-slash" }></i>      
                            </span>
                        </div>
                    </div>

                    <div className="col-12 text-danger">
                        {errMessage}
                    </div>

                    <div className="col-12">
                        <button className="btn-login" onClick={()=> handleLogin()}>Login</button>
                    </div>

                    <div className="col-12">
                        <span className="forgot-password small">Forgot for Password ?</span>
                    </div>

                    <div className="col-12 text-center mt-3">
                        <span className="text-other-login"> Or login with: </span>
                    </div>

                    <div className="col-12 social-login">
                        <i className="fab fa-google-plus-g google"></i>
                        <i className="fab fa-twitter twitter"></i>
                        <i className="fab fa-facebook-f facebook"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
