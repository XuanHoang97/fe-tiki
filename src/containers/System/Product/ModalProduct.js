import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {CommonUtils} from "../../../utils"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import * as actions from '../../../store/actions';

const ModalProduct = (props) => {
    const [name, setName] = useState('');
    const [previewImgURL, setPreviewImgURL] = useState('');
    const [price, setPrice] = useState('');
    const [sale, setSale] = useState('');
    const [quantity, setQuantity] = useState(10);
    const [warranty, setWarranty] = useState(3);
    const [status, setStatus] = useState('');
    const [category, setCategory] = useState('');
    const [supplier, setSupplier] = useState('');

    const [statusArr, setStatusArr] = useState([]);
    const [categoryArr, setCategoryArr] = useState([]);
    const [supplierArr, setSupplierArr] = useState([]);
    
    //fetch data
    useEffect(() => {
        let arrStatus = props.listStatus;                                       
        props.fetchStatusProduct();
        setStatusArr(arrStatus);
        setStatus(arrStatus[0]);

        console.log('check data list status:', arrStatus);
        console.log('check data arr:', statusArr);
        console.log('check status: ', status);

        let arrCategory = props.listCategory;
        props.fetchCategories();
        setCategoryArr(arrCategory);
        setCategory(arrCategory[0]);

        let arrSupplier = props.listSupplier;
        props.fetchSupplierProduct();
        setSupplierArr(arrSupplier);
        setSupplier(arrSupplier[0]);

    }, [statusArr, categoryArr , supplierArr]);
    

    const toggle =()=>{
        props.toggleFromParent();
    }

    // add new product
    const handleAddNewProduct=()=>{
            // props.createNewUser(state);
            // props.toggleFromParent();
            console.log('check data state: ', name, previewImgURL, price, sale, quantity, status, warranty, category, supplier);
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
                                // onChange={(e)=>setPreviewImgURL(e.target.files[0])}
                            />

                            <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                        
                        </div>

                        <div className="preview-image col-md-2 border">
                            <div className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div>
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
                         
                         
                        <>
                            <div className="form-group col-md-4">
                                <label>Số lượng</label>
                                <input value={quantity} onChange={(e)=>setQuantity(e.target.value)}  type="text" className="form-control" />
                            </div>
                            <div className="form-group col-md-4">
                                <label>Bảo hành</label>
                                <input value={warranty} onChange={(e)=>setWarranty(e.target.value)}  type="text" className="form-control" />
                            </div>
                        </>
                          
                    </div>
                    

                    <div className="row">
                        <div className="form-group col-md-4">
                            <label>Danh mục</label>
                            <select className="form-control"
                                onChange={(e) => setCategory(e.target.value)}
                                defaultValue={category}
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
                                onChange={(e) => setSupplier(e.target.value)}
                                defaultValue={supplier}
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
        listSupplier: state.admin.supplier
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
