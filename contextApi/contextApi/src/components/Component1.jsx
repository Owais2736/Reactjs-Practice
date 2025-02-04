import React from 'react'
import { useContext } from 'react'
import { counter } from '../context/Context'

const Component1 = () => {
    const value = useContext(counter)

  return (
   <>
<h1>{value.count}</h1>
   </>
  )
}

export default Component1
