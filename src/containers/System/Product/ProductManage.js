import { numberFormat, totalProductSold } from '../../../components/Formatting/FormatNumber';
import { useSelector, useDispatch } from 'react-redux';
import ModalEditProduct from './ModalEditProduct';
import * as actions from '../../../store/actions';
import React,{useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import ModalProduct from './ModalProduct';
import Sort from './Sort';
import './style.scss';

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

    // console.log('product sold:', listProducts && listProducts.productSold.length);

    //create product
    const handleAddNewProduct = () => {
        setModalProduct(!modalProduct);
    }
    const CreateNewProduct=(data)=> {
        const dataProduct = new FormData();
        dataProduct.append('name', data.name);
        dataProduct.append('price', data.price);
        dataProduct.append('sale', data.sale);
        dataProduct.append('qty', data.qty);
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
        const product = new FormData();
        product.append('id', productEdit.id);
        product.append('name', data.name);
        product.append('price', data.price);
        product.append('sale', data.sale);
        product.append('qty', data.qty);
        product.append('category_id', data.category_id);
        product.append('supplier_id', data.supplier_id);
        data.image && product.append('image', data.image);
        dispatch(actions.EditProduct(product));
    }

    //pagination
    const [pageNumber, setPageNumber] = useState(0);
    const productPerPage = 8;
    const pagesVisited = pageNumber * productPerPage;
    const pageCount = Math.ceil(listProducts.length / productPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (        
        <div className="productManage">
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

            <div className='addProduct'>
                <div className='product-head'>
                    <img src="https://icon-library.com/images/icon-product/icon-product-18.jpg" style={{width: '5%'}} alt=""/>
                    <div className="productTitle">Sản phẩm (<small>{listProducts.length}</small>)</div>
                </div>

                <div className="action">
                    <button onClick={() => handleAddNewProduct()} type="button" className="btn btn-success">
                        <i className="fas fa-plus"></i> Thêm sản phẩm
                    </button>
                </div>
            </div>
            <Sort />

            <table className="table table-striped table-bordered table-hover">
                <thead className="text-white">
                    <tr>
                        <td>STT</td>
                        <td>Ảnh</td>
                        <td>Tên sản phẩm</td>
                        <td>Số lượng</td>
                        <td>Bán được</td>
                        <td>Trạng thái</td>
                        <td>Giá nhập (VND)</td>
                        <td>Giá bán (VND)</td>
                        <td>Tác vụ</td>
                    </tr>
                </thead>
                <tbody>
                    {   
                        listProducts?.length>0 ?
                        listProducts.slice(pagesVisited, pagesVisited + productPerPage).map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td style={{width:'4%'}}><img src={item.image} className="w-100"  alt="" /> </td>
                                    <td className='text-primary'>{item.name}</td>
                                    <td>{item.qty}</td>
                                    <td>
                                        {
                                            item.productSold?.length>0?
                                            <span> { totalProductSold(item.productSold) } </span> : 0
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.qty < totalProductSold(item.productSold) ?
                                            <span className="badge badge-secondary">Hết hàng</span> :
                                            <span className='badge badge-success'>Còn hàng</span>
                                        }
                                    </td>

                                    <td>{numberFormat(item.price)}</td>
                                    <td>{numberFormat(item.sale)}</td>
                                    <td>
                                        <button onClick={()=> editProduct(item)} type="button" className="btn text-primary pl-0">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button onClick={()=> deleteProduct(item)} type="button" className="btn text-danger p-0">
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

            {
                listProducts.length >0 &&
                <ReactPaginate
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            }
        </div>
    );
}
export default ProductManage;
