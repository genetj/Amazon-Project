import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from "../../LayOut/LayOut";
import {useParams} from "react-router-dom";
import axios from 'axios';
import { productUrl } from '../../../Api/endPoints';
import ProductCard from '../../Product/ProductCard';
import Loader from "../../Loader/Loader"


function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({})
  const [isLoding,setIsLoding] = useState(false)
  useEffect(()=> {
    setIsLoding(true)
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data)
      setIsLoding(false)
    }).catch((err)=>{
      console.log(err);
      setIsLoding(false)
    })
  }, [])
  console.log(product);

  return (
    <LayOut>
      {isLoding? (<Loader/>):
      (<ProductCard 
      product={product}
      flex={true}
      renderDesc={true} 
      renderAdd={true}
      />)};
</LayOut>
  );
}

export default ProductDetail
