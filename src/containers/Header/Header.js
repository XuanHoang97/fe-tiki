import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './Header.scss';
import Notification from '../../containers/Header/Notification';

const  Header = (props) => {
    const { processLogout, userInfo } = props;
    const [menuLeft, setMenuLeft] = useState(true);
    const [widthMenuRight, setWidthMenuRight] = useState('82%');
    const [widthMenuLeft, setWidthMenuLeft] = useState('18%');

    const toggleMenu = () => {
        setMenuLeft(!menuLeft);
        setWidthMenuRight('100%');
    }

    return (
        <div className="control d-flex text-white">
            {
                menuLeft && 
                <div className="module py-1 px-3 d-flex align-items-center" style={{width: widthMenuLeft, background: 'rgb(76, 117, 235)'}}>
                    <span className="mr-3">Quản lý hệ thống </span>
                    <img src="https://huflitjobhub.com/wp-content/uploads/2021/09/uwc1625303270.png" alt=""  style={{width: '30px'}} className="rounded-circle" />
                </div>
            }

            <div className="content d-flex justify-content-between align-items-center" style={{width: widthMenuRight, background: 'rgb(76 117 235)'}}>
                <div className="collapse_module d-flex align-items-center ml-3">
                    <span onClick={() => toggleMenu() }><i className="fas fa-bars"></i></span>  

                    {/* search  */}
                    <div className="search input-group mx-4" style={{width: '350px'}}>
                        <input type="text" className="form-control" placeholder="Search..."
                            style={{background: 'rgb(243 241 241)', height: '30px', borderRadius: '0'}} />
                        <div className="input-group-append" style={{height: '30px'}}>
                            <button className="btn btn-light btn-sm px-2" style={{background :'rgb(243 241 241)'}}>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="account d-flex align-items-center">
                    <Notification />

                    <div className="acc py-1 px-3 mx-3">
                        <img src="https://avatars.githubusercontent.com/u/38268599?v=4" alt="" 
                            style={{width: '35px'}}
                            className="rounded-circle mr-2" />
                        <span>{userInfo && userInfo.firstName ? userInfo.firstName : 'Hoang'} <i className="fas fa-caret-down small"></i></span>
                    </div>

                    {/* logout  */}
                    <div className="logout btn btn-default pr-3 text-white font-weight-normal" onClick={processLogout}>
                        Đăng xuất <i className="fas fa-sign-out-alt"></i>
                    </div>

                </div>
            </div>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo : state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
