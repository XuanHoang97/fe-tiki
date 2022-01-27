import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { path } from 'utils';
import axios from 'axios';
import { toast } from 'react-toastify';
 
const Login = (props) => {
    const {isLogin, toggle} = props;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const toggleModal = () => {
        toggle();
    }
    
    //Login
    const login = async (data) => {
        try {
            await axios.post(`${path.PORT}/auth/login`, {
                email: data.email,
                password: data.password
            });
            toast.success("Đăng nhập thành công");
            window.location.reload();
            toggle();
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            }
        }
    }
 
    return (
        <Modal isOpen={isLogin} toggle={()=>toggleModal()} size="lg">   
            <ModalHeader toggle={()=>toggleModal()} >Có Tiki - mua sắm Mê li</ModalHeader>
            <ModalBody>
                <div className="row m-0 p-0">
                    <div className="col-md-8 p-3">
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
                            
                            <div className="form-group password" style={{position: 'relative', cursor: 'pointer'}}>
                                <input type="Password" className="form-control password mt-3" placeholder="Nhập mật khẩu" 
                                    {...register('password', { required: true })}
                                />
                                <div className='text-danger'>{errors.password?.type === 'required' && "Vui lòng nhập mật khẩu"}</div>
                                <span>
                                    <i className="far fa-eye text-secondary" style={{position: 'absolute', top: '10px', right: '10px'}}></i>      
                                </span>
                            </div>

                            <button type="submit" className="btn btn-success mt-3 mb-1 btn-smd btn-block">Đăng nhập</button>

                            <span className='text-primary small text-end'>Chưa có tài khoản ?</span> 
                            <div className="text-center mt-3 mb-2 small">Hoặc Tiếp tục bằng</div>
                            <div className="login-social d-flex justify-content-center">
                                <div className="item-social" style={{width: '10%'}}>
                                    <Link to={path.HOMEPAGE}><img className="w-75" src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="" /></Link>
                                </div>

                                <div className="item-social" style={{width: '10%'}}>
                                    <Link to={path.HOMEPAGE}><img className="w-75" src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="" /></Link>
                                </div>

                                <div className="item-social" style={{width: '10%'}}>
                                    <Link to={path.HOMEPAGE}><img className="w-75" src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="small mt-2 m-3 text-center">Bằng việc tiếp tục, bạn đã chấp nhận <Link to={path.HOMEPAGE}>điều khoản sử dụng</Link> </div>         
                        </form>
                    </div>

                    <div className="col-md-4 pt-5 text-center" style={{background: 'linear-gradient(136deg, rgb(240, 248, 255) -1%, rgb(219, 238, 255) 85%)' }}>
                        <img className="w-75" src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png" alt="" />
                        <h6 className="mt-4 ">Mua sắm tại Tiki</h6>
                        <p className="small">Siêu ưu đãi mỗi ngày</p>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}
export default Login