import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "hey i am a todo"
    },
    {
      title: "hey 2",
      desc: "hey i am a todo2"
    }, {
      title: "hey3",
      desc: "hey i am a todo3"
    }
  ])

  // this is a component hm jo h component k opar hi component bna sakhty hai zaroori nhi h k component k folder 
  // m hi banai but ye bht km use hoga 

  // const Todo = ({items }) => {
  //   return (
  //     <>
  //     <div className='m-4 border-2 border-purple-700'>
  //       <div className="title">{items.title}</div>
  //       <div className="discription">{items.desc}</div>
  //       </div>
  //     </>
  //   )
  // }


  return (
    <>
   
      <h1>Vite + React</h1>



      {/* this is ternoery operator */}
      {showBtn ? <button>Show btn is true</button> : <button>show btn is false</button>}
      {/* OR */}

      {/* this is conditional rendering */}
      {/* {showBtn && <button>This is a show button</button> } */}

      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          Toogle showbtn
        </button>

        {todos.map(items => {
          console.log(items);
          // return <Todo key={items.title} items={items} />

          return  <div key={items.title} className='m-4 border-2 border-purple-700'>
            <div className="title">{items.title}</div>
              <div className="discription">{items.desc}</div>
              </div>

        })}

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
