import { useState,useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState("good");
  //The below function seems to change on each re-render of the the app and hences forces the re render of navbar component even with memo.
  // const getAdjective=()=>{
  //   return "another";
  // }
  //On using usecallback hook, this freezes the getAdjective function and prevents unncessary re renders
  //Just as memohook which memoizes a value and this useCallback hook memoizes a function!!!
  const getAdjective=useCallback(
    () => {
      return "another" + count//Navbar count will not increase due to memoization of the function
    },
    [],//Dependency array.
  )
  
  // const getAdjective=()=>{

  //     return "another" + count//Navbar count will increase due to change in the function
  // }
    
  return (
    <>
      <div>
        <Navbar adjective={"good"} getAdjective={getAdjective}/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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
