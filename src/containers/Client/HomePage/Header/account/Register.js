import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { path } from 'utils';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import { registerAcc } from 'services/authService';
import { toast } from 'react-toastify';
import './style.scss'

const Register = (props) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [err, setErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const history = useHistory();

    //register
    const signUp = async(data) => {
        try {
            let res = await registerAcc(data);
            if(res.data.status === 200) {
                toast.success('Đăng ký thành công');
                history.push(`${path.LOGIN_AUTH}`);
            }else if(res.data.status === 201) {
                setErr(res.data.errMessage);
            }
        } catch (error) {
            console.log('error:', error);
        }
    }  

    const handleShowPass = () => {
        setShowPass(!showPass);
    }

    useEffect(() => {
        document.title = 'Đăng ký';
    }, [])

    return (
        <div>
            <div className='menuAuth'>
                <div className='d-flex align-items-center'>
                    <Link to={path.HOMEPAGE}  className='w-25'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOalO4LbzM8rEMLzCO2rvdXbFKHOqJRcRaZ-FuU3uFMfuCKf9Xjh5sAa58M7YKepoYXMY&usqp=CAU" alt="" />
                    </Link>
                    <div className='ml-3'style={{fontSize: '20px'}}>Đăng ký</div>
                </div>
                <span className='text-primary'>Cần trợ giúp ?</span>
            </div>

            <div className="register">
                <div className="bgRegister col-md-8">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFcGvp7AOiZTesQCIXyZ8Wnh9WyQKUzDDjA&usqp=CAU" alt="" 
                        className='w-100'
                    />
                </div>

                <div className="formRegister col-md-4 p-4 bg-white">
                    <form className="form-group" onSubmit={handleSubmit(signUp)}>
                        <h4 htmlFor="" className='mb-4'>Đăng ký</h4>
                        <input type="text" className="form-control name" placeholder="Nhập họ và tên..." 
                            {...register('username', { required: true })}
                        />
                        <div className='text-danger'>{errors.username?.type === 'required' && "Vui lòng nhập họ tên"}</div>
                        <div className='mb-3'></div>

                        <input type="text" className="form-control email" placeholder="Nhập email..." 
                            {...register('email', { 
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            })}
                        />
                        <div className='text-danger'>{errors.email?.type === 'required' && "Vui lòng nhập email"}</div>
                        <div className='text-danger'>{errors.email?.type === 'pattern' && "Email không hợp lệ"}</div>
                        {err && <div className='text-danger'>{err}</div>}
                        <div className='mb-3'></div>
                        
                        <div className="form-group password">
                            <input type={showPass ? 'text' : 'password'} className="form-control" placeholder="Nhập mật khẩu" 
                                {...register('password', { required: true })}
                            />
                            <div className='text-danger'>{errors.password?.type === 'required' && "Nhập mật khẩu"}</div>
                            <span onClick={()=> handleShowPass()}>
                                {
                                    showPass ? 
                                    <i className="showPass fas fa-eye"></i>:
                                    <i className="showPass fas fa-eye-slash"></i>
                                }
                            </span>
                        </div>

                        <button type="submit"  className="btn btn-success mt-3 mb-1 btn-block">Đăng ký</button>
                        <Link to={path.LOGIN_AUTH} className='text-primary small'>Đã có tài khoản ?</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;