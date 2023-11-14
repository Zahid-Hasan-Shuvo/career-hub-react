import React, { useEffect, useState } from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("jobs.json").then((res) =>
      res.json().then((data) => setFeatures(data))
    );
  }, []);

  const handleShow=()=>{
    setShowAll(true)
  }
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold text-center mt-9">Featured Job</h2>
        <h2 className="mt-3 text-slate-400 text-center">
          Explore thousands of job opportunities with all the information you
          need.
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-3  p-4 mt-4">
        {features.slice(0, showAll ? 12 : 6).map((feature) => (
          <FeatureItem key={feature.id} feature={feature}></FeatureItem>
        ))}
      </div>
     { !showAll &&
         <span onClick={()=>handleShow()}><button className="p-2 text-white  bg-cyan-900 rounded ml-96 mt-7 ">
         See More..
       </button></span>
     }
    </div>
  );
};

export default Features;
