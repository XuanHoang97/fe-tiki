import React from 'react';
import {Nav, NavItem, NavLink } from 'reactstrap';
import {useDispatch} from 'react-redux';
import * as actions from 'store/actions';

function TabOrder(props) {
    const {status, activeTab, setActiveTab, order} = props;
    const dispatch = useDispatch();

    return (
        <Nav tabs>
            {
                status.map((item, index) => {
                    return (
                        <NavItem key={index}>
                            <NavLink
                                className={`${activeTab === `${item.id}` ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveTab(`${item.id}`);
                                    dispatch(actions.filterOrderByStatus(`${item.keyMap}`));
                                }}
                            >
                                <span className='mr-2'>{item.valueVi}</span>
                                <span className='text-secondary statical'>
                                    ({
                                        item.keyMap === 'S0' ?
                                        order.length :
                                        order.filter(x => x.status === item.keyMap).length
                                    })
                                </span>
                            </NavLink>
                        </NavItem>
                    )
                })
            }
        </Nav>
    );
}
export default TabOrder;