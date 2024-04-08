import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setshowBtn]=useState(true)
  const [todos, settodos] = useState([
    {
      title:"study",
      desc:"Learn React"
    },
    {
      title:"Meditate",
      desc:"Meditate for 15 mins"
    },
    {
      title:"Japa",
      desc:"Do japa"
    },
    {
      title:"Exercise",
      desc:"Do exercise"
    }
  ])
  const Todo=({todo})=>{ return (<>
  <div className="todo">{todo.title}</div>
  <div className="todo">{todo.desc}</div></>)}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* {showBtn?<button>I will be shown only when another button is clicked!</button>:""}*/}
      {todos.map(todo=>{
        return <Todo todo={todo} />
      })}
      {showBtn && <button>I will be shown only when another button is clicked!</button>}
      <div className="card">
        <button onClick={() => setshowBtn(!showBtn)}>
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
