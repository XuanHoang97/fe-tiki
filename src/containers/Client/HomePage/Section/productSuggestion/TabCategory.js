import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function TabCategory(props) {
    const { activeTab, category, detailCategory } = props;

    return (
        <Nav tabs className='tab_product'>
          {
            category?.length > 0 ?
            category.map((item, index) => {
                return (
                    <NavItem key={index} className='item-category'>
                        <NavLink
                            className={`${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => detailCategory(item.id)}
                        >   
                          <img src={item.image}  alt="" />
                          <span>{item.name}</span>
                        </NavLink>
                    </NavItem>
                )
            })
            :
            <span> Loading... </span>
          }
        </Nav>
    );
}
export default TabCategory;