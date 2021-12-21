import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {CommonUtils} from "../../../utils"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt();

const ModalAddCategory = (props) => {
    const [previewImg, setPreviewImg] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [keyMap, setKeyMap] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    


    //fetch product
    useEffect(() => {
        
    }, []);

    const toggle =()=>{
        props.toggleParent();
    }

    // add new category
    const handleAddCategory=()=>{
        props.CreateCategory({
            name: name,
            image: image,
            previewImg: previewImg,
            keyMap: keyMap,
            type: type,
            value: value,
        });
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
                
                <ModalHeader toggle={()=>toggle()}>Thêm mới danh mục</ModalHeader>
                <ModalBody>
                
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Tên </label>
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

                    <div className="form-group col-md-6">
                        <label>KeyMap </label>
                        <input type="input" className="form-control" 
                            onChange= {(e)=>setKeyMap(e.target.value)}
                            value={keyMap}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Type </label>
                        <input type="input" className="form-control" 
                            onChange= {(e)=>setType(e.target.value)}
                            value={type}
                        />
                    </div>

                    <div className="form-group col-md-6">
                        <label>Value </label>
                        <input type="input" className="form-control" 
                            onChange= {(e)=>setValue(e.target.value)}
                            value={value}
                        />
                    </div>
                </form>
                
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" className="px-3" onClick={() => {handleAddCategory()}}>
                        Thêm mới
                    </Button>
                    <Button color="secondary" className="px-3">Cancel</Button>
                </ModalFooter>
            </Modal>
        )
}

const mapStateToProps = state => {
    return {
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddCategory);
