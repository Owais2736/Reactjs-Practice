import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const[name , setName] = useState("owais")

  const[form , setForm]= useState({email : "" , phone: ""})

  const[forms , setForms] = useState({ })



  const handleClick = ()=>{
    alert("Hey I am clicked")
  }

const handleMouseOver = ()=>{
  alert("I am a mouse over")
 
}

// const handleChange = (e)=>{
//  setName(e.target.value)
 
// }


const handleChange = (e)=>{
 setForm({...form , [e.target.name] :e.target.value})
 console.log(form);
 
 
}

// practice

const handleForm = (e)=>{
  setForms({...forms , [e.target.name]: e.target.value})
  console.log(forms);
  
}



  return (
    <>
     <div className="button">
      <button onClick={handleClick}>Click me</button>
     </div>

     <div className="red"  onMouseOver={handleMouseOver}>
      I am a red div
     </div>

     {/* <input type="text"  value={name} onChange={handleChange}/> */}
     <input type="text" name='email' value={form.email? form.email:""} onChange={handleChange}/>
     <input type="text" name='phone' value={form.phone? form.phone:""} onChange={handleChange}/>







     {/* practice */}

     <input type="text" name='userName'  value={forms.userName? forms.userName:""} onChange={handleForm} />
     <input type="text" name='userId'  value={forms.userId? forms.userId:""} onChange={handleForm} />
     <input type="text" name='email'  value={forms.email? forms.email:""} onChange={handleForm} />
    </>
  ) 
}

export default App
