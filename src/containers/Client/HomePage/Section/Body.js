import ProductSuggestion from "./productSuggestion/Index";
import SearchSpecial from "./searchSpecial/Index";
import Product from "./Product/Index";
import Category from "./Category";
import Slide from "./Slide";
import './style/body.scss';
import Mail from "./Mail";
import React from "react";

export default function Body() {
  return (
    <div className="main">
      <div className="container">
        <Slide />
        <Category />
        <SearchSpecial />
        <Product />
        <ProductSuggestion />
        <Mail />
      </div>
    </div>
  );
}
