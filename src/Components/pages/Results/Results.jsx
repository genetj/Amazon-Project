import React,{useState,useEffect} from 'react'
import classes from './Results.module.css'
import LayOut from "../../LayOut/LayOut";
import {useParams  } from "react-router-dom";
import axios from 'axios'
import { productUrl } from "../../../Api/endPoints";
import ProductCard from '../../Product/ProductCard';
import Loader from '../../Loader/Loader';

function Results() {
  const [results, setResults] = useState([]);
  const {categoryName} =useParams()
  const [isLoding, setIsLoding] = useState(false)
  useEffect(() => {
    setIsLoding(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
          setResults(res.data);
          console.log(res);
          setIsLoding(false)
      }).catch((err) => {
        console.log(err);
        setIsLoding(false)
      });
  }, []);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />

        {isLoding ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id}
              product={product}
              renderDesc={false} 
              renderAdd={true}/>
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Results;
