import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-around items-center" >


    <h2 className="text-3xl font-bold" >CareerHub</h2>

    
{/* ///////////////////// */}

<div className="flex justify-evenly items-center ">

     <span className="pr-9"> <NavLink
        to="/statistics"
        className={({ isActive }) => (isActive ? "text-pink-700" : "")}
      >
        Statistics
      </NavLink></span>
    
  
     <span className="pr-5"> <NavLink
        to="/applied-jobs"
        className={({ isActive }) => (isActive ? "text-pink-700" : "")}
      >
     Applied Jobs
      </NavLink></span>
    
     
     <span> <NavLink
        to="/blog"
        className={({ isActive }) => (isActive ? "text-pink-700" : "")}
      >
     Blog
      </NavLink></span>
   
</div>

{/* //////////////////////////// */}

    <button className="border bg-green-700 p-3 text-white font-semibold rounded">Start Applying</button>


    </div>
  );
};

export default Header;
