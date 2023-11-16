import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeaturesDetails = () => {
  const jobs = useLoaderData();
  // console.log(jobs);
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  

  const handleApplyJob = () =>{
    saveJobApplication(idInt);
    toast('You have applied successfully');
}

  return (
    <div>
      <div className="text-3xl font-bold text-center mt-16">Job Details..</div>

      <div className="grid grid-cols-2 mt-20">
        <div>
          <p>
            <span className="font-bold">Job Description:</span>{" "}
            {job.job_description}
          </p>
          <p>
            <span className="font-bold">Responsibility:</span>{" "}
            {job.job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experience: </span>
            {job.experiences}
          </p>
        </div>

        <div className="border-2 p-10 ml-10 rounded">
          <p className="font-bold border-b-2 pb-3">Job details</p>
          <p>
           
            <span className="font-bold text-slate-500 pt-1">Salary:</span>
            {job.salary}
          </p>
          <p>
           
            <span className="font-bold text-slate-500">Title: </span>
            {job.job_title}
          </p>
          <p className="font-bold border-b-2 pt-4">Contract Information</p>

          <p className="pt-3"> <span className="font-bold text-slate-500 pt-1">Phone:</span> {job.contact_information.phone}</p>
          <p><span className="font-bold text-slate-500 pt-1">Email:</span> {job.contact_information.email}</p>
          <p><span className="font-bold text-slate-500 pt-1">Address:</span> {job.contact_information.address}</p>
         <button onClick={handleApplyJob} className="p-3 text-white  bg-orange-600  ml mt-11">Apply Now</button>
        </div>
        <ToastContainer />
      </div>
      
       <Link to="/" className="p-3 text-white bg-green-400 ml mt-11">Go back..</Link>
    </div>
  );
};

export default FeaturesDetails;
