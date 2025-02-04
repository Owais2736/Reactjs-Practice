import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function App() {
  // const [name, setName] = useState("owais ali")
  const [form, setform] = useState({ email:"Enter your email " , phone:"Enter ph no " })
const btnRef = useRef()

  const handleClick = ()=>{
    console.log("click")
  }

  const handleMouseOver = ()=>{
    alert("mouse is over in the box now")
      btnRef.current.style.backgroundColor = "red"; 
 
    
  }


  const handleChange = (e)=>{
   setform({...form, [e.target.name]: e.target.value})
   console.log(form.email , form.phone);
   
   
  }

  const handleSubmit = (e)=>{
    e.preventDefault();  
    localStorage.setItem("name",form.email )
    localStorage.setItem("phone",form.phone )
    console.log("name save", form);
  }


  const handleitem = ()=>{
    alert(localStorage.getItem("name", form.email))
    alert(localStorage.getItem("phone", form.phone))
  }
  return (
    <>
<button ref={btnRef}>click</button>

    <button onClick={handleClick}>click me </button>
    <div className='box' onMouseOver={handleMouseOver}>This is mouseOver box</div>


<form action=""  onSubmit={handleSubmit}>

<input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
<input type="text"  name='phone' value={form.phone? form.phone:""} onChange={handleChange} />
<button type='submit'>submit</button>
</form>
<button onClick={handleitem}>clickToGETItem</button>
    </>
  )
}

export default App
