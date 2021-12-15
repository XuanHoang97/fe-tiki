import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Sort from './Sort';

const NewsManage = (props) => {
    const [news, setnews] = useState([]);

    useEffect(() => {
        props.fetchNews();
        setnews(props.listNews);
    }, [news]);

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý tin tức và sự kiện</div>

            <div className="d-flex justify-content-between mb-3">
                <button type="button" className="btn btn-success col-2">
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
                        <th scope="col">Ảnh bài viết</th>
                        <th scope="col">Tên bài viết</th>
                        <th scope="col">Tác giả</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">View</th>
                        <th scope="col">Hot</th>
                        <th scope="col">Tác vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        props.listNews && props.listNews.length>0 ?
                        props.listNews.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td>{item.image}</td>
                                    <td>{item.name}</td>
                                    <td>{item.author_id}</td>
                                    <td>{item.status}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.view}</td>
                                    <td>{item.hot}</td>
                                    <td>
                                        <button type="button" className="btn text-primary px-2 mr-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn text-danger px-2">
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
        fetchNews: () => dispatch(actions.fetchAllNews())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsManage);
