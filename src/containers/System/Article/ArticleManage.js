import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../../store/actions';
import ModalArticle from './ModalArticle';
import ModalEditArticle from './ModalEditArticle';
import {saveOptionProduct} from '../../../services/userService';
import { TabContent, TabPane } from 'reactstrap';
import TabArticle from './TabArticle';

const ArticleManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    //fetch data
    const dispatch = useDispatch();
    const listArticle = useSelector(state => state.admin.articles);
    const category = useSelector(state => state.admin.categories);
    const DetailCategory = useSelector(state => state.admin.detailCategory);
    const optionProduct = useSelector(state => state.admin.optionProduct);
    
    const [modalAddArticle, setModalAddArticle] = useState(false);
    const [modalEditArticle, setModalEditArticle] = useState(false);
    const [articleEdit, setArticleEdit] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [productId, setProductId] = useState(3);
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

    // load product by category
    const handleChangeCategory = (e) => {
        setCategoryId(e.target.value);
        dispatch(actions.DetailCategory(e.target.value));
    }

    //create article
    const addArticle = () => {
        setModalAddArticle(!modalAddArticle);
    }
    const SaveInfoProduct=(data)=> {
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
        <div className="p-2 bg-white">
            <TabArticle
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className="h5 text-dark">Danh sách(<small>{listArticle && listArticle.length>0 ? listArticle.length : 0}</small>)</div>
                    <div className='bg-white p-3'>
                    <ModalArticle
                        isOpen={modalAddArticle}
                        toggleParent={addArticle}
                        SaveInfoProduct={SaveInfoProduct}

                        categoryId={categoryId}
                        category={category}
                        DetailCategory={DetailCategory}
                        handleChangeCategory={handleChangeCategory}
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
                        handleChangeCategory={handleChangeCategory}
                        productId={productId}
                        setProductId={setProductId}
                    />

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
                                listArticle && listArticle.length >0 ?
                                listArticle.map((item, index) => {
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
                <TabPane tabId="2">
                    <form className='bg-white p-3'
                    onSubmit={handleSaveChoose}
                    encType="multipart/form-data"
                    >
                    <div className='d-flex p-0'>
                        <div className='d-flex col-4 p-0'>
                            <div className='col-6 p-0 mr-3'>
                                <label className='mr-3'>Danh mục</label>

                                <div className="form-group d-flex p-0">
                                    <select className="form-control" style={{height:'30px'}}
                                        value={categoryId}
                                        onChange={(e)=>handleChangeCategory(e)}
                                    >     
                                        {
                                            category && category.length > 0 ?
                                            category.map((item, index) => {
                                                return (
                                                    <option key={index} value={index +3 }>{item.name}</option>
                                                )
                                            }) :
                                            <option value="">Không có danh mục</option>
                                        }                
                                    </select>
                                </div>
                            </div>
                            
                            {
                                category && category.length > 0 ?
                                <div className='col-6 p-0'>
                                    <label className='mr-3'>Sản phẩm</label>
                                    <div className="form-group d-flex p-0">
                                        <select className="form-control"
                                            value={productId}
                                            onChange={(e)=>setProductId(e.target.value)}
                                        >
                                            {
                                                DetailCategory && DetailCategory.length > 0 ?
                                                DetailCategory.map((item, index) => {
                                                    return (
                                                        <option key={index} value={item.id}>{item.name}</option>
                                                    )
                                                }) :
                                                <option value="">Không có sản phẩm</option>
                                            }                                     
                                        </select>
                                    </div>
                                </div> :
                                <span>Không có sản phẩm nào ! </span>
                            }
                        </div>

                        <div className='d-flex col-6 ml-3'>   
                            <div className='col-7 p-0 mr-3'>
                                <label className='px-2'>Mẫu mã</label>
                                <div className="d-flex">
                                {
                                    option && option.length >0 &&
                                    option.map((item, index) => {
                                        return(
                                            <button 
                                                onClick={()=>handleOptionProduct(item)}
                                                type="button" 
                                                key={index}
                                                className={item.isSelected === true ? "btn btn-primary px-2 mx-2 font-weight-normal" : "btn btn-secondary btn-sm px-2 mx-2 font-weight-normal"}>
                                                {item.valueVi}
                                            </button>
                                        ) 
                                    })
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type ="submit" className="btn btn-success">Lưu thông tin</button>
                    </form>
                </TabPane>
            </TabContent>
        </div>
    );
}
export default ArticleManage;
