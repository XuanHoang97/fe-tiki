import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const TabControl = ({activeTab, setActiveTab}) => {
    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div className='font-weight-bold'>Quản lý nhà cung cấp</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div className='font-weight-bold'>Quản lý kho hàng</div>   
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default TabControl;