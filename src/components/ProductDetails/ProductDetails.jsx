import React from "react";
// Redux Tools
import { useSelector, useDispatch } from "react-redux";
// Import Custom hook
import useProduct from "../customHooks/useProduct";
// React Router
import { useParams } from "react-router-dom";
// Import Custom Components
import Loading from "../common/Loading";
import { selectedProduct } from "../../redux/actions/productActions";
import axios from "axios";
import { Grid} from "@material-ui/core";
import ProductDetailsDescription from "./ProductDetailsDescription";
import ProductDetailsImage from "./ProductDetailsImage";

const ProductDetails = () => {
  const [loading, setLoading] = React.useState(true);
  const [, setData] = React.useState();
  const { productId } = useParams();
  console.log("ProductDetails.jsx Render");
  // const {data,loading} = useProduct(`https://fakestoreapi.com/products/${productId}`)

  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchDetailData = async () => {
    try {
      const { data } = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => console.log(err));
      console.log("data from fetchDetailData Function");
      dispatch(selectedProduct(data));
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchDetailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Grid container>
            <Grid item xs={12} md={6}>
              <ProductDetailsImage
                image={product.image}
                title={product.title}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductDetailsDescription
                description={product.description}
                category={product.category}
                price={product.price}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
