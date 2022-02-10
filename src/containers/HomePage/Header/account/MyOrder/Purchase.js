import React from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';

function Purchase(props) {
    const [activeTab, setActiveTab] = React.useState('1');

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

            <TabContent activeTab='1' className='py-4 bg-light border'>
                <TabPane tabId="1" className='bg-white p-3 mx-2'>
                    <div className='statusOrder'>
                        <div>STT: 1</div>
                        <div>
                            <span className='text-success'>Giao hàng thành công</span>
                            <span className='text-danger ml-2'>ĐÃ GIAO</span>
                        </div>
                    </div>
                    <hr/>

                    <div className='infoProduct'>
                        <div className='imgProduct'>
                            <img src='https://cdn.tgdd.vn/Files/2021/12/24/1406472/Gallery/iphone-1.jpg' style={{width: '8%'}} alt='img' />
                            <div className='text-secondary'>
                                <h5>Iphone 14</h5>
                                <span>x2</span>
                            </div>
                        </div>
                        <span>1000đ</span>
                    </div>
                    <hr/>

                    <div className='totalPrice'>
                        <span>Tổng số tiền: </span>
                        <span className='price text-danger'>12.375.126 d</span>
                    </div>
                    <hr/>

                    <div className='action d-flex'>
                        <button type="button" className="btn btn-danger px-3">Mua lại</button>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Purchase;