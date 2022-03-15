import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabMultimedia(props) {
    const { activeTab, setActiveTab } = props;

    return (
        <Nav tabs className='tabMedia'>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div>Slide</div>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div>Danh mục nổi bật</div>   
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div>Hình ảnh và video</div>
                </NavLink>
            </NavItem>
        </Nav>
    );
}
export default TabMultimedia;