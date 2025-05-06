import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import Register from './Screens/Register/Register'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/product/:product_id' element={<ProductDetailScreen />}/>
      <Route path='/login' element={<LoginScreen />}/>
    </Routes>
  )
}

export default App