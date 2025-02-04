import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"

function App() {
  const [count , setCount] = useState(0)

  useEffect(() => {
    alert("Hey I am  renderd only one time when page is refresh")
  } , [])

  useEffect(() => {
    alert("Hey I am rendered when count was change")
  } , [count])

  useEffect(() => {
    alert("Hey I am run on every renderd ")
  })

  return (
    <> 

    <Navbar color = {"Navy" + "blue"}/>
    <div className="counter">The count is {count}</div>

    <button onClick={()=>{setCount(count + 1)}}>Update btn</button>
     
    </>
  )
}

export default App
