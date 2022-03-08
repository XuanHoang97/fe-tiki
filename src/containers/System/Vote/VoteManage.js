import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import TabVote from './TabVote';

const VoteManage = (props) => {
    const [activeTab, setActiveTab] = useState('0');

    return (
        <div className='p-2 bg-white'>
            <h5 className='mb-4'>Quản lý đánh giá</h5>
            <TabVote
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab}>
                <TabPane tabId="0">
                    <div className='filterVote d-flex bg-white p-3' style={{gap: '10px'}}>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Tìm sản phẩm ...." />
                        </div>

                        <div className="form-group">
                          <select className="form-control">
                            <option>Danh mục</option>
                            <option>abc</option>
                          </select>
                        </div>

                        <div className='bg-light px-3 py-2'>Có nội dung</div>
                        <div className='bg-light px-3 py-2'>Có hình ảnh</div>
                        <div className='bg-light px-3 py-2'>Chưa trả lời</div>
                    </div>

                    <div className="vote bg-white mt-3 p-3">
                        <div>Số đánh giá: <b>0</b></div>
                        <div className='list-vote mt-3'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                    <tr>
                                        <td>STT</td>
                                        <td>Mã đơn hàng</td>
                                        <td>Sản phẩm</td>
                                        <td>Đánh giá</td>
                                        <td>Nội dung</td>
                                        <td>Thao tác</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className='text-primary'>HD001</td>
                                        <td>
                                            <img src="http://res.cloudinary.com/do7qmg6jr/image/upload/v1645756781/kaigq5tukxut4pzfazve.jpg" style={{width: '10%'}} alt="" />
                                            <span>Vertu 2022</span>
                                        </td>
                                        <td>5 sao</td>
                                        <td>good</td>
                                        <td className='text-primary'>Trả lời</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default VoteManage;