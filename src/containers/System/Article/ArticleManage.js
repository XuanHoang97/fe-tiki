import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalArticle from './ModalArticle';
import ModalEditArticle from './ModalEditArticle';

const ArticleManage = (props) => {
    const [article, setArticle] = useState([]);
    const [modalAddArticle, setModalAddArticle] = useState(false);
    const [modalEditArticle, setModalEditArticle] = useState(false);
    const [articleEdit, setArticleEdit] = useState('');


    const [option, setOption] = useState('');
    const [productId, setProductId] = useState('');
    const [productArr, setProductArr] = useState([]);


    //get all article
    useEffect(() => {
        props.fetchArticle();
        setArticle(props.listArticle);

        //get some product
        props.fetchSomeProduct();
        setProductArr(props.someProduct);
        setProductId(props.someProduct[0]);

    }, []);
// }, [props.listArticle]);


    useEffect(() => {
        //get option product
        let data = props.optionProduct;
        if(data && data.length > 0){
            data = data.map(item => ({...item, isSelected: false}))
        }
        props.fetchOptionProduct();
        setOption(data);
        
        // console.log(option);
    }, []);

    //select option product
    const SelectOptionProduct = (product) => {
        let data = props.optionProduct;
        if(data && data.length > 0){
            data.map(item => {
                if(item.id === product.id) item.isSelected = !item.isSelected;
                return item;
            })
            setOption(data);
        }
        console.log('check option product: ', data);
    }

    const handleSaveChoose = () => {
        console.log('save choose: ', productArr, option);
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
        props.SaveInfoProduct({
            characterHTML: data.characterHTML,
            characterMarkdown: data.characterMarkdown,
            accessoryHTML: data.accessoryHTML,
            accessoryMarkdown: data.accessoryMarkdown,
            specificationHTML: data.specificationHTML,
            specificationMarkdown: data.specificationMarkdown,
            descriptionHTML: data.descriptionHTML,
            descriptionMarkdown: data.descriptionMarkdown,
            productId: data.productId,
        });
    }

    

    //edit article
    const editArticle = (article) => {
        setModalEditArticle(!modalEditArticle);
        setArticleEdit(article);
    }

    const editInfoProduct=(data)=> {
        props.editInfoProduct({
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
        });
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

                <div className="text-dark mt-4">Danh sách bài viết (<b>{props.listArticle.length}</b>)</div>
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
            <div className='bg-light p-3'>
                <div className='d-flex justify-content-between p-0'>
                    <div className='d-flex'>
                        <label className='mr-3'>Chọn sản phẩm</label>

                        <div className="form-group d-flex col-6 p-0">
                            <select className="form-control" style={{height:'30px'}}
                                defaultValue={productId}
                                onChange={(e)=>setProductId(e.target.value)}
                            >
                                {   
                                    props.someProduct && props.someProduct.length >0 &&
                                    props.someProduct.map((item, index) => {
                                        return(
                                            <option key={index} value={item.productArr}> {item.name} </option>
                                        ) 
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className='d-flex'>    
                        <label className=''>Mẫu mã</label>
                        {
                            props.optionProduct && props.optionProduct.length >0 &&
                            props.optionProduct.map((item, index) => {
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
                        <input id="previewImg" type="file" hidden />

                        <label htmlFor="previewImg" className="btn btn-info w-100 px-3 mx-2"><i className="fas fa-upload"></i> Tải ảnh</label>  
                    
                        <div className="preview-image col-md-2 border">   
                            <div className="" style={{textAlign: 'end', position: 'absolute', right: '-0.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div> 
                        </div>
                    </div>



                </div>
                <button onClick={() => handleSaveChoose()} type="button" className="btn btn-success px-3">Lưu thông tin</button>
            </div>
            

        </div>
    );

}

const mapStateToProps = state => {
    return {
        listArticle: state.admin.articles,
        optionProduct: state.admin.optionProduct,
        someProduct: state.admin.someProduct,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        SaveInfoProduct: (data) => dispatch(actions.SaveInfoProduct(data)),
        fetchArticle: () => dispatch(actions.GetAllArticle()),
        fetchOptionProduct: () => dispatch(actions.SelectOptionProduct()),
        fetchSomeProduct: () => dispatch(actions.GetSomeProduct()),
        editInfoProduct: (data) => dispatch(actions.EditInfoProduct(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleManage);
