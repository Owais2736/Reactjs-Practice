import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Navbar from './components/Navbar.jsx'

import *  as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><App/></> 
  },
  {
    path: "/home",
    element:  <><Navbar/><Home/></> 
  },
  {
    path: "/about",
    element:  <><Navbar/><About/></> 
  },
  {
    path: "/contact",
    element:  <><Navbar/><Contact/></> 
  },
  {
    path: "/user/:username",
    element: <> <Navbar/><User/></> 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router= {router} />
  </StrictMode>,
)
