import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import Login from './pages/Login'
import MyOrder from './pages/MyOrder'
import Product from './pages/Product'
import Footer from './pages/Footer'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
<Navbar/>
     <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/product" element={<Product />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-order" element={<MyOrder />} />
        <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
        <Footer/>
    </>
    
  )
}

export default App