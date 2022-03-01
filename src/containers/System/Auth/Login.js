import React, {useState} from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import './Login.scss';
import { handleLoginApi } from 'services/userService';
import { userLoginSuccess } from 'store/actions';

const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errMessage, setErrMessage] = useState('');

    //login
    const handleLogin=async()=>{
        setErrMessage('');

        try{
            let data= await handleLoginApi(userName, password);
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
                            value={userName}
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
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSuccess: (userInfo) => dispatch(userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
