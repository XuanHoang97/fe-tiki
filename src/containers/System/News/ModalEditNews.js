import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {CommonUtils} from "../../../utils"

import _ from 'lodash';
import * as actions from '../../../store/actions';

const ModalEditNews  = (props) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');
    const [category_id, setCategory] = useState('');
    const [author_id, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [view, setView] = useState('');
    const [hot, setHot] = useState('');
    
    const [previewImg, setPreviewImg] = useState('');
    const [statusArr, setStatusArr] = useState([]);
    const [categoryArr, setCategoryArr] = useState([]);

    useEffect (() => {
        let news = props.currentNews;
        if(news && !_.isEmpty(news)) {
            //fix bug buffer
            let imageBase64='';
            if(news.image){
                imageBase64= new Buffer(news.image, 'base64').toString('binary');
            }
            // fill info news to edit
            setId(news.id);
            setName(news.name);
            setImage(imageBase64);
            setDescription(news.description);
            setContent(news.content);
            setStatus(news.status);
            setCategory(news.category_id);
            setAuthor(news.author_id);
            setDate(news.date);
            setView(news.view);
            setHot(news.hot);
            setPreviewImg(imageBase64);
        } 
        props.fetchCategories();
        props.fetchStatusNews();

        setStatusArr(props.listStatus);
        setCategoryArr(props.listCategory);

    }, [props.currentNews]);


    const toggle =()=>{
        props.toggleParent();
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

    const EditNews=()=>{
        props.editNews({
            id: id,
            name: name,
            image: image,
            description: description,
            content: content,
            status: status,
            category_id: category_id,
            author_id: author_id,
            date: date,
            view: view,
            hot: hot,
        });
        toggle();
    }


    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            size="lg"
        >
            
            <ModalHeader toggle={()=>toggle()}>Cập nhật tin tức - sự kiện</ModalHeader>
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
                            <input value={author_id} onChange={(e)=>setAuthor(e.target.value)} type="text" className="form-control" />
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
                                onChange={(e) => setCategory(e.target.value)}
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
                <Button color="primary" className="px-3" onClick={() => {EditNews()}}>
                    Cập nhật
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(actions.fetchAllCategory()),
        fetchStatusNews: () => dispatch(actions.fetchStatusNews()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditNews);