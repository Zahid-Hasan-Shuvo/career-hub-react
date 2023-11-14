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
        path: "/applied-jobs",
        element:<Jobs></Jobs>,
      },
      {
        path: "/",
        element:<Home></Home>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)