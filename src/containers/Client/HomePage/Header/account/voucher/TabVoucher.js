import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabVoucher(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs className='tabVoucher'>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>Tất cả</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>Mới nhất</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                    <div>Phổ biến</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                    <div>Sắp hết hạn</div>
                </NavLink>
            </NavItem>

        </Nav>
    );
}
export default TabVoucher;