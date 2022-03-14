import React from 'react';
import { Nav, NavItem, NavLink} from 'reactstrap';

function TabVote(props) {
    const { activeTab, setActiveTab } = props;
    
    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '0' ? 'active' : ''} onClick={() => setActiveTab('0')}>
                    Tất cả 
                    <span className='text-center text-secondary'>(0)</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    1<span className="fa fa-star text-warning"></span>
                    <span className='text-center text-secondary'>(0)</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    2<span className="fa fa-star text-warning"></span>
                    <span className='text-center text-secondary'>(0)</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    3<span className="fa fa-star text-warning"></span>
                    <span className='text-center text-secondary'>(0)</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                    4<span className="fa fa-star text-warning"></span>
                    <span className='text-center text-secondary'>(0)</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                    5<span className="fa fa-star text-warning"></span>
                    <span className='text-center text-secondary'>(0)</span>
                </NavLink>
            </NavItem>

        </Nav>
    );
}
export default TabVote;