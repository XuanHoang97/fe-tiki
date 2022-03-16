import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabDiscount(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs className='tabVote'>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    Khuyến mãi
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    Flash sale
                </NavLink>
            </NavItem>
        </Nav>
    );
}
export default TabDiscount;