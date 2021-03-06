import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import * as actions from '../../../store/actions';

const ModalEditNews  = (props) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category_id, setCategory] = useState('');
    const [productId, setProductId] = useState('');
    const [author_id, setAuthor] = useState('');
    const [date, setDate] = useState('');
    
    const dispatch = useDispatch();
    const [previewImg, setPreviewImg] = useState('');
    const listCategory = useSelector(state => state.admin.categories);
    const listProduct = useSelector(state => state.admin.products);

    // fill info news to edit
    useEffect (() => {
        let news = props.currentNews;
        if(news) {
            setId(news.id);
            setName(news.name);
            setPreviewImg(news.image);
            setImage(news.previewImg);
            setDescription(news.description);
            setCategory(news.category_id);
            setProductId(news.productId);
            setAuthor(news.author_id);
            setDate(news.date);
        }
        dispatch(actions.fetchAllCategory());
        dispatch(actions.fetchProducts());
    }, [dispatch, props.currentNews]);

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

    const EditNews=(e)=>{
        e.preventDefault();
        props.editNews({
            id: id,
            name: name,
            image: image,
            previewImg: previewImg,
            description: description,
            category_id: category_id,
            productId: productId,
            author_id: author_id,
            date: date,
        });
        toggle();
    }

    return (
        <Modal isOpen={props.isOpen} toggle={()=>toggle()} size="lg">
        <form
            onSubmit={EditNews}
            encType='multipart/form-data'
        >
            <ModalHeader toggle={()=>toggle()}>C???p nh???t tin t???c</ModalHeader>
            <ModalBody>
                <div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Ti??u ????? </label>
                            <input type="input" className="form-control" 
                                onChange= {(e)=>setName(e.target.value)}
                                value={name}
                            />
                        </div>

                        <div className="form-group col-md-3">
                            <label>???nh</label>
                            <input id="previewImg" type="file" hidden 
                                onChange={(e)=>changeImage(e)}
                                name='image'
                            />
                            <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> T???i ???nh</label>  
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
                            <label>T??c gi???</label>
                            <input value={author_id} onChange={(e)=>setAuthor(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="form-group col-4">
                            <label>description</label>
                            <input value={description} onChange={(e)=>setDescription(e.target.value)}  type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-4">
                            <label>Ng??y ????ng</label>
                            <input value={date} onChange={(e)=>setDate(e.target.value)} type="text" className="form-control" />
                            <button onClick={()=> setDate(new Date())} type="button" className="btn btn-primary"><i className="fas fa-sync-alt"></i></button>
                        </div>
                        <div className="form-group col-md-4">
                            <label>Danh m???c</label>
                            <select className="form-control"
                                onChange={(e) => setCategory(e.target.value)}
                                value={category_id}
                            >
                                {   
                                    listCategory?.length >0 ?
                                    listCategory.map((item, index) => {
                                        return (
                                            <option key={index} value={item.keyMap}>{item.name}</option>
                                        )
                                    })
                                    : 
                                    <option>Kh??ng c?? d??? li???u</option>
                                }                                                                  
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <label>S???n ph???m</label>
                            <select className="form-control"
                                onChange={(e) => setProductId(e.target.value)}
                                value={productId}
                            >
                                {   
                                    listProduct?.length >0 ?
                                    listProduct.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    })
                                    : 
                                    <option>Kh??ng c?? d??? li???u</option>
                                }                                                                  
                            </select>
                        </div>
                    </div>
                </div>
            </ModalBody>
            
            <ModalFooter>
                <Button color="primary" className="btn" type='submit'>C???p nh???t</Button>
                <Button color="secondary" className="btn">Hu???</Button>
            </ModalFooter>
        </form>
        </Modal>
    )
}
export default ModalEditNews;
