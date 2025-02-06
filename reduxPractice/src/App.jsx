
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector} from 'react-redux'
import { increment,decrement,multiply } from './redux/counter/counterSlice'
import { name } from './redux/card/cardSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const card = useSelector((state) => state.card.value)
  const dispatchCard = useDispatch()
  return (
    <>
<Navbar />
<div>
  <button onClick={()=> dispatch(increment())}>+</button>
{count}
<button onClick={()=> {dispatch(decrement())}}>-</button>
</div>


<div>
  {card}
  <button onClick={()=>{ dispatchCard(name())}}>Change Name</button>
</div>
     
    </>
  )
}

export default App
