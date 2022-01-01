import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const Index = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý Hình ảnh</div>

            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        <div className='font-weight-bold'>Quản lý Slide</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        <div className='font-weight-bold'>Danh mục nổi bật</div>   
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <div className='font-weight-bold'>Quản lý Hình ảnh</div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                        <div className='font-weight-bold'>Quản lý Banner </div>
                    </NavLink>
                </NavItem>
            </Nav>
            
            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    <div className='list-order'>
                        <button className='btn btn-success px-3 mb-4'>
                            <i className='fas fa-plus mr-2'></i>
                            Add Slide
                        </button>

                        <div className="text-dark">Danh sách slide (<b>150</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>Tick</td>
                                    <td>STT</td>
                                    <td>Tên</td>
                                    <td>Ảnh</td>
                                    <td>Ngày đăng</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>Sản phẩm mới ra mắt 2022 </td>
                                    <td>loading...</td>
                                    <td>{Date()}</td>
                                    <td className='d-flex'>
                                        <button type="button" className="btn text-primary  mr-3">
                                            <i className="fas fa-edit"></i>
                                        </button>

                                        <button type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                <div className='list-order'>
                        <button className='btn btn-success px-3 mb-4'>
                            <i className='fas fa-plus mr-2'></i>
                            Add category
                        </button>

                        <div className="text-dark">Danh sách danh mục nổi bật (<b>150</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>Tick</td>
                                    <td>STT</td>
                                    <td>Tên</td>
                                    <td>Ảnh</td>
                                    <td>Ngày đăng</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>1</td>
                                    <td>Sản phẩm mới ra mắt 2022 </td>
                                    <td>loading...</td>
                                    <td>{Date()}</td>
                                    <td className='d-flex'>
                                        <button type="button" className="btn text-primary  mr-3">
                                            <i className="fas fa-edit"></i>
                                        </button>

                                        <button type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane tabId="3">Tab 3 Content</TabPane>
                <TabPane tabId="4">Tab 4 Content</TabPane>
            </TabContent>
        </div>
    );

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
