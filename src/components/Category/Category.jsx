import React, { useEffect, useState } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";

const Category = () => {
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
  return (
    <div>
      <div>
      
      
        <h1 className="text-center text-3xl font-bold mt-7">
          Job Category List
        </h1>
        <h2 className="mt-3 text-slate-400 text-center">
          Explore thousands of job opportunities with all the information you
          need.
        </h2>
      </div>

<div className="mt-5 justify-center items-center flex ">
    {categories.map(category=><CategoryItem key={category.id} category={category}></CategoryItem>)}
</div>
    </div>
  );
};

export default Category;
