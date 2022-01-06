import React from 'react';
import { Link } from 'react-router-dom';
import Rate from '../Rate';
function SearchProduct(props) {
    return (
        <div className="list__prod">
            <Link to="">
                <img src="" alt="" />
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

export default SearchProduct;