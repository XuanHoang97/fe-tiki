import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import { SaveOptionProduct } from '../../../store/actions';
import ModalArticle from './ModalArticle';
import ModalEditArticle from './ModalEditArticle';

const ArticleManage = (props) => {
    //fetch data
    const dispatch = useDispatch();
    const listArticle = useSelector(state => state.admin.articles);
    const optionProduct = useSelector(state => state.admin.optionProduct);
    const someProduct = useSelector(state => state.admin.someProduct);
    
    useEffect(() => {
        dispatch(actions.GetAllArticle());
        dispatch(actions.fetchProducts());
    }, [dispatch]);

    const [modalAddArticle, setModalAddArticle] = useState(false);
    const [modalEditArticle, setModalEditArticle] = useState(false);
    const [articleEdit, setArticleEdit] = useState('');

    const [option, setOption] = useState('');
    const [productId, setProductId] = useState('');
    const [imageDesc, setImageDesc] = useState('');
    const [previewImg, setPreviewImg] = useState('');

    //get option product
    useEffect(() => {
        let data = optionProduct;
        if(data && data.length > 0){
            data = data.map(item => ({...item, isSelected: false}))
        }
        dispatch(actions.SelectOptionProduct());
        setOption(data);        
    }, []);

    //select option product
    const SelectOptionProduct = (product) => {
        let data = optionProduct;
        if(data && data.length > 0){
            data.map(item => {
                if(item.id === product.id) item.isSelected = !item.isSelected;
                return item;
            })
            setOption(data);
        }
        console.log('check option product: ', data);
    }

    const handleSaveChoose = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('productId', productId);
        imageDesc && data.append('imageDesc', imageDesc);
        
        dispatch(SaveOptionProduct(data));
    }

    //onChange multi image
    const changeMultiImage = async(e) => {
        let data=e.target.files;
        let file=data[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setPreviewImg(objectUrl);
            setImageDesc(file);
        }
        console.log('check image: ', file);
    }

    //remove image
    const removeImg=()=>{
        setPreviewImg('');
        setImageDesc('');
    }

    //OPEN MODAL Create, Edit article
    const toggleArticleModal=()=> {
        setModalAddArticle(!modalAddArticle);
    }

    const toggleArticleEditModal=()=>{
        setModalEditArticle(!modalEditArticle);
    }

    //create article
    const handleAddNewArticle = () => {
        setModalAddArticle(!modalAddArticle);
    }

    const SaveInfoProduct=(data)=> {
        dispatch(actions.SaveInfoProduct({
            characterHTML: data.characterHTML,
            characterMarkdown: data.characterMarkdown,
            accessoryHTML: data.accessoryHTML,
            accessoryMarkdown: data.accessoryMarkdown,
            specificationHTML: data.specificationHTML,
            specificationMarkdown: data.specificationMarkdown,
            descriptionHTML: data.descriptionHTML,
            descriptionMarkdown: data.descriptionMarkdown,
            productId: data.productId,
        }));
    }

    //edit article
    const editArticle = (article) => {
        setModalEditArticle(!modalEditArticle);
        setArticleEdit(article);
    }

    const editInfoProduct=(data)=> {
        dispatch(actions.EditInfoProduct({
            id: data.id,
            characterHTML: data.characterHTML,
            characterMarkdown: data.characterMarkdown,
            accessoryHTML: data.accessoryHTML,
            accessoryMarkdown: data.accessoryMarkdown,
            specificationHTML: data.specificationHTML,
            specificationMarkdown: data.specificationMarkdown,
            descriptionHTML: data.descriptionHTML,
            descriptionMarkdown: data.descriptionMarkdown,
            productId: data.productId,
        }));
    }

    return ( 
        <div className="mx-2">
            <div className="h5 text-dark">Quản lý bài viết - chi tiết sản phẩm</div>
            <div className='bg-light p-3'>
                <ModalArticle
                    isOpen={modalAddArticle}
                    toggleParent={toggleArticleModal}
                    SaveInfoProduct={SaveInfoProduct}
                />
                
                <ModalEditArticle
                    isOpen={modalEditArticle}
                    toggleParent={toggleArticleEditModal}
                    currentArticle={articleEdit}
                    editInfoProduct={editInfoProduct}
                />

                <button onClick={() => handleAddNewArticle()} type="button" className="btn btn-success px-3">
                    <i className="fas fa-plus"></i> Thêm bài viết
                </button>

                <div className="text-dark mt-4">Danh sách bài viết (<b>{listArticle.length}</b>)</div>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                        <tr>
                            <td scope="col">Tick</td>
                            <td scope="col">ID SP</td>
                            <td scope="col">Tên SP</td>
                            <td scope="col">Tác vụ</td>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            listArticle && listArticle.length >0 ?
                            listArticle.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <div className="form-group">
                                                <input type="checkbox" className="w-100" />
                                            </div>
                                        </td>
                                        <td>{item.productId}</td>
                                        <td>loading...</td>
                                        <td>
                                            <button onClick={()=> editArticle(item)} type="button" className="btn text-primary px-2">
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

            <hr/>   
            <div className="text-dark">Sản phẩm</div>
            <form className='bg-light p-3'
                onSubmit={handleSaveChoose}
                encType="multipart/form-data"
            >
                <div className='d-flex justify-content-between p-0'>
                    <div className='d-flex'>
                        <label className='mr-3'>Chọn sản phẩm</label>

                        <div className="form-group d-flex col-6 p-0">
                            <select className="form-control" style={{height:'30px'}}
                                defaultValue={productId}
                                onChange={(e)=>setProductId(e.target.value)}
                            >
                                {   
                                    someProduct && someProduct.length >0 &&
                                    someProduct.map((item, index) => {
                                        return(
                                            <option key={index} value={item.name}> {item.name} </option>
                                        ) 
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className='d-flex'>    
                        <label className=''>Mẫu mã</label>
                        {
                            optionProduct && optionProduct.length >0 &&
                            optionProduct.map((item, index) => {
                                return(
                                    <div className="d-flex" key={index}>
                                        <button onClick={()=> SelectOptionProduct(item)} type="button" 
                                            className={item.isSelected === true ? "btn btn-primary px-2 mx-2 font-weight-normal" : "btn btn-secondary btn-sm px-2 mx-2 font-weight-normal"}>
                                            {item.valueVi}
                                        </button>
                                    </div>
                                ) 
                            })
                        }
                    </div>

                    <div className="d-flex">
                        <label>Ảnh</label>
                        <input id="previewImg" type="file"
                            name='multi-image' 
                            multiple
                            onChange={(e) => changeMultiImage(e)} 
                        />
                    </div>
                </div>
                <button type ="submit" className="btn btn-success px-3">Lưu thông tin</button>
            </form>
        </div>
    );
}
export default ArticleManage;
