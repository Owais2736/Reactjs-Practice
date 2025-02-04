import { useState } from "react"
import { useMemo } from "react"


const nums = new Array(10_000_000).fill(0).map((item , i)=>{
return{
index: i ,
isMagical: i === 9_000_000

}
})



function App() {
  const [count, setcount] = useState(0)
  const [number, setnumber] = useState(nums)

  // const magical = number.find(item =>item.isMagical === true)// heavy execution




 const magical =  useMemo(() =>number.find(item =>item.isMagical === true), [number])
 
  return (
    <>
<div>
  <p>Magical no is {magical.index}</p>
</div>
     <button onClick={()=>{setcount(count + 1 )
if(count == 11){
  setnumber( new Array(10_000_000).fill(0).map((item , i)=>{
      return{
      index: i ,
      isMagical: i === 2_000_000
      
      }
      })
      
  )
}


     }}
    
      
      >Count is {count}</button>
 
    
    </>
  )
}

export default App
