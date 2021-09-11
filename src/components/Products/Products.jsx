import React from "react";
import ProductCards from "./ProductCards";
// React Helmet
import { Helmet } from "react-helmet";

const Products = () => {
  return (
    <div>
    <Helmet>
      <title>Redux Shop</title>
    </Helmet>
      <ProductCards />
    </div>
  );
};

export default Products;
