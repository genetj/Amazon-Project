import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../Product/ProductCard';
import classes from './Product.module.css';
import Loader from '../Loader/Loader';


function Product() {
    const [products, setProducts] = useState([]);
    const [isLoding, setIsLoding] =useState(false)
    useEffect(() => {
      setIsLoding(true)
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
        setProducts(res.data);
        setIsLoding(false)
        }).catch((err) => {
        console.log(err);
        setIsLoding(false)
        });
},[])
    return (
      <>
        {isLoding? (<Loader />) : (
              <section className={classes.products_container}>
              {products?.map((singleProduct)=>{
                return <ProductCard renderAdd={true}
                product={singleProduct} 
                key={singleProduct.id}/>

              })

              }
          </section>
        )}
      </>
    );
}

export default Product
