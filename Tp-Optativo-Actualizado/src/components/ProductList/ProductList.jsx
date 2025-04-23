import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { getProducts } from '../../services/productServices'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getProductsList = async () =>{
        setLoading(true)
        const product_list_response = await getProducts()
        if(product_list_response){
            setProducts(product_list_response)
        } else {
            setError('Error al obtener productos')
        }
        setLoading(false)
    }

    useEffect(
        () => {
            getProductsList()
        },
        []
    )

    const componentes = products.map(
        (product) => {
            return <ProductCard {...product} 
                key = {product.id}
            />
        }
    )

    let content 
    if(loading){
        content = <h2>Cargando...</h2>
    } else {
        if(error){
            content = <h2>{error}</h2>
        } else {
            content = componentes
        }
    }

    return (
        <div className='contenedor'>
            {content}
        </div>
    )
}

export default ProductList