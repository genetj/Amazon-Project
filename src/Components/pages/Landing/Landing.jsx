import React from 'react'
import LayOut from '../../LayOut/LayOut';
import { Carousel } from 'react-responsive-carousel';
import Category from '../../Category/Category';
import Product from '../../Product/Product';
import Carousels from '../../Carousel/Carousels';

function Landing() {
  return (
    <LayOut>
        <Carousels/>
        <Category/>
        <Product/>
    </LayOut>
  );
}

export default Landing
