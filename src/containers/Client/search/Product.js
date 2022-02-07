import Rate from 'containers/HomePage/Section/Rate';
import React from 'react';
import { Link } from 'react-router-dom';
import { path } from 'utils';
function Product(props) {
    return (
        <div className="list__prod">
            <Link to={path.HOMEPAGE}>
                <img src='https://salt.tikicdn.com/cache/280x280/ts/product/3b/5b/ee/e37d0135aa0d314ac8af2afb4eb739bc.jpg' alt="" />
                <p className="text-secondary mt-3 mb-1">abcd</p>
                <Rate />
                <div className="price">
                    <span className="price_prod">185.000 đ</span>
                    <span className="badge badge-danger">-6%</span>
                </div>
            </Link>
        </div>
    );
}

export default Product;