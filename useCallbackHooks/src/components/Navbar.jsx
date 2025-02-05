import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective , getAdjective}) => {
  console.log("navbar is rendered");
  
  return (
    <>
    i am a {adjective} navber
    <button>{getAdjective()}</button>
    
    
    </>
  )
}

export default memo(Navbar)

