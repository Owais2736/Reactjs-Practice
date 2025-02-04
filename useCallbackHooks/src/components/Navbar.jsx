import React, { memo } from 'react'

function Navbar({adjective , getAdjective}) {
    console.log("navbar render");
    
  return (
    <div>

        I am a {adjective} navbar

        <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
      
    </div>
  )
}

export default memo(Navbar) 
