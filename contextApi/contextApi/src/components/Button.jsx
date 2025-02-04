import React from 'react'
import Component1 from './Component1'
import { useContext } from 'react'
import { counter } from '../context/Context'
import { button } from '../context/Context'

const Button = () => {
    const value = useContext(counter)
    const btnValue = useContext(button)
  return (
    <>
    <button onClick={()=>{value.setcount(value.count + 1)}}>Count is {value.count}</button>
<h1>{btnValue.btn}</h1>
    <Component1/>
    
    </>
  )
}

export default Button
