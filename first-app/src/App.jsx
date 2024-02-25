import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './components/Footer.css'
import './App.css'
import Card from './components/Card'
function App() {

  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="card1" description="Card 1 desc" />
        <Card title="card2" description="Card 2 desc"/>
        <Card title="card3" description="Card 2 desc"/>
        <Card title="card4" description="Card 4 desc"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
