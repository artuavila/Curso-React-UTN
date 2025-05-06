import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/products' 
import Navbar from '../../Components/Navbar/Navbar'
import ProductCardDetail from '../../Components/ProductCardDetail/ProductCardDetail'
import './ProductDetailScreen.css'

const ProductDetailScreen = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {product_id} = useParams()
    //console.log(product_id)

    const getProductDetail = async () =>{
        setLoading(true)
        const product_detail_response = await getProductById({product_id})
        if(product_detail_response){
            setProduct(product_detail_response)
        } else {
            setError('Error al buscar producto')
        }
        setLoading(false)
    }

    useEffect(
        () => {
            getProductDetail()
        },
        []
    )

    let content
    if(loading){
        content = <h1>Cargando...</h1>
    } else if(!loading && !product){
        content = <h1>Producto no encontrado</h1>
    } else{
        content = <div>
            <ProductCardDetail {...product} />
        </div>
    }

    return (
        <div>
            <header className='header-product-detail'>
                <h1 className='h1-header-product-detail'>GamingHouse</h1>
                <Navbar />
            </header>
            {content}
        </div>
    )
}

export default ProductDetailScreen