import { numberFormat } from "components/Formatting/FormatNumber";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "store/actions";
import React, { useEffect } from "react";
import Rate from "../Rate";
import './style.scss';

const Product = (mobile) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const products = useSelector(state => state.admin.products)
    const iconProduct = 'https://salt.tikicdn.com/ts/upload/c5/0e/02/23066556738e7f5df8b8fde5d0d1dfd6.png';

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    //view detail product
    const viewDetail = (product) => {
        return history.push(`/products/${product.id}`)
    }

    return (
        <div className="product">
            <h5 className="headProduct">
                <img src={iconProduct} alt="" />
                <span>Sản Phẩm Nổi Bật</span>
            </h5>

            <div className="productDetail">
                {
                    products?.length >0 ?
                    products.map((item, index) => {
                        return (
                            <div className="product--item"  key={index}>
                                <div onClick={()=>viewDetail(item)}>
                                    <img src={item.image} className="w-75" alt="" />
                                    <h6 className="my-2 text-dark">{item.name}</h6>
                                </div>
                                <Rate />

                                <div className="price__prod">
                                    <span className="price">
                                        {numberFormat(item.sale)}
                                    </span>
                                    <span className="badge badge-pill badge-danger p-1 mx-2">-1%</span>
                                </div>
                            </div>
                        );
                    })
                    : 'Loading...'
                }
            </div>
        </div>
    );
};
export default Product;