import './App.css'

// 1 - configuration for react router

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Additional from './pages/Additional'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

// Components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <div>
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          <SearchForm />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/products/:id/additional' element={<Additional />} />
            <Route path='/search' element={<Search />} />
            {/* Redirect */}
            <Route path='/company' element={<Navigate to='/about' />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
