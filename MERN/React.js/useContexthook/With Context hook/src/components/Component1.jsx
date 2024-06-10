import React from 'react'
import { useContext } from 'react'
import { counterContext } from './context/context'
const Component1 = () => {
    const counter = useContext(counterContext);
  return (
    <div>
      {counter}
    </div>
  )
}

export default Component1
