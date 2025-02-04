import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { button } from '../context/Context'
import Component1 from './Component1'

const Navbar = () => {
    const [btn, setbtn] = useState(<Component1/>)
  return (
    <>

    <button.Provider value={{btn} }>
<nav>
    <ul className='navbar'>
        <li>Home </li>
        <li>About</li>
        <li>Contact</li>
        <Button/>
    </ul>
</nav>

</button.Provider>
    </>
  )
}

export default Navbar
