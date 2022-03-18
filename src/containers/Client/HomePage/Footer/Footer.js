import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import { path } from 'utils';
import './style.scss'

const Footer = () => {
    return (
        <>
            <div className="footer bg-white">
                @CopyRight Hoang97
            </div>

            <div className="menuMB">   
                <NavLink to={`${path.HOMEPAGE}`} activeClassName='activeMenuMB' className='menu-item'>
                    <i className="fa fa-home fa-2x"></i>
                    <div>Trang chủ</div>
                </NavLink>

                <div className='menu-item'>
                    <i className="fa fa-list fa-2x"></i>
                    <div>Danh mục</div>
                </div>

                <NavLink to={`${path.DISCOUNT_DETAIL}`} activeClassName='activeMenuMB' className='menu-item'>
                    <i className="fa fa-tags fa-2x"></i>
                    <div>Voucher</div>
                </NavLink>

                <NavLink to={`${path.ACCOUNT}`} activeClassName='activeMenuMB' className='menu-item'>
                    <i className="fa fa-user fa-2x"></i>
                    <div>Cá nhân</div>
                </NavLink>
            </div>
        </>
    );
}
export default Footer;