import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// components
import Navbar from './compoenents/Navbar'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
