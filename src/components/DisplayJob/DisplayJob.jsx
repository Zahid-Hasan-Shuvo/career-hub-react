import React from "react";
import { Link } from "react-router-dom";

const DisplayJob = ({ job }) => {
  const { logo, job_title, company_name, job_type, salary, location } = job;
  return (
    <div>
      <div className="flex items-center border-4 p-3 mb-5 justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
          <span> <img className="w-40 border p-7 rounded mr-3" src={logo} alt="" /></span>
           <span>
           <p className="font-bold">{job_title}</p>
            <p>{company_name}</p>
            <p>{job_type}</p>
            <p>{location}</p>
            <p>{salary}</p>
           </span>
          </div>
          
            
        </div>
       
          
<div>
    <Link to='/'><button className="border bg-amber-600 p-3 rounded" >View Details</button></Link>
</div>

      </div>
    </div>
  );
};

export default DisplayJob;
