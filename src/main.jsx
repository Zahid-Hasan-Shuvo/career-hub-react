import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import FeaturesDetails from './components/FeaturesDetails/FeaturesDetails.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/statistics",
        element:<Statistics></Statistics>,
      },
      {
        path: "/blog",
        element:<Blog></Blog>,
      },
    
      {
        path: "/feature/:id",
        element:<FeaturesDetails></FeaturesDetails>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path: '/applied', 
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('jobs.json') 
      },
     
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='w-11/12 m-auto '>
   <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
 </div>
)
