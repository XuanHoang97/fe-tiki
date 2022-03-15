import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalAddCategory from './ModalAddCategory';
import ModalEditCategory from './ModalEditCategory';

const CategoryManage = (props) => {
    const dispatch = useDispatch();
    const [modalCategory, setModalCategory] = useState(false);
    const [modalEditCategory, setModalEditCategory] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState('');
    const category = useSelector(state => state.admin.categories);

   //fetch product category
     useEffect(() => {        
        dispatch(actions.fetchAllCategory());
    }, [dispatch]);

    //create category
    const handleAddCategory = () => {
        setModalCategory(!modalCategory);
    }

    const CreateCategory = (data) => {
        const dataCategory = new FormData();
        dataCategory.append('name', data.name);
        dataCategory.append('keyMap', data.keyMap);
        dataCategory.append('type', data.type);
        dataCategory.append('value', data.value);
        data.image && dataCategory.append('image', data.image);
        dispatch(actions.CreateCategory(dataCategory));
    }

    //edit category
    const editCategory = (category) => {
        setModalEditCategory(!modalEditCategory);
        setCategoryEdit(category);
    }

    const handleEditCategory = (data) => {
        const category = new FormData();
        category.append('id', categoryEdit.id);
        category.append('name', data.name);
        category.append('keyMap', data.keyMap);
        category.append('type', data.type);
        category.append('value', data.value);
        data.image && category.append('image', data.image);
        dispatch(actions.EditCategory(category));
    }

    //delete category
    const DeleteCategory = (category) => {
        dispatch(actions.DeleteCategory(category.id));
    }      

    return (        
        <div className="p-2 bg-white">
            <ModalAddCategory
                isOpen={modalCategory}
                toggleParent={handleAddCategory}
                CreateCategory={CreateCategory}
            />

            <ModalEditCategory
                isOpen={modalEditCategory}
                toggleParent={editCategory}
                currentCategory = {categoryEdit}
                editCategory={handleEditCategory}
            />

            <div className="h5 text-dark mb-4">Danh mục sản phẩm (<small>{category.length}</small>)</div>
            <div className="d-flex mb-3 justify-content-between">
                <button onClick={() => handleAddCategory()} type="button" className="btn btn-success col-md-2">
                    <i className="fas fa-plus"></i> Thêm danh mục
                </button>
            </div>

            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white">
                    <tr>
                        <td>STT</td>
                        <td>Ảnh</td>
                        <td>Tên danh mục</td>
                        <td>Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                {
                    category && category.length > 0 ?
                    category.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{width:'6%'}}><img src={item.image} className='w-100' alt="" /> </td>
                                <td className='text-primary'>{item.name}</td>
                           
                                <td>
                                    <button onClick={()=> editCategory(item)} type="button" className="btn text-primary">
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
