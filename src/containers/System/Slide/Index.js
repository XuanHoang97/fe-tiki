import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {CreateSlide, CreateSpecialCategory, DeleteSlide, EditSlide, EditSpecialCategory, fetchAllCategory, fetchAllSlide, fetchAllSpecialCategory, getStatusSlide} from '../../../store/actions';
import { CommonUtils, CRUD_ACTIONS } from '../../../utils';

const Slide = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    const [categoryId, setCategoryId] = useState('');
    //slide
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
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

    console.log('slide', statusSlide);

    useEffect(() => {
        dispatch(fetchAllSlide());
        dispatch(fetchAllCategory());
        dispatch(fetchAllSpecialCategory());
        dispatch(getStatusSlide());
    }, []);


    //onChange image
    const changeImage = async(e) => {
        let data=e.target.files;
        let file=data[0];
        if(file){
            let base64=await CommonUtils.getBase64(file);
            let objectUrl=URL.createObjectURL(file)
            setPreviewImg(objectUrl);
            setImage(base64);
        }
    }

    const changeImageCategory = async(e) => {
        let data=e.target.files;
        let file=data[0];
        if(file){
            let base64=await CommonUtils.getBase64(file);
            let objectUrl=URL.createObjectURL(file)
            setCategoryPreviewImg(objectUrl);
            setCategoryImage(base64);
        }
    }

    //remove image
    const removeImg=()=>{
        setPreviewImg('');
        setImage('');
        
        setCategoryPreviewImg('');
        setCategoryImage('');
    }

    //Add and Edit Slide
    const handleSaveSlide=()=>{
        if(action===CRUD_ACTIONS.CREATE){
            dispatch(CreateSlide({
                name:name,
                image:image,
                status:status,
                date:date,
                categoryId:categoryId,
            }));
            setName('');
            setImage('');
            setStatus('');
            setPreviewImg('');
            setCategoryId('');
        }
        if(action===CRUD_ACTIONS.EDIT){
            dispatch(EditSlide({
                id:slideEdit,
                name:name,
                image:image,
                status:status,
                previewImg:previewImg,
                date:date,
                categoryId:categoryId,
            }));
            setName('');
            setImage('');
            setStatus('');
            setPreviewImg('');
            setCategoryId('');
            setAction(CRUD_ACTIONS.CREATE);
        }
    }

    
    
    //delete slide
    const deleteSlide=(slide)=>{
        dispatch(DeleteSlide(slide.id));
    }

    //edit slide
    const editSlide=(slide)=>{
        let imageBase64='';
        if(slide.image){
            imageBase64= new Buffer(slide.image, 'base64').toString('binary');
        }
        setName(slide.name);
        setPreviewImg(imageBase64);
        setDate(slide.date);
        setStatus(slide.status);
        setCategoryId(slide.categoryId);
        setAction(CRUD_ACTIONS.EDIT);
        setSlideEdit(slide.id);
    }
    
    //Add and edit Special category
    const saveCategorySpecial = () => {
        if(categoryAction===CRUD_ACTIONS.CREATE){
            dispatch(CreateSpecialCategory({
                name:categoryName,
                image:categoryImage,
                date:categoryDate,
                categoryId:categoryId,
            }));
            setCategoryName('');
            setCategoryImage('');
            setCategoryPreviewImg('');
            setCategoryId('');
        }

        if(categoryAction===CRUD_ACTIONS.EDIT){
            dispatch(EditSpecialCategory({
                id:categoryEdit,
                name:categoryName,
                image:categoryImage,
                previewImg:categoryPreviewImg,
                date:categoryDate,
                categoryId:categoryId,
            }));
            setCategoryName('');
            setCategoryImage('');
            setCategoryPreviewImg('');
            setCategoryId('');
            setCategoryAction(CRUD_ACTIONS.CREATE);
        }
    }

    //edit category special
    const editSpecialCategory = (category) => {
        let imageBase64='';
        if(category.image){
            imageBase64= new Buffer(category.image, 'base64').toString('binary');
        }
        setCategoryName(category.name);
        setCategoryPreviewImg(imageBase64);
        setCategoryDate(category.date);
        setCategoryId(category.categoryId);
        setCategoryAction(CRUD_ACTIONS.EDIT);
        setCategoryEdit(category.id);
    }

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý đa phương tiện</div>

            <Nav tabs>
                <NavItem>
                    <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        <div className='font-weight-bold'>Quản lý Slide</div>
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        <div className='font-weight-bold'>Danh mục nổi bật</div>   
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        <div className='font-weight-bold'>Quản lý hình ảnh và video</div>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                        <div className='font-weight-bold'>Quản lý Banner </div>
                    </NavLink>
                </NavItem>
            </Nav>
            
            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    <div className='list-slide'>
                        <div className='d-flex justify-content-between col-12 p-0'>
                            <div className="form-group col-3 p-0">
                                <label htmlFor="">Tiêu đề</label>
                                <input type="text" className="form-control" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-2">
                                <label htmlFor="">Ngày đăng</label>
                                <input type="text" className="form-control" 
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-2 pl-0">
                                <label>Danh mục</label>
                                <select className="form-control"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    {
                                        category.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.name}</option>
                                        })
                                    }            
                                </select>
                            </div>

                            <div className="form-group col-2">
                                <label htmlFor="">Trạng thái</label>
                                <select className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    {
                                        statusSlide && statusSlide.length > 0 && 
                                        statusSlide.map((item, index) => {
                                            return(
                                                <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div className='upload-file d-flex col-3 p-0'>
                                <div className="form-group col-4 p-0">
                                    <label>Ảnh</label>
                                    <input id="previewImg" type="file" hidden 
                                        onChange={(e)=>changeImage(e)}
                                    />

                                    <label htmlFor="previewImg" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                                </div>

                                <div className="preview-image col-8 border" 
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

                        </div>

                        <button onClick={() =>handleSaveSlide() } className={action === CRUD_ACTIONS.EDIT ? "btn btn-warning px-2" : "btn btn-success px-2" }>
                            { action === CRUD_ACTIONS.EDIT ? 'Cập nhật' : "Thêm mới" } 
                        </button>
                        <hr/>

                        <div className="text-dark">Danh sách slide (<b>{slide.length}</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>Tick</td>
                                    <td>STT</td>
                                    <td>Ảnh</td>
                                    <td>Tiêu đề</td>
                                    <td>Ngày đăng</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    slide && slide.length> 0 ?
                                    slide.map((item, index) => {
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
                                                    width: '45px', borderRadius: '50%', display: 'flex', margin: '0 auto'}}></td>
                                                <td className='text-primary'>{item.name}</td>
                                                <td>{item.date}</td>
                                                <td className=''>
                                                    <button onClick={() => editSlide(item)} type="button" className="btn text-primary  mr-3">
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
                    </div>
                </TabPane>

                <TabPane tabId="2">
                <div className='list-category-special'>
                    <div className='d-flex justify-content-between col-12 p-0'>
                            <div className="form-group col-4 p-0">
                                <label htmlFor="">Tiêu đề</label>
                                <input type="text" className="form-control" 
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-2">
                                <label htmlFor="">Ngày đăng</label>
                                <input type="text" className="form-control" 
                                    value={categoryDate}
                                    onChange={(e) => setCategoryDate(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-2 pl-0">
                                <label>Danh mục</label>
                                <select className="form-control"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    {
                                        category.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.name}</option>
                                        })
                                    }            
                                </select>
                            </div>

                            <div className='upload-file d-flex col-4 p-0'>
                                <div className="form-group col-4 p-0">
                                    <label>Ảnh</label>
                                    <input id="previewImgCategory" type="file" hidden 
                                        onChange={(e)=>changeImageCategory(e)}
                                    />

                                    <label htmlFor="previewImgCategory" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                                </div>

                                <div className="preview-image col-8 border" 
                                    style={{backgroundImage: `url(${categoryPreviewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                                >
                                    {
                                    categoryPreviewImg ?
                                    <div 
                                        onClick={() =>removeImg()} 
                                        className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                        <i className="far fa-times-circle text-danger"></i>
                                    </div> 
                                    : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                                    }
                                </div>
                            </div>

                        </div>

                        <button onClick={() => saveCategorySpecial() }  
                        className={action === CRUD_ACTIONS.EDIT ? "btn btn-warning px-2" : "btn btn-success px-2" }>
                            { action === CRUD_ACTIONS.EDIT ? 'Cập nhật' : "Thêm mới" } 
                        </button>
                        <hr/>

                        <div className="text-dark">Danh sách danh mục nổi bật (<b>{specialCategories.length}</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>Tick</td>
                                    <td>STT</td>
                                    <td>Ảnh</td>
                                    <td>Tên</td>
                                    <td>Ngày đăng</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    specialCategories && specialCategories.length> 0 ?
                                    specialCategories.map((item, index) => {
                                        //endCode image
                                        let imageBase64='';
                                        if(item.image){
                                            imageBase64=new Buffer(item.image, 'base64').toString('binary')
                                        }
                                        return(
                                            <tr key={index}>
                                                <td>
                                                    <div className="form-group">
                                                        <input type="checkbox" className="w-100" />
                                                    </div>
                                                </td>
                                                <td>{index + 1}</td>
                                                <td className='border'
                                                    style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', borderRadius: '50%'}}
                                                ></td>
                                                <td className='text-primary'>{item.name}</td>
                                                <td>{Date()}</td>
                                                <td className='d-flex'>
                                                    <button onClick={()=> editSpecialCategory(item)} type="button" className="btn text-primary  mr-3">
                                                        <i className="fas fa-edit"></i>
                                                    </button>

                                                    <button type="button" className="btn text-danger">
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
                    </div>
                </TabPane>

                <TabPane tabId="3">Tab 3 Content</TabPane>
                <TabPane tabId="4">Tab 4 Content</TabPane>
            </TabContent>
        </div>
    );
}

export default Slide;
