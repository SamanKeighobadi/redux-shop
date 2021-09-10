import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "../common/Loading";

const ProductCards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    setLoading(false);
    console.log(data);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

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
                description={product.description}
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
