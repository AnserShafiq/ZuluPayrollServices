import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us/' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App