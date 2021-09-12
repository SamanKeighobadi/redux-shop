import React from "react";
// Material UI Components
import { Grid } from "@material-ui/core";
// Redux Tools
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
// Import Custom Hooks
import useProducts from "../customHooks/useProducts";
// Import Custom Components
import ProductCard from "./ProductCard";
import Loading from "../common/Loading";

const ProductCards = () => {
  // Custom hook
  const { data, loading } = useProducts("https://fakestoreapi.com/products");

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  dispatch(setProducts(data));

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Grid container>
          {products.map((product) => (
            <Grid item lg={3} key={product.id}>
              <ProductCard
                title={product.title}
                image={product.image}
                category={product.category}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductCards;
