import React from 'react';
import { Link,useLocation  } from 'react-router-dom';
import { path } from 'utils';

const BreadCumb = ({detailProduct}) => {
    const location = useLocation();
    return (
        <h6 className="breadcumb my-3">
            <Link to ={path.HOMEPAGE} >Trang chủ</Link> / {location.pathname}

            <span className="ml-2">{detailProduct && detailProduct.categoryData && detailProduct.categoryData.name ? detailProduct.categoryData.name :'loading..'}</span>
        </h6>
    );
}

export default BreadCumb;