import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Rate from "../Rate";

const Product = (mobile) => {
    const dispatch = useDispatch()

    return (
        <div className="product mt-3 ml-0 mr-0 pb-4 p-3 bg-white text-center">
            <h5 className="text-left">
                <i className="fas fa-mobile-alt mr-1 text-danger mr-3" />
                <span className="text-danger ">Xu Hướng Mua Sắm</span>
            </h5>

            <div className="product__detail row mt-4">
                {/* {mobile.map((mobile, key) => {
                    return ( */}
                        <>
                            <div className="product--item col-md-2 col-6 pt-3 p-0" >
                                <div>
                                    <Link to="">
                                        <img src="https://salt.tikicdn.com/cache/200x200/ts/product/e6/b8/02/a4bfa7498fda916cc8fb3f5e3b57f901.jpg.webp" alt="mobile" style={{ height: '200px' }} />
                                        <h6 className="mt-2 mb-1 text-dark">abcd</h6>
                                    </Link>
                                </div>
                                <Rate />

                                <div className="price__prod row align-items-center justify-content-center">
                                    <span className="font-weight-bold" style={{ color: 'red', fontSize: '14px' }}>
                                        abc
                                    </span>

                                    <span className="badge badge-pill badge-warning p-1 ml-3 mr-2">-{mobile.sale_off}%</span>
                                    <strike className="small" style={{ color: '#8a8a8a' }}>
                                        abc
                                    </strike>
                                </div>
                            </div>
                        </>
                    {/* );
                })} */}
            </div>
        </div>
    );
};
export default Product;