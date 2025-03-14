import React from 'react'
import {img} from "./img/data"
import classes from "./Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Carousels() {
return (
    <div>
    <Carousel 
    autoplay={true}
    infiniteLoop={true}
    showIndicators={false}
    showThumbs={false}
    >
        {
            img.map((imageItemLink,index)=>{
                return <img src={imageItemLink} key= {index} />
            })
        }

    </Carousel>
    <div className={classes.hero_img} >  
        
    </div>
    </div>
)
}

export default Carousels

