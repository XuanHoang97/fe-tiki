import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabMultimedia(props) {
    const { activeTab, setActiveTab } = props;

    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>Quản lý Slide</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>Danh mục nổi bật</div>   
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div>Quản lý hình ảnh và video</div>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                    <div>Quản lý Banner </div>
                </NavLink>
            </NavItem>
        </Nav>
    );
}
export default TabMultimedia;