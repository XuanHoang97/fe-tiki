import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabArticle(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>Chi tiết sản phẩm</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>Tuỳ chọn sản phẩm</div>
                </NavLink>
            </NavItem>
        </Nav>
    );
}
export default TabArticle;