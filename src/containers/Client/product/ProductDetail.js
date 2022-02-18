import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from "services/userService";
import './Style.scss'
import * as actions from "store/actions";

import Order from "./Order";
import Specifications from "./Specifications";
import Illustrator from "./Illustrator";
import Mail from "containers/HomePage/Section/Mail";
import Header from "containers/HomePage/Header/Header";
import Footer from "containers/HomePage/Footer/Footer";
import Accessories from "./Accessories";
import ProductDesc from "./ProductDesc";
import ProductSimilar from "./ProductSimilar";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = useState({});
  const similarProducts = useSelector(state => state.admin.productSimilar);
  const qty = useSelector(state => state.client.qty);
  
  // view detail product
  let idParams = match.params.id;
  useEffect(() => {
    getDetailProduct(idParams)
    .then(res => {
        setDetailProduct(res.data.detailProduct);
    })
    .catch((err) => { 
      console.log(err); 
    });
  }, [ idParams ]);

  // get similar product
  useEffect(() => {
    dispatch(actions.GetProductSimilar(idParams));
  }, [dispatch, idParams ]);
  
  // choose quantity order
  const incrementQty = () => {
    dispatch(actions.increment());
  };
  const decrementQty = () => {
    if(qty > 1) {
      dispatch(actions.decrement());
    }
  };
  
  useEffect(() => {
    document.title = `${detailProduct.name}-giá rẻ nhất vịnh Bắc Bộ`;
  }, [detailProduct]);
  
  return (
    <>
      <Header/>
      <div className="main bg-light pb-3">
        <div className="container">
          <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
            <Illustrator detailProduct={detailProduct} />
            <Order 
              order={detailProduct}  
              incrementQty={incrementQty}
              decrementQty={decrementQty}
              qty={qty}
            />
            <Accessories detailProduct={detailProduct} />
          </div>

          <Specifications />
          <ProductDesc detailProduct={detailProduct} />
          <ProductSimilar similarProducts={similarProducts} />
          <Mail />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ProductDetail;
