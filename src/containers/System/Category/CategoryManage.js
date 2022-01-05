import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddCategory from './ModalAddCategory';
import ModalEditCategory from './ModalEditCategory';

const CategoryManage = (props) => {
    const [modalCategory, setModalCategory] = useState(false);
    const [modalEditCategory, setModalEditCategory] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState('');

    const dispatch = useDispatch();
    const listCategory = useSelector(state => state.admin.categories);

   //fetch product category
     useEffect(() => {        
        dispatch(actions.fetchAllCategory());
    }, [dispatch]);

    //OPEN MODAL Create, Edit category
    const toggleCategoryModal=()=> {
        setModalCategory(!modalCategory);
    }

    const toggleCategoryEditModal=()=>{
        setModalEditCategory(!modalEditCategory);
    }

    //create category
    const handleAddCategory = () => {
        setModalCategory(!modalCategory);
    }

    const CreateCategory = (data) => {
        dispatch(actions.CreateCategory(data));
    }

    //edit category
    const editCategory = (category) => {
        setModalEditCategory(!modalEditCategory);
        setCategoryEdit(category);
    }

    const handleEditCategory = (data) => {
        dispatch(actions.EditCategory(data));
    }

    //delete category
    const DeleteCategory = (category) => {
        dispatch(actions.DeleteCategory(category.id));
    }      

    return (        
        <div className="mx-2">
            <ModalAddCategory
                isOpen={modalCategory}
                toggleParent={toggleCategoryModal}
                CreateCategory={CreateCategory}
            />

            <ModalEditCategory
                isOpen={modalEditCategory}
                toggleParent={toggleCategoryEditModal}
                currentCategory = {categoryEdit}
                editCategory={handleEditCategory}
            />

            <div className="h5 text-dark mb-4">Quản lý danh mục sản phẩm</div>

            <div className="d-flex mb-3 justify-content-between">
                <button onClick={() => handleAddCategory()} type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus"></i> Thêm danh mục
                </button>
            </div>

            <div className="text-dark">Danh mục sản phẩm (<b>{listCategory.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <td scope="col">Tick</td>
                        <td scope="col">STT</td>
                        <td scope="col">Ảnh</td>
                        <td scope="col">Tên danh mục</td>
                        <td scope="col">Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                {
                    listCategory && listCategory.length > 0 ?
                    listCategory.map((item, index) => {
                        //endCode image
                        let imageBase64='';
                        if(item.image){
                            imageBase64=new Buffer(item.image, 'base64').toString('binary')
                        }
                        
                        return (
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
                           
                                <td>
                                    <button onClick={()=> editCategory(item)} type="button" className="btn text-primary px-2">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button onClick={()=> DeleteCategory(item)} type="button" className="btn text-danger">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    :        
                    <tr>
                        <td colSpan="10" className="text-center">Không có sản phẩm nào</td>
                    </tr>
                }           
                </tbody>
            </table>
        </div>
    );
}
export default CategoryManage;
