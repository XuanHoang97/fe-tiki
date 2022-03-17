import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from "services/userService";
import Specifications from "./Specifications";
import ProductSimilar from "./ProductSimilar";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import * as actions from "store/actions";
import Illustrator from "./Illustrator";
import ProductDesc from "./ProductDesc";
import Rating from "./Rating";
import Order from "./Order";
import './Style.scss'

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

  // similar product
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
      <div className="main">
        <div className="container">
          <div className="order">
            <Illustrator detailProduct={detailProduct} />
            <Order 
              order={detailProduct}  
              incrementQty={incrementQty}
              decrementQty={decrementQty}
              qty={qty}
            />
          </div>
          <Specifications />
          <ProductDesc detailProduct={detailProduct} />
          <Rating detailProduct={detailProduct} />
          <ProductSimilar similarProducts={similarProducts} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ProductDetail;
