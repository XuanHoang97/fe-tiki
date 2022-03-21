import React, { useState, useEffect} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import { fetchRating } from 'store/actions';
import TabVote from './TabVote';
import './style.scss'

const VoteManage = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('0');
    const ratings  = useSelector(state => state.rating.rate);

    useEffect(() => {
        dispatch(fetchRating());
    }, [dispatch]);

    console.log('ratings', ratings);

    return (
        <div className='voteManage'>
            <div className="vote-header">
                <img src="https://www.kindpng.com/picc/m/561-5619099_circle-icons-star-with-hex-feb42f-background-vector.png" style={{width: '3%'}} alt="" />
                <div className='voteTitle'>Đánh giá</div>
            </div>
            <TabVote
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className=' voteContent'>
                <TabPane tabId="0" className='listVote'>
                    <div className='filterVote'>
                        <div>
                          <input type="text" className="form-control" placeholder="Tìm sản phẩm ...." />
                        </div>

                        <div>
                          <select className="form-control">
                            <option>Danh mục</option>
                            <option>abc</option>
                          </select>
                        </div>

                        <div className='bg-light px-3 py-2'>Có nội dung</div>
                        <div className='bg-light px-3 py-2'>Có hình ảnh</div>
                        <div className='bg-light px-3 py-2'>Chưa trả lời</div>
                    </div>

                    <div className="vote">
                        <div>Số đánh giá: <b>{ratings && ratings.length >0 ? ratings.length : 0}</b></div>
                        <div className='list-vote mt-3'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>Mã ĐH</td>
                                        <td>Sản phẩm</td>
                                        <td>Đánh giá</td>
                                        <td>Nội dung</td>
                                        <td>trả lời</td>
                                        <td>Thao tác</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        ratings && ratings.length > 0 ?
                                        ratings.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1} </td>
                                                    <td className='text-primary'>{item.orderCode}</td>
                                                    <td>
                                                        <img src={item.imgProduct} style={{width: '10%'}} alt="" />
                                                        <span>{item.nameProduct}</span>
                                                    </td>
                                                    <td>{item.rating} sao</td>
                                                    <td className='w-50'>{item.comment}</td>
                                                    <td>tks you</td>
                                                    <td className='text-primary'>Trả lời</td>
                                                </tr>   
                                            )
                                        })
                                        :
                                        <tr>
                                            <td className='text-center' colSpan={6}>Không có dữ liệu</td>
                                        </tr>
                                    }
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