import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="count">The count is {count}</div>
      <div className="count">
        <button onClick={()=>{
          setCount(count+1)
        }}>Click</button>
      </div>
    </>
  )
}

export default App
