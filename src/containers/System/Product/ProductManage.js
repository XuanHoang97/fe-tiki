import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalProduct from './ModalProduct';
import ModalEditProduct from './ModalEditProduct';
import Sort from './Sort';
import { numberFormat } from '../../../components/Formating/FormatNumber';

const ProductManage = (props) => {
    const [modalProduct, setModalProduct] = useState(false);
    const [modalEditProduct, setModalEditProduct] = useState(false);
    const [productEdit, setProductEdit] = useState('');

    //fetch product
    const dispatch = useDispatch();
    const listProducts = useSelector(state => state.admin.products);

    useEffect(() => {
        dispatch(actions.fetchProducts());
    }, [dispatch]);

    //OPEN MODAL Create, Edit Product
    const toggleProductModal=()=> {
        setModalProduct(!modalProduct);
    }

    const toggleProductEditModal=()=>{
        setModalEditProduct(!modalEditProduct);
    }

    //create product
    const handleAddNewProduct = () => {
        setModalProduct(!modalProduct);
    }

    const CreateNewProduct=(data)=> {
        dispatch(actions.CreateNewProduct(data));
    }

    //delete product
    const deleteProduct = (product) => {
        dispatch(actions.DeleteProduct(product.id));
    }

    //edit product
    const editProduct = (product) => {
        setModalEditProduct(!modalEditProduct);
        setProductEdit(product);
    }

    const handleEditProduct = (data) => {
        dispatch(actions.EditProduct(data));
    }

    //filter product
    const filterProduct = (categoryId) => {
        dispatch(actions.GetAllProductByCategory(categoryId));
    }

    return (        
        <div className="mx-2">
            <ModalProduct
                isOpen={modalProduct}
                toggleParent={toggleProductModal} 
                createProduct={CreateNewProduct}
            />

            <ModalEditProduct  
                isOpen={modalEditProduct}
                toggleParent={toggleProductEditModal}
                currentProduct={productEdit}
                editProduct={handleEditProduct}
            />

            <div className="h5 text-dark mb-4">Quản lý sản phẩm</div>
            <div className="d-flex mb-3 justify-content-between">
                <button onClick={() => handleAddNewProduct()} type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus"></i> Thêm sản phẩm
                </button>

                <Sort  
                    filterProduct={filterProduct}

                />
            </div>

            <div className="text-dark">Danh sách sản phẩm (<b>{listProducts.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <td scope="col">Tick</td>
                        <td scope="col">STT</td>
                        <td scope="col">Ảnh</td>
                        <td scope="col">Tên SP</td>
                        <td scope="col">Số lượng</td>
                        <td scope="col">Bảo hành</td>
                        <td scope="col">Giá (VND)</td>
                        <td scope="col">Sale (VND)</td>
                        <td scope="col">Trạng thái</td>
                        <td scope="col">Xuất xứ</td>
                        <td scope="col">Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                    {   
                        listProducts && listProducts.length>0 ?
                        listProducts.map((item, index) => {
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
                                    <td style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '45px',
                                        width: '45px', borderRadius: '50%', display: 'flex', margin: '0 auto'}}>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.number}</td>
                                    <td>{item.warranty}</td>
                                    <td>{numberFormat(item.price)}</td>
                                    <td>{numberFormat(item.sale)}</td>
                                    <td>{item.status}</td>
                                    <td>{item.supplier_id}</td>
                                    <td>
                                        <button onClick={()=> editProduct(item)} type="button" className="btn text-primary px-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button onClick={()=> deleteProduct(item)} type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        : 
                        <tr>
                            <td colSpan="10" className="text-center">Không có sản phẩm nào</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ProductManage;
