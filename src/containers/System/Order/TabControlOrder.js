import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';
import * as actions from './../../../store/actions';

const TabControlOrder = ({activeTab, setActiveTab}) => {
    //fetch data order
    const dispatch = useDispatch();
    const order = useSelector(state => state.client.orders);

    useEffect(() => {
        dispatch(actions.getAllOrder());
    }, [dispatch])

    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div className='font-weight-bold'>Tất cả</div>
                    <span className='text-secondary statical'>{order.length} đơn hàng</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div className='font-weight-bold text-warning'>Chờ xác nhận</div>
                    <span className='text-secondary statical'>{order.filter(item => item.status === 'S1').length} đơn hàng</span>                    
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div className='font-weight-bold text-success'>Đã xác nhận</div>
                    <span className='text-secondary statical'>{order.filter(item => item.status === 'S2').length} đơn hàng</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                    <div className='font-weight-bold text-primary'>Đang vận chuyển</div>
                    <span className='text-secondary statical'>{order.filter(item => item.status === 'S3').length} đơn hàng</span>
                </NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                    <div className='font-weight-bold text-success'>Đã giao hàng</div>
                    <span className='text-secondary statical'>{order.filter(item => item.status === 'S4').length} đơn hàng</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>                 
                    <div className='font-weight-bold text-danger'>Đã huỷ</div>
                    <span className='text-secondary statical'>{order.filter(item => item.status === 'S5').length} đơn hàng</span>
                </NavLink>
            </NavItem>
        </Nav>
    );
}
export default TabControlOrder;