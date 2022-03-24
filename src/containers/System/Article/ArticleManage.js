import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../../store/actions';
import ModalArticle from './ModalArticle';
import ModalEditArticle from './ModalEditArticle';
import {saveOptionProduct} from '../../../services/userService';
import { TabContent, TabPane } from 'reactstrap';
import TabArticle from './TabArticle';
import OptionProduct from './OptionProduct';
import DescProduct from './DescProduct';
import './style.scss';

const ArticleManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    //fetch data
    const dispatch = useDispatch();
    const articles = useSelector(state => state.admin.articles);
    const category = useSelector(state => state.admin.categories);
    const DetailCategory = useSelector(state => state.admin.detailCategory);
    const optionProduct = useSelector(state => state.admin.optionProduct);

    const [modalAddArticle, setModalAddArticle] = useState(false);
    const [modalEditArticle, setModalEditArticle] = useState(false);
    const [articleEdit, setArticleEdit] = useState('');
    const [categoryId, setCategoryId] = useState(3);
    const [productId, setProductId] = useState(1);
    const [option, setOption] = useState('');

    useEffect(() => {
        dispatch(actions.GetAllArticle());
        dispatch(actions.fetchAllCategory());
        dispatch(actions.DetailCategory(3));
        dispatch(actions.SelectOptionProduct());
    }, [dispatch]);

    //modify data product
    useEffect (() => {
        let data = optionProduct;
            if(data && data.length > 0){
                data = data.map(item => ({...item, isSelected : false}))
            }
            setOption(data);
    }, [optionProduct])

    //select option product
    const handleOptionProduct = (product) => {
        let data = option;
        if(data.length > 0){
            data = data.map(item => {
                if(item.id === product.id){
                    item.isSelected = !item.isSelected;
                }
                return item;
            })
            setOption(data);
        }
    }

    //Save info product
    const handleSaveChoose = async(e) => {
        e.preventDefault();
        let result = [];

        if(option && option.length > 0){
            let selectedProduct = option.filter(item => item.isSelected === true);

            if(selectedProduct && selectedProduct.length > 0){
                selectedProduct.map(item => {
                    let object = {};
                    object.categoryId = categoryId;
                    object.productId = productId;
                    object.option = item.keyMap;
                    result.push(object);
                })
            }else{
                toast.error('Vui lòng chọn options sản phẩm');
                return;
            }
        }
        let res = await saveOptionProduct({
            arrOptionProduct: result,
            categoryId: categoryId,
            productId: productId,
        });
        
        console.log('check res : ',  res);
        console.log('check result : ',  result);
    }

    // get product by category
    const changeCategory = (e) => {
        setCategoryId(e.target.value);
        dispatch(actions.DetailCategory(e.target.value));
    }

    //create article
    const addArticle = () => {
        setModalAddArticle(!modalAddArticle);
    }
    const InfoProduct=(data)=> {
        dispatch(actions.SaveInfoProduct(data));
    }

    //edit article
    const editArticle = (article) => {
        setModalEditArticle(!modalEditArticle);
        setArticleEdit(article);
    }
    const editInfoProduct=(data)=> {
        dispatch(actions.EditInfoProduct(data));
    }

    return ( 
        <div className="articleManage">
            <div className="article-header">
                <img src="https://cdn.iconscout.com/icon/free/png-256/article-43-267416.png" style={{width:'3%'}} alt=""/>
                <div className='article-title'>Bài viết</div>
            </div>

            <TabArticle
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <DescProduct 
                        categoryId={categoryId}
                        setProductId={setProductId}
                        DetailCategory={DetailCategory}
                        category={category}
                        changeCategory={changeCategory}
                        productId={productId}
                    />

                    <ModalArticle
                        isOpen={modalAddArticle}
                        toggleParent={addArticle}
                        InfoProduct={InfoProduct}

                        categoryId={categoryId}
                        category={category}
                        DetailCategory={DetailCategory}
                        changeCategory={changeCategory}
                        productId={productId}
                        setProductId={setProductId}
                    />
                    
                    <ModalEditArticle
                        isOpen={modalEditArticle}
                        toggleParent={editArticle}
                        currentArticle={articleEdit}
                        editInfoProduct={editInfoProduct}

                        categoryId={categoryId}
                        setCategoryId = {setCategoryId}
                        category={category}
                        DetailCategory={DetailCategory}
                        changeCategory={changeCategory}

                        productId={productId}
                        setProductId={setProductId}
                    />
                </TabPane>

                <TabPane tabId="2">
                    <div className="h5 text-dark">Danh sách(<small>{articles?.length>0 ? articles.length : 0}</small>)</div>
                    <div className='bg-white p-3'>

                    <button onClick={() => addArticle()} type="button" className="btn btn-success mb-3">
                        <i className="fas fa-plus"></i> Thêm bài viết
                    </button>

                    <table className="table table-striped table-bordered table-hover">
                        <thead className="text-white">
                            <tr>
                                <td>STT</td>
                                <td>ID SP</td>
                                <td>ID danh muc</td>
                                <td>Tên SP</td>
                                <td>Tác vụ</td>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                articles?.length >0 ?
                                articles.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>{item.productId}</td>
                                            <td>{item.categoryId}</td>
                                            <td>loading...</td>
                                            <td>
                                                <button onClick={()=> editArticle(item)} type="button" className="btn text-primary">
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
                </TabPane>

                <TabPane tabId="3">
                    <OptionProduct
                        option={option}
                        handleOptionProduct={handleOptionProduct}
                        handleSaveChoose={handleSaveChoose}

                        category={category}
                        categoryId={categoryId}
                        changeCategory={changeCategory}
                        productId={productId}
                        setProductId={setProductId}
                        DetailCategory={DetailCategory}
                    />
                </TabPane>
            </TabContent>
        </div>
    );
}
export default ArticleManage;
