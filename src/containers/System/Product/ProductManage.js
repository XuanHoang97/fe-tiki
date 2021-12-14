import React,{useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Sort from './Sort';

const ProductManage = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        props.fetchProducts();
        setProducts(props.listProducts);
    }, [products]);

    return (        
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý sản phẩm</div>

            <div className="d-flex mb-3 justify-content-between">
                <button type="button" className="btn btn-success col-2">
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
                            return(
                                <tr key={index}>
                                    <td>
                                        <div className="form-group">
                                            <input type="checkbox" className="w-100" />
                                        </div>
                                    </td>
                                    <td>{index + 1}</td>
                                    <td style={{backgroundImage: `url(https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2021_09_15/iphone13promax1.jpeg)`, backgroundPosition: 'center', backgroundSize: 'cover'}}></td>
                                    <td>{item.name}</td>
                                    <td>{item.number}</td>
                                    <td>{item.warranty}</td>
                                    <td>{item.price}</td>
                                    <td>{item.sale}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.status}</td>
                                    <td>{item.supplier_id}</td>
                                    <td>
                                        <button type="button" className="btn text-primary px-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button type="button" className="btn text-danger">
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
        fetchProducts: () => dispatch(actions.fetchProducts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
