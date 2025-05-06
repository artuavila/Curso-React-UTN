import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductList from '../../Components/ProductList/ProductList'
import './HomeScreen.css'

const HomeScreen = () => {
    return (
        <div>
            <header className='header-homescreen'>
                <h1 className='h1-header-homescreen'>GamingHouse</h1>
                <Navbar />
            </header>
                <span className='span-productos'>OFERTAS</span>
            <ProductList />
        </div>
    )
}

export default HomeScreen