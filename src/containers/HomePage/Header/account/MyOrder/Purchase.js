import React, { useEffect } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import {useDispatch, useSelector} from 'react-redux';
import { GetOrderByUser } from 'store/actions';
import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';

function Purchase(props) {
    const [activeTab, setActiveTab] = React.useState('1');
    const user = useSelector(state => state.auth.user);
    const listOrder = useSelector(state => state.client.listOrder);
    const dispatch = useDispatch();

     // get order by user
     useEffect(() => {
        try {
            dispatch(GetOrderByUser(user.id));
        } catch (e) {
            console.log('get order by user fail', e)
        }
    }, [dispatch, user]);
    console.log('list order by user: ',listOrder);

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        <div className='font-weight-bold'>Tất cả</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        <div className='font-weight-bold'>Chờ xác nhận</div>   
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <div className='font-weight-bold'>Chờ lấy hàng</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                        <div className='font-weight-bold'>Đang giao</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <div className='font-weight-bold'>Đã giao</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                        <div className='font-weight-bold'>Đã huỷ</div>
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab='1' className='bg-light border'>
                <TabPane tabId="1" className='p-2 py-3'>
                    {
                        listOrder && listOrder.length > 0 ?
                        listOrder.map((item, index) => {
                            return (
                                <div className='order p-3 mb-3 bg-white border-bottom' key={index}>
                                    <div className='statusOrder'>
                                        <div>{index + 1}. Đơn hàng {item.code}</div>
                                        <span className='text-primary'>{item.status === 'S1' ? 'Đang xử lý': ''}</span>
                                    </div>
                                    <hr/>

                                    <div className='infoProduct'>
                                        <div className='imgProduct'>
                                            <img src={item.image} style={{width: '8%'}} alt='img' />
                                            <div className='text-secondary'>
                                                <h6>{item.name}</h6>
                                                <span>x{item.qty}</span>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <span className='text-danger'>{numberFormat(item.price*item.qty)}</span>
                                            <button type="button" className="btn btn-success btn-sm px-3">Xem</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                        <div className='text-center'>Không có đơn hàng nào</div>
                    }
                    <div className='totalPrice'>
                        <span>Tổng tiền: </span>
                            <span className='price text-danger'>
                            {
                                listOrder && listOrder.length > 0 ?
                                numberFormat(totalMoney(listOrder))
                                : 0
                            }
                        </span>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default Purchase;