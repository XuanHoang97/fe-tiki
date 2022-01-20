import React,{useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions';
import ModalProduct from './ModalProduct';
import ModalEditProduct from './ModalEditProduct';
import Sort from './Sort';
import { numberFormat } from '../../../components/Formatting/FormatNumber';

// test data
import Filter from './Filter';

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


    //sorting product
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState([]);
    const [sortBy, setSortBy] = useState("");
    const [selectedTag, setSelectedTag] = useState("");

    useEffect(() => {
        setProducts(listProducts);
        setFilter(listProducts);
    }, [products, listProducts]);

    useEffect(() => {
        const filtered = selectedTag ? products.filter((item) => item.category_id === selectedTag) : products;
        setFilter(
          sortBy
            ? [...filtered].sort((a, b) => sortBy === "lowest" ? a.price - b.price : b.price - a.price )
            : [...filtered].sort((a, b) => (a.id > b.id ? 1 : -1))
        );
    }, [selectedTag, sortBy, products]);

    //create product
    const handleAddNewProduct = () => {
        setModalProduct(!modalProduct);
    }

    const CreateNewProduct=(data)=> {
        const dataProduct = new FormData();
        dataProduct.append('name', data.name);
        dataProduct.append('price', data.price);
        dataProduct.append('sale', data.sale);
        dataProduct.append('status', data.status);
        dataProduct.append('number', data.number);
        dataProduct.append('warranty', data.warranty);
        dataProduct.append('category_id', data.category_id);
        dataProduct.append('supplier_id', data.supplier_id);

        data.image && dataProduct.append('image', data.image);
        dispatch(actions.CreateNewProduct(dataProduct));
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
        dispatch(actions.EditProduct({
            id: productEdit.id,
            name: data.name,
            price: data.price,
            sale: data.sale,
            status: data.status,
            warranty: data.warranty,
            number: data.number,
            category_id: data.category_id,
            supplier_id: data.supplier_id,
            image: data.previewImg,
            previewImg: data.previewImg,
        }));
    }

    return (        
        <div className="mx-2">
            <ModalProduct
                isOpen={modalProduct}
                toggleParent={handleAddNewProduct}
                createProduct={CreateNewProduct}
            />

            <ModalEditProduct  
                isOpen={modalEditProduct}
                toggleParent={editProduct}
                currentProduct={productEdit}
                editProduct={handleEditProduct}
            />

            <div className="h5 text-dark mb-4">Quản lý sản phẩm</div>
            <div className="d-flex mb-3 justify-content-between">
                <button onClick={() => handleAddNewProduct()} type="button" className="btn btn-success col-2">
                    <i className="fas fa-plus"></i> Thêm sản phẩm
                </button>

                <Sort  
                    handleSort={setSortBy}
                    handleTagChange={setSelectedTag}
                    selectedTag={selectedTag}
                    sortBy={sortBy}
                />
            </div>

            <Filter 
                handleSort={setSortBy}
                handleTagChange={setSelectedTag}
                selectedTag={selectedTag}
                sortBy={sortBy}
            />

            <div className="text-dark">Danh sách sản phẩm (<b>{filter.length}</b>)</div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                    <tr>
                        <td scope="col">Tick</td>
                        <td scope="col">STT</td>
                        <td scope="col">Ảnh</td>
                        <td scope="col">Tên SP</td>
                        <td scope="col">Bảo hành</td>
                        <td scope="col">Giá (VND)</td>
                        <td scope="col">Sale (VND)</td>
                        <td scope="col">Trạng thái kho</td>
                        <td scope="col">Xuất xứ</td>
                        <td scope="col">Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                    {   
                        filter && filter.length>0 ?
                        filter.map((item, index) => {
            
                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td style={{width:'6%'}}><img src={item.image} className='w-100' alt="" /> </td>
                      
                                    <td className='text-primary'>{item.name}</td>
                                    <td>{item.warranty}</td>
                                    <td>{numberFormat(item.price)}</td>
                                    <td>{numberFormat(item.sale)}</td>
                                    <td className= {item.status==='Còn hàng' ? 'text-success': 'text-danger'}>  
                                        {item.status}
                                    </td>
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
                            <td colSpan="10" className="text-center text-danger">Không có sản phẩm nào</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}
export default ProductManage;
