import { useState , useRef , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stopwatch from './components/Stop'

function App() {
  const [count, setCount] = useState(0)
const a = useRef(0)
const b = useRef(0)
const btnRef = useRef()

useEffect(()=>{

  a.current = a.current + 1
  console.log(`the value of a is ${a.current}`);
  btnRef.current.style.backgroundColor = "red"
  
})


  return (
    <>
<Stopwatch />
  
    <div  className="container">{count}</div>
    <button ref={btnRef} onClick={()=>{setCount(count + 1)}}>Click me</button>
<button onClick={()=>{btnRef.current.style.display = "none"}}>Hide button</button>

    </>
  )
}

export default App
