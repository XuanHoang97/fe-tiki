import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {CommonUtils} from "../../../utils"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';

const ModalProduct = (props) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [previewImg, setPreviewImg] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [number, setNumber] = useState('');
    const [warranty, setWarranty] = useState('');
    const [status, setStatus] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [supplier_id, setSupplier_id] = useState('');

    const [statusArr, setStatusArr] = useState([]);
    const [categoryArr, setCategoryArr] = useState([]);
    const [supplierArr, setSupplierArr] = useState([]);
    
    //fetch data
    useEffect(() => {
        let arrStatus = props.listStatus;                                       
        props.fetchStatusProduct();
        setStatusArr(arrStatus);
        setStatus(arrStatus[0]);

        let arrCategory = props.listCategory;
        props.fetchCategories();
        setCategoryArr(arrCategory);
        setCategory_id(arrCategory[0]);

        let arrSupplier = props.listSupplier;
        props.fetchSupplierProduct();
        setSupplierArr(arrSupplier);
        setSupplier_id(arrSupplier[0]);
    }, [statusArr, categoryArr , supplierArr]);

    //reset form
    useEffect(() => {
        setName('');
        setImage('');
        setPreviewImg('');
        setPrice('');
        setSale('');
        setNumber('');
        setWarranty('');
        setStatus('');
        setCategory_id('');
        setSupplier_id('');
    }, [props.listProducts]);

    const toggle =()=>{
        props.toggleParent();
    }

    // add new product
    const handleAddNewProduct=()=>{
        props.createProduct({
            name: name,
            image: image,
            previewImg: previewImg,

            price: price,
            sale: sale,
            number: number,
            warranty: warranty,
            status: status,
            category_id: category_id,
            supplier_id: supplier_id,
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
                
                <ModalHeader toggle={()=>toggle()}>Thêm mới sản phẩm</ModalHeader>
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
                    
                    <div className="row">    
                        <div className="form-group col-6">
                            <label>Giá</label>
                            <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="form-group col-6">
                            <label>Sale</label>
                            <input value={sale} onChange={(e)=>setSale(e.target.value)}  type="text" className="form-control" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Trạng thái</label>
                            <select className="form-control"
                                onChange={(e) => setStatus(e.target.value)}
                                defaultValue={status}
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
                            <label>Số lượng</label>
                            <input value={number} onChange={(e)=>setNumber(e.target.value)}  type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-4">
                            <label>Bảo hành</label>
                            <input value={warranty} onChange={(e)=>setWarranty(e.target.value)}  type="text" className="form-control" />
                        </div>                             
                    </div>
                    

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Danh mục</label>
                            <select className="form-control"
                                onChange={(e) => setCategory_id(e.target.value)}
                                defaultValue={category_id}
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

                        <div className="form-group col-md-4">
                            <label>Xuất xứ</label>
                            <select className="form-control"
                                onChange={(e) => setSupplier_id(e.target.value)}
                                defaultValue={supplier_id}
                            >
                                {
                                    props.listSupplier && props.listSupplier.length >0 ?
                                        props.listSupplier.map((item, index)=>{
                                            return(
                                                <option key={index} value={item.valueVi}>{item.valueVi}</option>
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
                    <Button color="primary" className="px-3" onClick={() => {handleAddNewProduct()}}>
                        Thêm mới
                    </Button>
                    <Button color="secondary" className="px-3">Cancel</Button>
                </ModalFooter>
            </Modal>
        )
}

const mapStateToProps = state => {
    return {
        listStatus: state.admin.status,
        listCategory: state.admin.categories,
        listSupplier: state.admin.supplier,
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchStatusProduct: ()=> dispatch(actions.fetchStatusProduct()),
        fetchCategories: () => dispatch(actions.fetchAllCategory()),
        fetchSupplierProduct: () => dispatch(actions.fetchSupplierProduct()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalProduct);
