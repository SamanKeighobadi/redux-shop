import React,{useState,useEffect} from "react";
import axios from 'axios'
import ProductCards from "./ProductCards";

const Products = () => {

  const [products,setProducts] = useState([])

  const fetchProducts = async() => {
    const {data} = await axios.get('https://fakestoreapi.com/products')
    setProducts(data)
    console.log(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <ProductCards products={products} />
    </div>
  );
};

export default Products;
