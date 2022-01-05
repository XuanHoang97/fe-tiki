import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddNews from './ModalAddNews';
import ModalEditNews from './ModalEditNews';
import Sort from './Sort';
import Moment from 'react-moment';

const NewsManage = (props) => {
    const [modalAddNews, setModalAddNews] = useState(false);
    const [modalEditNews, setModalEditNews] = useState(false);
    const [newsEdit, setNewsEdit] = useState('');

    const dispatch = useDispatch();
    const listNews = useSelector(state => state.admin.news);

    //fetch data News
    useEffect(() => {
        dispatch(actions.fetchAllNews());
    }, [dispatch]);

    //OPEN MODAL Create, Edit News
    const toggleNewsModal=()=> {
        setModalAddNews(!modalAddNews);
    }

    const toggleNewsEditModal=()=>{
        setModalEditNews(!modalEditNews);
    }

    //create News and events
    const handleAddNews = () => {
        setModalAddNews(!modalAddNews);
    }

    const CreateNews=(data)=> {
        dispatch(actions.CreateNews(data));
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
        dispatch(actions.EditNews(data));
    }

    return (
        <div className="mx-2">
            <ModalAddNews
                isOpen={modalAddNews}
                toggleParent={toggleNewsModal}
                createNews={CreateNews}
            />

            <ModalEditNews
                isOpen={modalEditNews}
                toggleParent={toggleNewsEditModal}
                currentNews={newsEdit}
                editNews={handleEditNews}
            />

            <div className="h5 text-dark mb-4">Quản lý tin tức và sự kiện</div>

            <div className="d-flex justify-content-between mb-3">
                <button onClick={() => handleAddNews()} type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus mr-2"></i> Add news
                </button>

                <Sort />
            </div>

            <div className="text-dark">Danh sách bài viết (<b>{listNews.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <th scope="col">Tick</th>
                        <th scope="col">STT</th>
                        <th scopse="col">Ảnh</th>
                        <th scope="col">Tiêu đề</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Tác giả</th>
                        <th scope="col">Ngày đăng</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        listNews && listNews.length>0 ?
                        listNews.map((item, index) => {
                            //endCode image
                            let imageBase64='';
                            if(item.image){
                                imageBase64=new Buffer(item.image, 'base64').toString('binary')
                            }

                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '45px',
                                        width: '45px', borderRadius: '50%', display: 'flex', margin: '0 auto'}}>
                                    </td>
                                    <td className='text-primary'>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.author_id}</td>
                                    <td>
                                        <Moment format="DD/MM/YYYY" className='mr-2'>{item.date}</Moment>
                                        <small><Moment format="hh:mm">{item.date}</Moment></small>
                                    </td>
                                    <td><span className ={item.status ==='Mới' ? "text-success" : "text-danger"}>{item.status}</span>: <Moment fromNow className ="small">{item.date}</Moment></td>
                                    <td>{item.category_id}</td>
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
