import React from 'react';
import image from '../../../../assets/images/taoanhdep_dicungtiki.jpg';
import {NavLink} from 'react-router-dom';
import {MenuAdmin} from './DataMenu';
import './MenuLeft.scss';

const MenuLeft = (props) => {
    const {widthMenuLeft} = props;
        
    return (
        <div className={`menu-horizon ${widthMenuLeft}`}>
            <div className="logoAdmin">
                <img src={image} alt="" />
            </div>

            <div className='sideNav'>
                <img src="https://azouaoui-med.github.io/react-pro-sidebar/static/media/bg2.de0153c5.jpg" className="sidebar-bg" alt="" />
                <div className='menu-horizon-header'>
                    <div className="dashboard my-4">
                        {
                            MenuAdmin?.length > 0 &&
                            MenuAdmin.map((item, index) => {
                                return (
                                    <NavLink to={`${item.path}`} key={index}
                                        className ="menu-left" 
                                        activeClassName="active" 
                                    >
                                        <div className="itemModule">
                                            <i className={`${item.icon}`}></i>
                                            <span>{item.name}</span>
                                        </div>
                                        {
                                            item.subMenu?.length > 0 &&
                                            <span><i className="fas fa-angle-right small"></i></span>
                                        }
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MenuLeft;