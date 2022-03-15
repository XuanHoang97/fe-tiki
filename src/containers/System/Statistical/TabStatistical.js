import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabStatistical(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs className='tabStatistical'>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>Doanh thu bán hàng</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>Khách hàng</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div>Sản phẩm</div>
                </NavLink>
            </NavItem>

        </Nav>
    );
}
export default TabStatistical;