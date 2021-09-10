import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {setProdcuts} from '../../redux/actions/productActions'

import ProductCard from "./ProductCard";

const ProductCards = () => {
  const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch()

    const fetchProducts = async() => {
        try {
            const {data} = await axios.get('https://fakestoreapi.com/products')
            dispatch(setProdcuts(data))
        } catch (err) {
            
        }
    }

    useEffect(() =>{
        fetchProducts()
    },[])

  return (
    <div>
      <ProductCard />
      {products.map(product => (
          <div>
            {product.title}
          </div>
      ))}
    </div>
  );
};

export default ProductCards;
