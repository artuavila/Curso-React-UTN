import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ProductList from '../../Components/ProductList/ProductList'

const HomeScreen = () => {
    return (
        <div>
            <header>
                <h1>Bienvenido</h1>
            </header>
            <Navbar />
                Catalogo de productos
            <ProductList />
        </div>
    )
}

export default HomeScreen