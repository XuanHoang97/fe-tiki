import React from 'react';
import { NavLink } from 'react-router-dom';
import {MenuAdmin} from './DataMenu';
import './MenuLeft.scss';

function MenuLeftCollapse(props) {
    return (
        <div className='menuLeft'>
            <div className="dashboard bg-dark menuLeftCollapse">
                <div>TIKI</div>
                {
                    MenuAdmin?.length > 0 &&
                    MenuAdmin.map((item, index) => {
                        return(
                            <NavLink to={item.path} activeClassName="active" className ="menu-left" exact key={index}>
                                <i className={item.icon}></i>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default MenuLeftCollapse;