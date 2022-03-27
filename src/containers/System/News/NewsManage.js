import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as actions from '../../../store/actions';
import ModalEditNews from './ModalEditNews';
import ModalAddNews from './ModalAddNews';
import Moment from 'react-moment';
import './style.scss';

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
        dataNews.append('description', data.description);
        dataNews.append('date', data.date);
        dataNews.append('author_id', data.author_id);
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
        const News = new FormData();
        News.append('id', newsEdit.id );
        News.append('name', data.name);
        News.append('description', data.description);
        News.append('date', data.date);
        News.append('author_id', data.author_id);
        News.append('productId', data.productId);
        News.append('category_id', data.category_id);        
        data.image && News.append('image', data.image);
        dispatch(actions.EditNews(News));
    }

    return (
        <div className="newManage">
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

            <div className='addNews'>
                <div className='news-header'>
                    <img src="https://image.shutterstock.com/image-vector/news-vector-icon-260nw-682278412.jpg" style={{width: '8%'}} alt=""/>
                    <div className="news-title">Tin tức (<small>{listNews.length}</small>)</div>
                </div>
                <button onClick={() => handleAddNews()} type="button" className="btn btn-success">
                    <i className="fas fa-plus mr-2"></i> Thêm tin tức
                </button>
            </div>

            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white">
                    <tr>
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
                        listNews?.length>0 ?
                        listNews.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td style={{width:'5%'}}><img src={item.image} className="w-100" alt="" /> </td>
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
