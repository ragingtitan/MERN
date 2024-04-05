import React,{useEffect} from 'react'

const Navbar = (props) => {
  // useEffect(() => {
  //   alert("Color was changed")
  // }, [props.color])
  
  
  //Case 1: Run on every render
  useEffect(() => {
    alert("I run of every Render");
  })
  //Case 2: Run only on first render
  useEffect(() => {
    alert("I run only on first render");
  }, [])
  //Case 3: Run only on change in certain values

  useEffect(() => {
    alert("I run on change")
  }, [props.color])
  useEffect(() => {
    alert("I run")
  
    return () => {
      alert("Navbar unmopunted")
    }
  }, [])
  
     

  return (
    <div>This is a Navbar of color {props.color}</div>
  )
}

export default Navbar