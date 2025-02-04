import React from "react"
import Navbar from "./components/Navbar"
import { useState } from "react"
import { counter } from "./context/Context"

function App() {
  const [count, setcount] = useState(0)
 

  return (
    <>
<counter.Provider value = {{count, setcount}}>
    <Navbar/>

<button onClick={()=>{setcount(count + 1)}}>Click Counter</button>

</counter.Provider>
     
    </>
  )
}

export default App
