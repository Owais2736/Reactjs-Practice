import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar logoText = "this is owais ali"/>
      <div className="container">{count}</div>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
<Footer/>
    </>
  )
}

export default App
