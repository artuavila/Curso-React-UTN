import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import Register from './Screens/Register/Register'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/login' element={<Register />}/>
      <Route path='/product/:product_id' element={<ProductDetailScreen />}/>
    </Routes>
  )
}

export default App