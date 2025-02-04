import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx';
import User from './pages/User.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <><App/><Navbar/></>
  },

  {
    path: "/about",
    element: <><About /><Navbar/></>
  },
  {
    path: "/contact",
    element: <><Contact /><Navbar/></>
  },
  {
    path: "/user/:username",
    element: <><Navbar/><User/></>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
