import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { path } from 'utils';
import {useHistory} from 'react-router-dom';
import { loginAcc } from 'services/authService';
import './style.scss'
import instance from './../../../../axios';
import { useDispatch } from 'react-redux';
import { getUser } from 'store/actions';
 
const LoginAuth = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [errMail, setErrMail] = useState('');
    const [errPass, setErrPass] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    //Login
    const login = async (data) => {
        try{
            let res = await loginAcc(data); 
            setLoading(true);
            const user = await instance.get(`/user`,{
                headers: {
                    'Authorization': `Bearer ${res.data.accessToken}`
                }
            })
            dispatch(getUser(user))
            setTimeout(() => {
                if(res.data.status === 200) {
                    history.push(`${path.HOMEPAGE}`);
                }
                setLoading(false);
            }, 2000);
            localStorage.setItem('token', res.data.accessToken);
        }catch(error){
            if (error?.response?.status === 400) {
                setErrPass(error.response?.data.errMessage);
            }else{
                setErrMail(error.response?.data.errMessage);
            }
        }
    }
 
    return (
        <div className=''>
            <div className='menu d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <Link to={path.HOMEPAGE}  className='w-25'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOalO4LbzM8rEMLzCO2rvdXbFKHOqJRcRaZ-FuU3uFMfuCKf9Xjh5sAa58M7YKepoYXMY&usqp=CAU" alt="" />
                    </Link>
                    <div className='ml-3'style={{fontSize: '20px'}}>Đăng nhập</div>
                </div>
                <span className='text-primary'>Cần trợ giúp ?</span>
            </div>
            <div className="loginAuth d-flex justify-content-end">
                <div className="col-8 p-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFcGvp7AOiZTesQCIXyZ8Wnh9WyQKUzDDjA&usqp=CAU" alt="" 
                        className='w-100'
                    />
                </div>

                <div className="col-md-4 bg-white p-4">
                    <form className="form-group" onSubmit={handleSubmit(login)}>
                        <h4 htmlFor="" className='mb-4'>Đăng nhập </h4>
                        <input type="text" className="form-control email" placeholder="Nhập email..." 
                            {...register('email', { 
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            })}
                        />
                        <div className='text-danger'>{errors.email?.type === 'required' && "Vui lòng nhập email"}</div>
                        <div className='text-danger'>{errors.email?.type === 'pattern' && "Email không hợp lệ"}</div>
                        {errMail && <div className='text-danger'>{errMail}</div>}
                        
                        <div className="form-group password" style={{position: 'relative', cursor: 'pointer'}}>
                            <input type={showPass ? 'text' : 'password'} className="form-control mt-3" placeholder="Nhập mật khẩu" 
                                {...register('password', { required: true })}
                            />
                            <div className='text-danger'>{errors.password?.type === 'required' && "Vui lòng nhập mật khẩu"}</div>

                            <span onClick={()=> setShowPass(!showPass)}>
                                {
                                    showPass ? 
                                    <i className="showPass fas fa-eye"></i>:
                                    <i className="showPass fas fa-eye-slash"></i>
                                }
                            </span>
                        </div>
                        {errPass && <div className='text-danger'>{errPass}</div>}

                        <button type="submit" className="btn btn-success mt-3 mb-1 btn-block">
                            {
                                loading ?
                                <div className='d-flex align-items-center justify-content-center bg-info'>
                                    <div className="spinner-border spinner-border-sm text-light">
                                    </div>
                                    <span className="ml-3">Đang đăng nhập...</span>
                                </div>
                                :
                                <span>Đăng nhập</span>
                            }
                        </button>

                        <Link to={path.REGISTER} className='text-primary small text-end'>Chưa có tài khoản ?</Link> 
                        <div className="text-center mt-3 mb-2 small">Hoặc Tiếp tục bằng</div>
                        <div className="login-social d-flex justify-content-center">
                            <div className="item-social">
                                <Link to={path.HOMEPAGE}><img src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="" /></Link>
                            </div>

                            <div className="item-social">
                                <Link to={path.HOMEPAGE}><img src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="" /></Link>
                            </div>

                            <div className="item-social">
                                <Link to={path.HOMEPAGE}><img src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="small mt-2 m-3 text-center">Bằng việc tiếp tục, bạn đã chấp nhận <Link to={path.HOMEPAGE}>điều khoản sử dụng</Link> </div>         
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginAuth