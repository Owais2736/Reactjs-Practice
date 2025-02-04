import React, { useEffect } from 'react'

function Navbar(props) {


    useEffect(()=>{
        alert("color was changed")
    } , [props])
  return (
    <div>
      <ul>
        <li>Home {props.color}</li>
        <li>About</li>
        <li>Contact</li>
        
      </ul>
    </div>
  )
}

export default Navbar
