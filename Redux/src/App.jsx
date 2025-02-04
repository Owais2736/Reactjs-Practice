import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment , decrement , multiply , incrementByAmount} from "./redux/counter/counterSlice"


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <>

    <Navbar/>
    
    <button onClick={()=>  dispatch(decrement())}>-</button>
    <button onClick={()=>  dispatch(multiply())}>*</button>
     the count is {count}
     <button onClick={()=>  dispatch(increment())} >+</button>
     <button onClick={()=>  dispatch(incrementByAmount(5))} >+</button>
    </>
  )
}

export default App
