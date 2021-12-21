import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalArticle from './ModalArticle';

const ArticleManage = (props) => {
    const [article, setArticle] = useState([]);
    const [modalAddArticle, setModalAddArticle] = useState(false);
    const [modalEditArticle, setModalEditArticle] = useState(false);
    const [articleEdit, setArticleEdit] = useState('');

    useEffect(() => {
        props.fetchArticle();
        setArticle(props.listArticle);
    }, [article]);

    //OPEN MODAL Create, Edit artical
    const toggleArticleModal=()=> {
        setModalAddArticle(!modalAddArticle);
    }

    //create article
    const handleAddNewArticle = () => {
        setModalAddArticle(!modalAddArticle);
    }

    const SaveInfoProduct=(data)=> {
        props.SaveInfoProduct({
            contentHTML: data.contentHTML,
            contentMarkdown: data.contentMarkdown,
            description: data.description,
            character: data.character,
            specification: data.specification,
            accessories: data.accessories,
            productId: data.productId,
            categoryId: data.categoryId,
        })
    }


    return (
        
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý bài viết - chi tiết sản phẩm</div>
            <ModalArticle
                isOpen={modalAddArticle}
                toggleParent={toggleArticleModal}
                SaveInfoProduct={SaveInfoProduct}
            />

            <button onClick={() => handleAddNewArticle()} type="button" className="btn btn-primary px-3">
                <i className="fas fa-plus"></i> Thêm bài viết
            </button>

            <div className="text-dark mt-4">Danh sách bài viết (<b>{props.listArticle.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <td scope="col">Tick</td>
                        <td scope="col">ID SP</td>
                        <td scope="col">Tên SP</td>
                        <td scope="col">contentMarkdown</td>
                        <td scope="col">contentHTML</td>
                        <td scope="col">Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                    {   
                        props.listArticle && props.listArticle.length >0 ?
                        props.listArticle.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>{item.productId}</td>
                                    <td>{item.productId}</td>
                                    <td>{item.contentHTML}</td>
                                    <td>{item.contentMarkdown}</td>
                                    <td>
                                        <button type="button" className="btn text-primary px-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td colSpan="5">Không có bài viết nào</td>
                        </tr>
                    }
                        
                </tbody>
            </table>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        listArticle: state.admin.articles,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        SaveInfoProduct: (data) => dispatch(actions.SaveInfoProduct(data)),
        fetchArticle: () => dispatch(actions.GetAllArticle()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleManage);
