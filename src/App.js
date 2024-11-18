import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Technologies from './pages/Technologies'
import Projects from './pages/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
      <div className='bg-[#F8F8F8] h-full min-w-screen'>
        <Navbar />
        <div>
          <Home />
          <About />
          <Technologies />
          <Projects />
        </div>
        <Footer />
      </div>
  )
}

export default App