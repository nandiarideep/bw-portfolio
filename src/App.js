import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <div className='bg-[#F8F8F8] h-[100vh] min-w-screen'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App