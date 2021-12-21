import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import './Header.scss';
import Title from '../../containers/Header/Title';
import Search from '../../containers/Header/Search';
import Notification from '../../containers/Header/Notification';

class Header extends Component {

    render() {
        const { processLogout, userInfo } = this.props;

        return (
            <div className="control d-flex text-white">
                <Title />

                <div className="content d-flex justify-content-between align-items-center" style={{width: '82%', background: 'rgb(62 112 255)'}}>
                    <Search />

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
