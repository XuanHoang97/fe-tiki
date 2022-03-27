import {useSelector, useDispatch} from 'react-redux';
import React, { useState, useEffect} from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { fetchRating } from 'store/actions';
import ReactPaginate from 'react-paginate';
import TabVote from './TabVote';
import './style.scss';

const VoteManage = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('0');
    const ratings  = useSelector(state => state.rating.rate);

    useEffect(() => {
        dispatch(fetchRating());
    }, [dispatch]);

    //pagination
    const ratingPerPage = 8;
    const [pageNumber, setPageNumber] = useState(0);
    const pagesVisited = pageNumber * ratingPerPage;
    const pageCount = Math.ceil(ratings.length / ratingPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className='voteManage'>
            <div className="vote-header">
                <img src="https://www.kindpng.com/picc/m/561-5619099_circle-icons-star-with-hex-feb42f-background-vector.png" style={{width: '3%'}} alt="" />
                <div className='voteTitle'>Đánh giá <small>({ratings?.length >0 ? ratings.length : 0})</small></div>
            </div>
            <TabVote
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className=' voteContent'>
                <TabPane tabId="0" className='listVote'>
                    <div className='filterVote'>
                        <input type="text" className="form-control col-4" placeholder="Tìm sản phẩm ...." />
                        <select className="form-control col-2">
                            <option>Danh mục</option>
                            <option>abc</option>
                        </select>

                        <div className='bg-light px-3 py-2'>Có nội dung</div>
                        <div className='bg-light px-3 py-2'>Có hình ảnh</div>
                        <div className='bg-light px-3 py-2'>Chưa trả lời</div>
                    </div>

                    <div className="vote">
                        <div className='list-voteManage'>
                            <table className="table table-striped table-bordered table-hover">
                                <thead className="text-white">
                                    <tr>
                                        <td>STT</td>
                                        <td>Mã ĐH</td>
                                        <td>Sản phẩm</td>
                                        <td>Đánh giá</td>
                                        <td>Nội dung</td>
                                        <td>Trả lời</td>
                                        <td>Thao tác</td>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        ratings?.length > 0 ?
                                        ratings.slice(pagesVisited, pagesVisited + ratingPerPage).map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1} </td>
                                                    <td className='text-primary'>{item.orderCode}</td>
                                                    <td className='w-25'>
                                                        <img src={item.imgProduct} style={{width: '8%'}} alt="" />
                                                        <span className='ml-2'>{item.nameProduct}</span>
                                                    </td>
                                                    <td>{item.rating} sao</td>
                                                    <td className='w-25'>{item.comment}</td>
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
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default VoteManage;