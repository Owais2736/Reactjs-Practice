import React from 'react'
import { NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <ul className='ul'>
          
          <NavLink   className={(e)=>{return e.isActive?"red": ""}}  to={"/"}>  <li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to={"/about"}><li>About</li></NavLink>
           <NavLink  className={(e)=>{return e.isActive?"red": ""}}  to={"/contact"}><li>Contact</li></NavLink> 
        </ul>
    </nav>
    </>
  )
}

export default Navbar
