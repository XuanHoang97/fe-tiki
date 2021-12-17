import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalProduct from './ModalProduct';
import ModalEditProduct from './ModalEditProduct';
import Sort from './Sort';

const ProductManage = (props) => {
    const [products, setProducts] = useState([]);
    const [modalProduct, setModalProduct] = useState(false);
    const [modalEditProduct, setModalEditProduct] = useState(false);
    const [productEdit, setProductEdit] = useState('');

    //fetch product
    useEffect(() => {
        props.fetchProducts();
        setProducts(props.listProducts);
    }, [products]);

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
        props.CreateNewProduct({
            name: data.name,
            price: data.price,
            sale: data.sale,
            warranty: data.warranty,
            number: data.number,
            category_id: data.category_id,
            supplier_id: data.supplier_id,
            image: data.image,
            previewImg: data.previewImg,
            status: data.status,
        });
    }

    //delete product
    const deleteProduct = (product) => {
        props.deleteProduct(product.id);
    }

    //edit product
    const editProduct = (product) => {
        setModalEditProduct(!modalEditProduct);
        setProductEdit(product);
    }

    const handleEditProduct = (data) => {
        props.editProduct({
            id: data.id,
            name: data.name,
            price: data.price,
            sale: data.sale,
            warranty: data.warranty,
            number: data.number,
            category_id: data.category_id,
            supplier_id: data.supplier_id,
            image: data.image,
            status: data.status,
        });

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

                <Sort />
            </div>

            <div className="text-dark">Danh sách sản phẩm (<b>{props.listProducts.length}</b>)</div>
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
                        <td scope="col">Danh mục</td>
                        <td scope="col">Trạng thái</td>
                        <td scope="col">Xuất xứ</td>
                        <td scope="col">Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                    {   
                        props.listProducts && props.listProducts.length>0 ?
                        props.listProducts.map((item, index) => {
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
                                    <td>{item.price}</td>
                                    <td>{item.sale}</td>
                                    <td>{item.category_id}</td>
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

const mapStateToProps = state => {
    return {
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(actions.fetchProducts()),
        CreateNewProduct: (data) => dispatch(actions.CreateNewProduct(data)),
        deleteProduct: (id) => dispatch(actions.DeleteProduct(id)),
        editProduct: (data) => dispatch(actions.EditProduct(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
