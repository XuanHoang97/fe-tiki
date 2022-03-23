import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalEditCategory  = (props) => {
    const [id, setId] = useState('');
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [name, setName] = useState('');

    //fill info category
    useEffect (() => {
        let category = props.currentCategory;
        if(category) {
            setId(category.id);
            setPreviewImg(category.image);
            setName(category.name);
        }
    }, [props.currentCategory]);

    const toggle =()=>{
        props.toggleParent();
    }

    //onChange image
    const changeImage = async(e) => {
        let file=e.target.files[0];
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
            previewImg: previewImg,
        });
        toggle();
    }

    return (
        <Modal isOpen={props.isOpen} toggle={()=>toggle()} size="lg">   
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
                </div>
            </ModalBody>

            <ModalFooter>
                <Button color="primary" className="btn" type='submit'>Cập nhật</Button>
                <Button color="secondary" className="btn">Huỷ</Button>
            </ModalFooter>
        </form>
        </Modal>
    )
}
export default ModalEditCategory;
