import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar/Navbar'
import Footer from './Component/Footer/Footer'
import Home from './Component/LandingPage/Home'
import Home2 from './Component/LandingPage/Home2'
import About from './Component/About/About'
import Solution from './Component/Solution/Solution'
import Consulting from './Component/Consulting/Consulting'
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/domestic' element={<Home2 />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/solution' element={<Solution />}></Route>
          <Route path='/consulting' element={<Consulting />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
