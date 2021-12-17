import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddNews from './ModalAddNews';
import Sort from './Sort';
import Moment from 'react-moment';
import ModalEditNews from './ModalEditNews';

const NewsManage = (props) => {
    const [news, setnews] = useState([]);
    const [modalAddNews, setModalAddNews] = useState(false);
    const [modalEditNews, setModalEditNews] = useState(false);
    const [newsEdit, setNewsEdit] = useState('');

    //fetch data News
    useEffect(() => {
        props.fetchNews();
        setnews(props.listNews);
    }, [news]);

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
        props.CreateNews({
            name: data.name,
            image: data.image,
            description: data.description,
            content: data.content,
            status: data.status,
            category_id: data.category_id,
            author_id: data.author_id,
            date: data.date,
            view: data.view,
            hot: data.hot,
        });

    }

    //delete news
    const deleteNews = (news) => {
        props.deleteNews(news.id);
    }

    //edit news
    const editNews = (news) => {
        setModalEditNews(!modalEditNews);
        setNewsEdit(news);
    }

    const handleEditNews = (data) => {
        props.editNews({
            id: data.id,
            name: data.name,
            image: data.image,
            description: data.description,
            content: data.content,
            status: data.status,
            category_id: data.category_id,
            author_id: data.author_id,
            date: data.date,
            view: data.view,
            hot: data.hot,
        });
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

            <div className="text-dark">Danh sách bài viết (<b>{props.listNews.length}</b>)</div>
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
                        props.listNews && props.listNews.length>0 ?
                        props.listNews.map((item, index) => {
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
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.author_id}</td>
                                    <td><Moment format="DD/MM/YYYY hh:mm">{item.date}</Moment></td>
                                    <td><span className ="text-success">{item.status}</span>: <Moment fromNow>{item.date}</Moment></td>
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

const mapStateToProps = state => {
    return {
        listNews: state.admin.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchNews: () => dispatch(actions.fetchAllNews()),
        CreateNews : (data) => dispatch(actions.CreateNews(data)),
        deleteNews: (id) => dispatch(actions.DeleteNews(id)),
        editNews: (data) => dispatch(actions.EditNews(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsManage);
