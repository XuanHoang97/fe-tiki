import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabCoin(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs className='tabCoin'>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>TẤT CẢ</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>ĐÃ NHẬN</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div>ĐÃ DÙNG</div>
                </NavLink>
            </NavItem>

        </Nav>
    );
}
export default TabCoin;