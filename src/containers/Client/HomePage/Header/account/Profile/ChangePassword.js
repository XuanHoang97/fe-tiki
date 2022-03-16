import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ChangePass } from 'services/authService';

const ChangePassword = () => {
    const { register, formState: { errors }, reset,  handleSubmit } = useForm();
    const user = useSelector(state => state.auth.user);

    const [errOldPass, setErrOldPass] = useState('');
    const [errConfirmPass, setErrConfirmPass] = useState('');
    const [loading, setLoading] = useState(false);

    // Change password
    const changePass = async(data) => {
        try{
            let res = await ChangePass({
                id: user.id,
                oldPassword: data.password,
                newPassword: data.newPassword,
                confirmPassword: data.confirmPassword
            });

            if(res.result.errCode === 0){
                setLoading(true);
                setTimeout(() => {
                    toast.success(res.result.errMessage);
                    reset();
                    setLoading(false);
                }, 2000);
            }

            if(res.result.errCode === 1){
                setErrOldPass(res.result.errMessage);
            }
            if(res.result.errCode === 2){
                setErrConfirmPass(res.result.errMessage);
            }
        }catch(err){
            console.log('err:', err);
        }
    }

    return (
        <div>
            <h5>Đổi Mật Khẩu </h5>
            <span className='text-secondary'>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</span>
            <hr/>

            <form className='d-flex my-4' onSubmit={handleSubmit(changePass)}>
                <div className='col-8 p-0'>
                    <div className='form-group d-flex'>
                        <label className='col-3 p-0'>Mật khẩu hiện tại</label>
                        <div className='col-9 p-0'> 
                            <input type="password" className="form-control" 
                                {...register('password', 
                                    { 
                                        required: true,
                                    })
                                }
                            />
                            {errOldPass ? <span className='text-danger'>{errOldPass}</span> : ''}
                            <div className='text-danger'>{errors.password?.type=== 'required' && "Vui lòng nhập mật khẩu"}</div>
                        </div>
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3 p-0'>Mật khẩu mới</label>
                        <div className='col-9 p-0'> 
                            <input type="password" className="form-control" 
                                {...register('newPassword', 
                                    { 
                                        required: true,

                                    })
                                }
                            />
                            <div className='text-danger'>{errors.newPassword?.type=== 'required' && "Vui lòng nhập mật khẩu"}</div>
                        </div>
                    </div>

                    <div className='form-group d-flex'>
                        <label className='col-3 p-0'>Xác nhận mật khẩu</label>
                        <div className='col-9 p-0'> 
                            <input type="password" className="form-control" 
                                {...register('confirmPassword', 
                                    { 
                                        required: true,

                                    })
                                }
                            />
                            {errConfirmPass ? <span className='text-danger'>{errConfirmPass}</span> : ''}
                            <div className='text-danger'>{errors.confirmPassword?.type=== 'required' && "Vui lòng nhập mật khẩu"}</div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {
                            loading ?
                            <div className='d-flex align-items-center justify-content-center'>
                                <div className="spinner-border spinner-border-sm text-light">
                                </div>
                                <span className="ml-3">Đang cập nhật...</span>
                            </div>
                            :
                            'Đổi mật khẩu'
                        }
                        </button>
                </div>
                <div className='col-4 text-secondary'><span>Quên mật khẩu ?</span></div>
            </form>
        </div>
    );
}
export default ChangePassword;