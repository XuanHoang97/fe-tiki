import React, { } from 'react';
import './style.scss'

const Footer = () => {
    return (
        <>
            <div className="footer bg-success">
                @CopyRight Hoangle - 26.06.2021
            </div>

            <div className="menuMB">   
                <div className='menu-item'>
                    <i className="fa fa-home fa-2x"></i>
                    <div>Trang chủ</div>
                </div>

                <div className='menu-item'>
                    <i className="fa fa-list fa-2x"></i>
                    <div>Danh mục</div>
                </div>

                <div className='menu-item'>
                    {/* flame icon  */}
                    <i className="fa fa-heart fa-2x"></i>
                    <div>Lướt</div>
                </div>

                <div className='menu-item'>
                    {/* icon chat  */}
                    <i className="fa fa-comments fa-2x"></i>
                    <div>Chat</div>
                </div>

                <div className='menu-item'>
                    {/* user icon  */}
                    <i className="fa fa-user fa-2x"></i>
                    <div>Cá nhân</div>
                </div>
            </div>
        </>
    );
}

export default Footer;