import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabBill(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>Tất cả hoá đơn (0)</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>Đã thanh toán (0)</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div>Chờ xác nhận thanh toán (0)</div>
                </NavLink>
            </NavItem>

        </Nav>
    );
}
export default TabBill;