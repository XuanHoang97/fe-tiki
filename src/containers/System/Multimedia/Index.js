import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { CRUD_ACTIONS } from '../../../utils';
import SpecialCategory from './SpecialCategory';
import TabMultimedia from './TabMultimedia';
import * as actions from './../../../store/actions';
import Slide from './Slide';

const Multimedia = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [categoryId, setCategoryId] = useState('');
    //slide
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
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
        setImage('');
        
        setCategoryPreviewImg('');
        setCategoryImage('');
    }

    //reset value
    const resetValue=()=>{
        setName('');
        setImage('');
        setPreviewImg('');
        setStatus('');
        setCategoryId('');
    }

    //reset value category
    const resetValueCategory=()=>{
        setCategoryName('');
        setCategoryImage('');
        setCategoryPreviewImg('');
    }

    //Add and Edit Slide
    const handleSaveSlide=(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('status', status);
        data.append('categoryId', categoryId);
        image && data.append('image', image);

        if(action===CRUD_ACTIONS.CREATE){
            dispatch(actions.CreateSlide(data));
            resetValue();
        }
        if(action===CRUD_ACTIONS.EDIT){
            const slide = new FormData();
            slide.append('id', slideEdit);
            slide.append('name', name);
            slide.append('status', status);
            slide.append('categoryId', categoryId);
            image && slide.append('image', image);
            dispatch(actions.EditSlide(slide));
            resetValue();
            setAction(CRUD_ACTIONS.CREATE);
        }
    }
    
    // fill info edit slide
    const editSlide=(slide)=>{
        setPreviewImg(slide.image);
        setName(slide.name);
        setStatus(slide.status);
        setCategoryId(slide.categoryId);
        setAction(CRUD_ACTIONS.EDIT);
        setSlideEdit(slide.id);
    }
    
    //delete slide
    const deleteSlide=(slide)=>{
        dispatch(actions.DeleteSlide(slide.id));
    }

    //Add and edit Special category
    const saveCategorySpecial = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', categoryName);
        data.append('categoryId', categoryId);
        categoryImage && data.append('image', categoryImage);

        if(categoryAction===CRUD_ACTIONS.CREATE){
            dispatch(actions.CreateSpecialCategory(data));
            resetValueCategory();
        }

        if(categoryAction===CRUD_ACTIONS.EDIT){
            const category = new FormData();
            category.append('id', categoryEdit);
            category.append('name', categoryName);
            category.append('categoryId', categoryId);
            categoryImage && category.append('image', categoryImage);
            dispatch(actions.EditSpecialCategory(category));
            resetValueCategory();
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
        <div className="p-2 bg-white">
            <div className="h5 text-dark mb-4">Quản lý đa phương tiện</div>
            <TabMultimedia
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            
            <TabContent activeTab={activeTab}>
                <Slide
                    handleSaveSlide = {handleSaveSlide}
                    name = {name}
                    setName = {setName}
                    categoryId = {categoryId}
                    setCategoryId = {setCategoryId}
                    category = {category}
                    
                    status = {status}
                    setStatus = {setStatus}
                    statusSlide = {statusSlide}
                    changeImage = {changeImage}
                    previewImg = {previewImg}
                    removeImg = {removeImg}
                    action = {action}
                    slide={slide}
                    editSlide={editSlide}
                    deleteSlide = {deleteSlide}
                />
                
                <SpecialCategory
                    category={category}
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                    action={action}

                    saveCategorySpecial={saveCategorySpecial}
                    categoryName={categoryName}
                    setCategoryName={setCategoryName}
                    changeImageCategory = {changeImageCategory}
                    categoryPreviewImg = {categoryPreviewImg}
                    removeImg = {removeImg}
                    specialCategories = {specialCategories}
                    editSpecialCategory = {editSpecialCategory}
                />
                <TabPane tabId="3">Tab 3 Content</TabPane>
                <TabPane tabId="4">Tab 4 Content</TabPane>
            </TabContent>
        </div>
    );
}
export default Multimedia;
