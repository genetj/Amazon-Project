import React from 'react'
import {categoryInfos} from "./categoryFullInfos"
import CategoryCard from './CategoryCard'
import classes from "./Category.module.css"

function Category() {
return (
    <div>
    <section className={classes.category_container} >
        {
categoryInfos.map((infos,index)=>{ 
return <CategoryCard data={infos} key={index}/>
})
    
}

    </section>
    </div>
)
}

export default Category
