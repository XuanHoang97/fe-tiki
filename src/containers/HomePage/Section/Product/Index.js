import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberFormat } from '../../../../components/Formating/FormatNumber';


import * as actions from '../../../../store/actions'
import Rate from "../Rate";

const Product = (mobile) => {
    const dispatch = useDispatch()
    const listProduct = useSelector(state => state.admin.products)

    useEffect(() => {
        dispatch(actions.fetchProducts())
    }, [dispatch])

    return (
        <div className="product mt-3 ml-0 mr-0 pb-4 p-3 bg-white text-center">
            <h5 className="text-left d-flex align-items-center">
                <img src="https://salt.tikicdn.com/ts/upload/c7/ee/c2/d52a63b18732d5a77a9be29e7c3623a2.png" style={{width: '25px'}}  alt="" />
                <span className="ml-2">Xu Hướng Mua Sắm</span>
            </h5>

            <div className="product__detail row mt-4">
                {
                    listProduct && listProduct.length >0 ?
                    listProduct.map((item, index) => {
                        //endCode image
                        let imageBase64='';
                        if(item.image){
                            imageBase64=new Buffer(item.image, 'base64').toString('binary')
                        }

                        return (
                            <div className="product--item col-md-2 col-6 py-4 p-0" key={index} >
                                <div>
                                    <Link to="">
                                        <div style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '150px',
                                        width: '150px', margin: '0 auto'}} >
                                        </div>
                                        <h6 className="mt-2 mb-1 text-dark">{item.name}</h6>
                                    </Link>
                                </div>
                                <Rate />

                                <div className="price__prod row align-items-center justify-content-center">
                                    <span className="font-weight-bold" style={{ color: 'red', fontSize: '14px' }}>
                                        {numberFormat(item.price)}
                                    </span>

                                    <span className="badge badge-pill badge-warning p-1 ml-3 mr-2">-1%</span>
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