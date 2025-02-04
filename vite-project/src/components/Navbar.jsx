import React from 'react'
import Button from './Button'

function Navbar(props) {
  return (
    <div>
      <ul>
        <div className="logo">{props.logoText}</div>
        <li>Home</li>
       
        <li>About</li>
        <Button/>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
