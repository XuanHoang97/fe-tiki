import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalEditCategory  = (props) => {
    const [id, setId] = useState('');
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [name, setName] = useState('');
    const [keyMap, setKeyMap] = useState('');
    const [type, setType] = useState('');
    const [value, setValue] = useState('');

    useEffect (() => {
        let category = props.currentCategory;
        //fill info category
        setId(category.id);
        setPreviewImg(category.image);
        setName(category.name);
        setKeyMap(category.keyMap);
        setType(category.type);
        setValue(category.value);
    }, [props.currentCategory]);

    const toggle =()=>{
        props.toggleParent();
    }

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
    //remove image
    const removeImg=()=>{
        setPreviewImg('');
        setImage('');
    }

    const EditCategory=(e)=>{
        e.preventDefault();
        props.editCategory({
            id: id,
            image : image,
            name : name,
            keyMap : keyMap,
            type : type,
            value : value,
            previewImg: previewImg,
        });
        toggle();
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            size="lg"
        >   
        <form
            onSubmit={EditCategory}
            encType='multipart/form-data'
        >
            <ModalHeader toggle={()=>toggle()}>Cập nhật danh mục</ModalHeader>
            <ModalBody>
                <div>
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
                                name='image'
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
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="px-3" type='submit'>
                    Cập nhật
                </Button>
                <Button color="secondary" className="px-3">Cancel</Button>
            </ModalFooter>
        </form>
        </Modal>
    )
}
export default ModalEditCategory;
