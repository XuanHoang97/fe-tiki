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
    const [date, setDate] = useState(Date);
    const [action, setAction] = useState(CRUD_ACTIONS.CREATE);
    const [slideEdit, setSlideEdit] = useState();

    //category special
    const [categoryName, setCategoryName] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [categoryPreviewImg, setCategoryPreviewImg] = useState('');
    const [categoryDate, setCategoryDate] = useState(Date);
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
        dispatch(actions.fetchAllSpecialCategory());
        dispatch(actions.getStatusSlide());
    }, [dispatch]);

    //onChange image
    const changeImage = async(e) => {
        let data=e.target.files;
        let file=data[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setPreviewImg(objectUrl);
            setImage(file);
        }
    }

    const changeImageCategory = async(e) => {
        let data=e.target.files;
        let file=data[0];
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
        setCategoryDate('');
    }

    //Add and Edit Slide
    const handleSaveSlide=(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('status', status);
        data.append('date', date);
        data.append('categoryId', categoryId);
        image && data.append('image', image);

        if(action===CRUD_ACTIONS.CREATE){
            dispatch(actions.CreateSlide(data));
            resetValue();
        }
        if(action===CRUD_ACTIONS.EDIT){
            dispatch(actions.EditSlide({
                id:slideEdit,
                name:name,
                image:previewImg,
                status:status,
                previewImg:previewImg,
                date:date,
                categoryId:categoryId,
            }));
            resetValue();
            setAction(CRUD_ACTIONS.CREATE);
        }
    }
    
    // fill info edit slide
    const editSlide=(slide)=>{
        if(slide.image){
            setPreviewImg(slide.image);
        }   
        setName(slide.name);
        setDate(slide.date);
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
        data.append('date', categoryDate);
        data.append('image', categoryImage);
        data.append('categoryId', categoryId);

        if(categoryAction===CRUD_ACTIONS.CREATE){
            dispatch(actions.CreateSpecialCategory(data));
            resetValueCategory();
        }

        if(categoryAction===CRUD_ACTIONS.EDIT){
            dispatch(actions.EditSpecialCategory({
                id:categoryEdit,
                name:categoryName,
                image:categoryPreviewImg,
                previewImg:categoryPreviewImg,
                date:categoryDate,
                categoryId:categoryId,
            }));
            resetValueCategory();
            setCategoryAction(CRUD_ACTIONS.CREATE);
        }
    }
    //fill info edit category special
    const editSpecialCategory = (category) => {
        if(category.image){
            setCategoryPreviewImg(category.image);
        }
        setCategoryName(category.name);
        setCategoryDate(category.date);
        setCategoryId(category.categoryId);
        setCategoryAction(CRUD_ACTIONS.EDIT);
        setCategoryEdit(category.id);
    }

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý đa phương tiện</div>
            <TabMultimedia
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            
            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                {/* Tab 1 - Slide  */}
                <Slide
                    handleSaveSlide = {handleSaveSlide}
                    name = {name}
                    setName = {setName}
                    date = {date}
                    setDate = {setDate}
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
                
                {/* Tab 2 - specialCategory  */}
                <SpecialCategory
                    category={category}
                    categoryId={categoryId}
                    setCategoryId={setCategoryId}
                    action={action}

                    saveCategorySpecial={saveCategorySpecial}
                    categoryName={categoryName}
                    setCategoryName={setCategoryName}
                    categoryDate={categoryDate}
                    setCategoryDate={setCategoryDate}
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
