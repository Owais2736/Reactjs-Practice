import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/home"> <li>Home</li></NavLink>
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/about"> <li>About</li></NavLink>
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/contact"><li>Contact</li></NavLink>
               <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/user/:username"><li>User</li></NavLink>
            
            {/* <a href="/home">Home</a>  not use this */}
        </nav>
      
    </div>
  )
}

export default Navbar
