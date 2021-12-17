import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {CommonUtils} from "../../../utils"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';

const ModalAddNews = (props) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');

    const [date, setDate] = useState(new Date());
    const [author_id, setAuthor_id] = useState('');
    const [view, setView] = useState('');
    const [hot, setHot] = useState('');
    const [status, setStatus] = useState('');
    const [category_id, setCategory_id] = useState('');

    const [statusArr, setStatusArr] = useState([]);
    const [categoryArr, setCategoryArr] = useState([]);
    

    //fetch data
    useEffect(() => {
        props.fetchCategories();
        setCategoryArr(props.listCategory);
        setCategory_id(props.listCategory[0]);

        props.fetchStatusNews();
        setStatusArr(props.listStatus);
        setStatus(props.listStatus[0]);
    }, [statusArr, categoryArr]);

    //reset form
    useEffect(() => {
        setName('');
        setImage('');
        setPreviewImg('');
        setContent('');
        setDescription('');
        setDate(new Date());
        // setView('');
        setHot('');
        setStatus('');
        setCategory_id('');
        setAuthor_id('');
    }, [props.listNews]);

    const toggle =()=>{
        props.toggleParent();
    }

    // add news & events
    const handleAddNews=()=>{
        const data = {
            name,
            image,
            previewImg,

            content,
            description,
            date,
            author_id,
            // view,
            hot,
            status,
            category_id,
        }
        props.createNews(data);
        toggle();
    }

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
    //remove image
    const removeImg=()=>{
        setPreviewImg('');
        setImage('');
    }
    
    return (
            <Modal 
                isOpen={props.isOpen} 
                toggle={()=>toggle()} 
                size="lg"
            >
                
                <ModalHeader toggle={()=>toggle()}>Thêm mới tin tức, sự kiện</ModalHeader>
                <ModalBody>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Tiêu đề </label>
                            <input type="input" className="form-control" 
                                onChange= {(e)=>setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label>Ảnh</label>
                            <input id="previewImg" type="file" hidden 
                                onChange={(e)=>changeImage(e)}
                            />

                            <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                        
                        </div>

                        <div className="preview-image col-md-2 border" 
                            style={{backgroundImage: `url(${previewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                        >
                            {
                            previewImg ?
                            <div onClick={() =>removeImg()} className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div> : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-100" alt="..." />
                            }
                        </div>
                    </div>
                    
                    <div className="row">    
                        <div className="form-group col-4">
                            <label>Tác giả</label>
                            <input value={author_id} onChange={(e)=>setAuthor_id(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="form-group col-4">
                            <label>description</label>
                            <input value={description} onChange={(e)=>setDescription(e.target.value)}  type="text" className="form-control" />
                        </div>

                        <div className="form-group col-4">
                            <label>content</label>
                            <input value={content} onChange={(e)=>setContent(e.target.value)}  type="text" className="form-control" />
                        </div>

                        <div className="form-group col-4">
                            <label>Hot</label>
                            <input value={hot} onChange={(e)=>setHot(e.target.value)}  type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-4">
                            <label>Ngày đăng</label>
                            <input value={date} onChange={(e)=>setDate(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="form-group col-md-4">
                            <label>Trạng thái</label>
                            <select className="form-control"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            >   
                                {
                                    props.listStatus && props.listStatus.length >0 ?
                                        props.listStatus.map((item, index)=>{
                                            return(
                                                <option key={index} value={item.valueVi}>{item.valueVi}</option>                                                 
                                            )
                                        })
                                        :
                                        <option>Không có dữ liệu</option>
                                }    
                            </select>
                        </div> 

                        <div className="form-group col-md-4">
                            <label>Danh mục</label>
                            <select className="form-control"
                                onChange={(e) => setCategory_id(e.target.value)}
                                value={category_id}
                            >
                                {   
                                    props.listCategory && props.listCategory.length >0 ?
                                    props.listCategory.map((item, index) => {
                                        return (
                                            <option key={index} value={item.name}>{item.name}</option>
                                        )
                                    })
                                    : 
                                    <option>Không có dữ liệu</option>
                                }                                                           
                                        
                            </select>
                        </div>
                    </div>
                </form>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => {handleAddNews()}}>
                        Thêm mới
                    </Button>
                    <Button color="secondary" className="px-3">Cancel</Button>
                </ModalFooter>
            </Modal>
        )
}

const mapStateToProps = state => {
    return {
        listCategory: state.admin.categories,
        listStatus: state.admin.status_news,
        listNews: state.admin.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(actions.fetchAllCategory()),
        fetchStatusNews: () => dispatch(actions.fetchStatusNews()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddNews);
