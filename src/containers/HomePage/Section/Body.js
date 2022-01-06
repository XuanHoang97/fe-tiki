import React, { } from "react";
import Category from "./Category";
import Mail from "./Mail";
import Product from "./Product/Index";
import Preferential from "./Preferential";
import ProductSuggestion from "./productSuggestion/Index";
import SearchSpecial from "./searchSpecial/Index";
import Slide from "./Slide";
import './style/body.scss'

export default function Body() {

  return (
    <div className="main bg-light pt-3 pb-3">
      <div className="container">
        <Slide />
        <Category />
        <Preferential />
        <SearchSpecial />
        <Product />
        <ProductSuggestion />
        <Mail />
      </div>
    </div>
  );
}
