import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { increment,decrement,multiply} from '../redux/counter/counterSlice'


const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    
  return (
    <>

    
    I am a navbar{count}
    

    
    
    </>
  )
}

export default Navbar
