import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useForm } from "react-hook-form";
import { path } from 'utils';
import axios from "axios";
import { toast } from 'react-toastify';

const Register = (props) => {
    const {isRegister, toggle} = props;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const toggleModal = () => {
        toggle();
    }

    //register
    const signUp = async(data) => {
        console.log(data);
        try {
            await axios.post(`${path.PORT}/auth/register`, {
                username: data.Username,
                email: data.Email,
                password: data.Password,
            });
            toast.success("Đăng ký thành công");
            toggle();
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.msg);
            }
        }
    }  

    return (
        <div>
            <Modal isOpen={isRegister} toggle={()=>toggleModal()} size="lg">   
                <ModalHeader toggle={()=>toggleModal()} >Có Tiki - mua sắm Mê li</ModalHeader>
                <ModalBody>
                    <div className="row m-0 p-0">
                        <div className="col-md-8 p-3">
                            <form className="form-group" onSubmit={handleSubmit(signUp)}>
                                <h4 htmlFor="" className='mb-4'>Tạo tài khoản</h4>
                                <input type="text" className="form-control name" placeholder="Nhập họ và tên..." 
                                    {...register('Username', { required: true })}
                                />
                                <div className='text-danger'>{errors.name?.type === 'required' && "Vui lòng nhập họ tên"}</div>

                                <input type="text" className="form-control email my-3" placeholder="Nhập email..." 
                                    {...register('Email', { 
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    })}
                                />
                                <div className='text-danger'>{errors.email?.type === 'required' && "Vui lòng nhập email"}</div>
                                <div className='text-danger'>{errors.email?.type === 'pattern' && "Email không hợp lệ"}</div>
                                
                                <div className="form-group password" style={{position: 'relative', cursor: 'pointer'}}>
                                    <input type="Password" className="form-control password" placeholder="Nhập mật khẩu" 
                                        {...register('Password', { required: true })}
                                    />
                                    <div className='text-danger'>{errors.password?.type === 'required' && "Vui lòng nhập mật khẩu"}</div>
                                    <span>
                                        <i className="far fa-eye text-secondary" style={{position: 'absolute', top: '10px', right: '10px'}}></i>      
                                    </span>
                                </div>

                                <button type="submit"  className="btn btn-success mt-3 mb-1 btn-smd btn-block">Đăng ký</button>
                                <span className='text-primary small text-end'>Đã có tài khoản ?</span>
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
        </div>
    );
}
export default Register;