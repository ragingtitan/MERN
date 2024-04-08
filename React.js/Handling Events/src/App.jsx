import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//  const [name, setName] = useState("anish")
 const [form, setForm] = useState({email:"",phone:""})
  const handleClick = ()=>{
    alert("Hey, I am clicked!");
  }
  const handleMouseOver=()=>{
    alert("Mouse over!");
  }
  const handleOnchange=(e)=>{
    // setName(e.target.value);
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="bg-orange-900 h-24 w-24" onMouseOver={handleMouseOver}>
        I am red div
      </div> */}
      <input className='p-2' name='email' type="text" value={form.email?form.email:""} onChange={handleOnchange}/>
      <input className='p-2' name='phone' type="text" value={form.phone?form.phone:""} onChange={handleOnchange}/>
    </>
  )
}

export default App
