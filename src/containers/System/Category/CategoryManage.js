import { useSelector, useDispatch } from 'react-redux';
import ModalEditCategory from './ModalEditCategory';
import * as actions from '../../../store/actions';
import ModalAddCategory from './ModalAddCategory';
import React,{useState, useEffect} from 'react';
import './style.scss';

const CategoryManage = (props) => {
    const dispatch = useDispatch();
    const [modalCategory, setModalCategory] = useState(false);
    const [modalEditCategory, setModalEditCategory] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState('');
    const category = useSelector(state => state.admin.categories);

   //fetch category
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

            <div className='categoryManage'>
                <div className='category-head'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpLky01HHuDldu3ZoBLszxsAYFtRmh7E4vpmdl3UMixEfN8VGMRgfMw9SxksuIdxOjSs&usqp=CAU" className='rounded-circle' style={{width:'5%'}} alt="" />
                    <div className="category-title">Danh mục (<small>{category.length}</small>)</div>
                </div>
                <button onClick={() => handleAddCategory()} type="button" className="btn btn-success">
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
                    category?.length > 0 ?
                    category.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td style={{width:'5%'}}><img src={item.image} className="w-100" alt="" /> </td>
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
