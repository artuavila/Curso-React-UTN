import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductList from '../../Components/ProductList/ProductList'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div>
            <header className='header'>
                <h1 className='h1-header-homescreen'>Bienvenido</h1>
                <Navbar />
            </header>
                <span className='span-productos'>Catologo de productos</span>
            <ProductList />
        </div>
    )
}

export default HomeScreen