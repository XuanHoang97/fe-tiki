import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddNews from './ModalAddNews';
import ModalEditNews from './ModalEditNews';
import Sort from './Sort';
import Moment from 'react-moment';

const NewsManage = (props) => {
    const dispatch = useDispatch();
    const [modalAddNews, setModalAddNews] = useState(false);
    const [modalEditNews, setModalEditNews] = useState(false);
    const [newsEdit, setNewsEdit] = useState('');
    const listNews = useSelector(state => state.admin.news);

    //fetch data News
    useEffect(() => {
        dispatch(actions.fetchAllNews());
    }, [dispatch]);

    //create News and events
    const handleAddNews = () => {
        setModalAddNews(!modalAddNews);
    }
    const CreateNews=(data)=> {
        const dataNews = new FormData();
        dataNews.append('name', data.name);
        dataNews.append('content', data.content);
        dataNews.append('description', data.description);
        dataNews.append('date', data.date);
        dataNews.append('author_id', data.author_id);
        dataNews.append('hot', data.hot);
        dataNews.append('status', data.status);
        dataNews.append('productId', data.productId);
        dataNews.append('category_id', data.category_id);        

        data.image && dataNews.append('image', data.image);
        dispatch(actions.CreateNews(dataNews));
    }

    //delete news
    const deleteNews = (news) => {
        dispatch(actions.DeleteNews(news.id));
    }

    //edit news
    const editNews = (news) => {
        setModalEditNews(!modalEditNews);
        setNewsEdit(news);
    }
    const handleEditNews = (data) => {
        dispatch(actions.EditNews({
            id: data.id,
            name: data.name,
            content: data.content,
            description: data.description,
            date: data.date,
            author_id: data.author_id,
            hot: data.hot,
            status: data.status,
            productId: data.productId,
            category_id: data.category_id,
            image: data.previewImg,
            previewImg: data.previewImg

        }));
    }

    return (
        <div className="mx-2">
            <ModalAddNews
                isOpen={modalAddNews}
                toggleParent={handleAddNews}
                createNews={CreateNews}
            />

            <ModalEditNews
                isOpen={modalEditNews}
                toggleParent={editNews}
                currentNews={newsEdit}
                editNews={handleEditNews}
            />

            <div className="h5 text-dark mb-4">Quản lý tin tức và sự kiện</div>
            <div className="d-flex justify-content-between mb-3">
                <button onClick={() => handleAddNews()} type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus mr-2"></i> Thêm tin tức
                </button>
                <Sort />
            </div>

            <div className="text-dark">Danh sách bài viết (<b>{listNews.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <th>Tick</th>
                        <th>STT</th>
                        <th>Ảnh</th>
                        <th>Tiêu đề</th>
                        <th>Mô tả</th>
                        <th>Tác giả</th>
                        <th>Ngày đăng</th>
                        <th>Trạng thái</th>
                        <th>Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        listNews && listNews.length>0 ?
                        listNews.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td style={{width:'6%'}}><img src={item.image} className='w-100' alt="" /> </td>
                                    <td className='text-primary'>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.author_id}</td>
                                    <td>
                                        <Moment format="DD/MM/YYYY" className='mr-2'>{item.date}</Moment>
                                        <small><Moment format="hh:mm">{item.date}</Moment></small>
                                    </td>
                                    <td><span className ={item.status ==='Mới' ? "text-success" : "text-danger"}>{item.status}</span><Moment fromNow className ="small">{item.date}</Moment></td>
                                    <td>
                                        <button onClick={() => editNews(item) } type="button" className="btn text-primary pr-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button onClick={()=> deleteNews(item)} type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }): 
                        <tr>
                            <td colSpan="10" className="text-center">Không có sản phẩm nào</td>
                        </tr>
                    }   
                </tbody>
            </table>
        </div>
    );
}
export default NewsManage;
