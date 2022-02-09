import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { numberFormat } from '../../../../components/Formatting/FormatNumber';
import * as actions from '../../../../store/actions'
import Rate from "../Rate";

const Product = (mobile) => {
    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.admin.products)
    const history = useHistory()

    useEffect(() => {
        dispatch(actions.fetchProducts())
    }, [dispatch])

    //view detail product
    const viewDetail = (product) => {
        return history.push(`/products/${product.id}`)
    }

    return (
        <div className="product mt-3 ml-0 mr-0 pb-4 p-3 bg-white text-center">
            <h5 className="text-left text-danger d-flex align-items-center">
                <img src="https://salt.tikicdn.com/ts/upload/c5/0e/02/23066556738e7f5df8b8fde5d0d1dfd6.png" style={{ width: '2%' }} alt="" />
                <span className="ml-2">Sản Phẩm Nổi Bật</span>
            </h5>

            <div className="product__detail row mt-4">
                {
                    listProduct && listProduct.length >0 ?
                    listProduct.map((item, index) => {
                        return (
                            <div className="product--item col-md-2 col-6 p-3" 
                                key={index} 
                            >
                                <div onClick={()=>viewDetail(item)}>
                                    <img src={item.image} className="w-75" alt="" />
                                    <h6 className="my-2 text-dark">{item.name}</h6>
                                </div>

                                <Rate />

                                <div className="price__prod d-flex align-items-center">
                                    <span className="font-weight-bold text-dark" style={{fontSize: '13px' }}>
                                        {numberFormat(item.price)}
                                    </span>

                                    <span className="badge badge-pill badge-danger p-1 mx-2">-1%</span>

                                    <del className="text-secondary small">
                                        {numberFormat(item.sale)}
                                    </del>
                                </div>
                            </div>
                        );
                    })
                    :
                    'Loading....'
                }
            </div>
        </div>
    );
};
export default Product;