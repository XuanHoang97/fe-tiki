import React, {useState} from 'react';
import RegisterAccount from './Register';

const Account = () => {
    const [hoverAccount, setHoverAccount] = useState(false);
    const [Register, setRegister] = useState(false);

    //register account
    const register = () => {
        setRegister(!Register);
    }

    return (
        <React.Fragment>
            <span className='account d-flex align-items-center text-white px-4'
                onMouseEnter={() => setHoverAccount(true)}
            >
                <span>Tài khoản <i className="fas fa-sort-down"></i></span>
            </span>

            {hoverAccount && (
                <div className="user-account" style={{display: 'block'}}
                    onMouseLeave={() => setHoverAccount(false)}
                >
                    <div className="dropdown-item mb-2">
                        <button onClick={()=> register()} type="button" className="btn btn-warning btn-block">
                            Tạo tài khoản
                        </button>
                    </div>

                    <div className="dropdown-item mb-2">
                        <button type="button" className="btn btn-success btn-block">
                            Đăng nhập
                        </button>
                    </div>


                    <div className="dropdown-item mb-2">
                        <button type="button" name="" id="" className="d-flex align-items-center px-3 btn btn-primary btn-block">
                            <i className="fab fa-facebook-f mr-4"></i> <span>Đăng nhập bằng Facebook</span>
                        </button>
                    </div>

                    <div className="dropdown-item mb-2">
                        <button type="button" name="" id="" className="d-flex align-items-center px-3 btn btn-danger btn-block">
                            <i className="fab fa-google-plus-g mr-3"></i> <span>Đăng nhập bằng Google</span>
                        </button>
                    </div>
                </div>
            )}

            <RegisterAccount show={Register} toggle={register} />
        </React.Fragment>
    );
}
export default Account;