
import React  , {useContext} from 'react'
import { counterContext } from '../context/Context'


function Component1({count}) {

  const value = useContext(counterContext)
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1
