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
        dispatch(actions.EditCategory({
            id: data.id,
            name: data.name,
            keyMap: data.keyMap,
            type: data.type,
            value: data.value,
            image: data.previewImg,
            previewImg: data.previewImg
        }));
    }

    //delete category
    const DeleteCategory = (category) => {
        dispatch(actions.DeleteCategory(category.id));
    }      

    return (        
        <div className="mx-2">
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
                        <td>Tick</td>
                        <td>STT</td>
                        <td>Ảnh</td>
                        <td>Tên danh mục</td>
                        <td>Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                {
                    listCategory && listCategory.length > 0 ?
                    listCategory.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <div className="form-group">
                                        <input type="checkbox" className="w-100" />
                                    </div>
                                </td>
                                <td>{index + 1}</td>
                                <td style={{width:'6%'}}><img src={item.image} className='w-100' alt="" /> </td>
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
