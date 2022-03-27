import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../../store/actions';
import React, { useState, useEffect } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import SpecialCategory from './SpecialCategory';
import { CRUD_ACTIONS } from '../../../utils';
import TabMultimedia from './TabMultimedia';
import { useForm } from "react-hook-form";
import './style.scss';

const Multimedia = (props) => {
    const { register, formState: { errors },reset, handleSubmit, setValue } = useForm();

    const [activeTab, setActiveTab] = useState('1');
    const [categoryId, setCategoryId] = useState('');

    //slide
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [action, setAction] = useState(CRUD_ACTIONS.CREATE);
    const [slideEdit, setSlideEdit] = useState();

    //category special
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [categoryPreviewImg, setCategoryPreviewImg] = useState('');
    const [categoryAction, setCategoryAction] = useState(CRUD_ACTIONS.CREATE);
    const [categoryEdit, setCategoryEdit] = useState();
    
    //fetch data
    const slide = useSelector(state => state.admin.slides);
    const category = useSelector(state => state.admin.categories);
    const specialCategories = useSelector(state => state.admin.specialCategories);
    const statusSlide = useSelector(state => state.admin.statusSlide);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchAllSlide());
        dispatch(actions.fetchAllCategory());
        dispatch(actions.SpecialCategory());
        dispatch(actions.getStatusSlide());
    }, [dispatch]);

    //onChange image
    const changeImage = async(e) => {
        let file=e.target.files[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setPreviewImg(objectUrl);
            setImage(file);
        }
    }

    const changeImageCategory = async(e) => {
        let file=e.target.files[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setCategoryPreviewImg(objectUrl);
            setCategoryImage(file);
        }
    }

    //remove image
    const removeImg=()=>{
        setPreviewImg('');
    }

    // Add and Edit Slide
    const handleSaveSlide=(data)=>{
        const slide = new FormData();
        slide.append('name', data.name);
        slide.append('status', data.status);
        image && slide.append('image', image);

        if(action===CRUD_ACTIONS.CREATE){
            dispatch(actions.CreateSlide(slide));
            removeImg();
            reset();
        }
        if(action===CRUD_ACTIONS.EDIT){
            const slide = new FormData();
            slide.append('id', slideEdit);
            slide.append('name', data.name);
            slide.append('status', data.status);
            image && slide.append('image', image);
            dispatch(actions.EditSlide(slide));
            removeImg();
            reset();
            setAction(CRUD_ACTIONS.CREATE);
        }
    }
    
    // fill info edit slide
    const editSlide=(slide)=>{
        setValue('name', slide.name);
        setValue('status', slide.status);
        setPreviewImg(slide.image);
        setAction(CRUD_ACTIONS.EDIT);
        setSlideEdit(slide.id);
    }
    
    //delete slide
    const deleteSlide=(slide)=>{
        dispatch(actions.DeleteSlide(slide.id));
    }

    //Add and edit Special category
    const saveCategory = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', categoryName);
        data.append('categoryId', categoryId);
        categoryImage && data.append('image', categoryImage);

        if(categoryAction===CRUD_ACTIONS.CREATE){
            dispatch(actions.CreateSpecialCategory(data));
        }

        if(categoryAction===CRUD_ACTIONS.EDIT){
            const category = new FormData();
            category.append('id', categoryEdit);
            category.append('name', categoryName);
            category.append('categoryId', categoryId);
            categoryImage && category.append('image', categoryImage);
            dispatch(actions.EditSpecialCategory(category));
            setCategoryAction(CRUD_ACTIONS.CREATE);
        }
    }
    //fill info edit category special
    const editSpecialCategory = (category) => {
        setCategoryPreviewImg(category.image);
        setCategoryName(category.name);
        setCategoryId(category.categoryId);
        setCategoryAction(CRUD_ACTIONS.EDIT);
        setCategoryEdit(category.id);
    }

    return (
        <div className="multimedia">
            <div className="multimedia-header">
                <img src="https://png.pngtree.com/png-vector/20191022/ourlarge/pngtree-multimedia-icon-for-your-project-png-image_1843310.jpg" style={{width:'4%'}} alt="" />
                <div className="mediaTitle">Đa phương tiện</div>
            </div>
            <TabMultimedia
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <form className='list-slide' onSubmit={handleSubmit(handleSaveSlide)}>
                        <div className='formSlide col-md-12'>
                            <div className="form-group col-md-4 p-0">
                                <label htmlFor="">Tiêu đề</label>
                                <input type="text" className="form-control" 
                                    {...register('name', { required: true })}
                                />
                                <div className='text-danger'>{errors.name?.type === 'required' && "Vui lòng nhập tiêu đề"}</div>
                            </div>

                            <div className="form-group col-md-2">
                                <label htmlFor="">Trạng thái</label>
                                <select className="form-control"
                                    {...register('status', { required: true })}
                                >
                                    {
                                        statusSlide?.length > 0 && 
                                        statusSlide.map((item, index) => {
                                            return(
                                                <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className='text-danger'>{errors.status?.type === 'required' && "Vui lòng chọn trạng thái"}</div>
                            </div>

                            <div className='upload-file d-flex col-md-4'>
                                <div className="form-group col-5 p-0">
                                    <label>Ảnh</label>
                                    <input id="previewImg" type="file" hidden 
                                        onChange={(e)=>changeImage(e)}
                                        name='image'
                                    />

                                    <label htmlFor="previewImg" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                                </div>

                                <div className="preview-image col-7 border" 
                                    style={{backgroundImage: `url(${previewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                                >
                                    {
                                        previewImg ?
                                        <div 
                                            onClick={() =>removeImg()} 
                                            className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                            <i className="far fa-times-circle text-danger"></i>
                                        </div> 
                                        : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                                    }
                                </div>
                            </div>
                            <button type='submit' className={action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-success" }>
                                { action === CRUD_ACTIONS.EDIT ? 'Cập nhật' : "Thêm mới" } 
                            </button>
                        </div>
                        <hr/>

                        <div className="text-dark">Danh sách (<b>{slide.length}</b>)</div>
                        <table className="table table-striped table-bordered table-hover">
                            <thead className="text-white">
                                <tr>
                                    <td>STT</td>
                                    <td>Ảnh</td>
                                    <td>Tiêu đề</td>
                                    <td>Tác vụ</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    slide?.length> 0 ?
                                    slide.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>                                               
                                                <td style={{width:'5%'}}><img src={item.image} className="w-100" alt="" /> </td>
                                                <td>{item.name}</td>
                                                <td className=''>
                                                    <button onClick={() => editSlide(item)} type="button" className="btn text-primary mr-3">
                                                        <i className="fas fa-edit"></i>
                                                    </button>

                                                    <button onClick={() => deleteSlide(item)} type="button" className="btn text-danger">
                                                        <i className="fas fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <tr>
                                        <td colSpan={6}>
                                            <div className="text-center">
                                                <h4>Không có dữ liệu</h4>
                                            </div>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </form>
                
                </TabPane>
                
                <SpecialCategory
                    category={category}
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                    action={action}

                    saveCategory={saveCategory}
                    categoryName={categoryName}
                    setCategoryName={setCategoryName}
                    changeImageCategory = {changeImageCategory}
                    categoryPreviewImg = {categoryPreviewImg}
                    specialCategories = {specialCategories}
                    editSpecialCategory = {editSpecialCategory}
                />
            </TabContent>
        </div>
    );
}
export default Multimedia;
