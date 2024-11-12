import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Technologies from './pages/Technologies'

const App = () => {
  return (
      <div className='bg-[#F8F8F8] h-full min-w-screen'>
        <Navbar />
        <div>
          <Home />
          <About />
          <Technologies />
        </div>
      </div>
  )
}

export default App