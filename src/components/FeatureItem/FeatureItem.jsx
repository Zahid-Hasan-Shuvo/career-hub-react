import React from 'react';
import { Link } from 'react-router-dom';

const FeatureItem = ({feature}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}=feature;
    return (
      <div>
          <div className='border mx-auto w-80 h-72 text-center hover:shadow-lg rounded'>
            <img className='ml-24 mt-7 w-32' src={logo} alt="" />
            <p className='font-bold mt-2'>{job_title}</p>
            <p className='mt-2'>{company_name}</p>
           <div  className='flex items-center justify-center'> <p className=' p-1 mr-2 border text-indigo-950 mt-2'>{remote_or_onsite}</p>
            <p  className=' p-1 mr-2 border mt-2 text-indigo-950'>{job_type}</p></div>
          <div className='flex justify-center items-center'>
          <p className=' mr-5 mt-2'>{location}</p>
            <p className='mt-2'>{salary}</p>
          </div>
           <Link><button className='border p-2 text-white bg-indigo-700 font-semibold rounded mt-2'>View Details</button></Link>
        </div>
       
      </div>
    );
};

export default FeatureItem;