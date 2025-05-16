import React from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({img, title, real_price, final_price, discount, stock, id}) => {
    return (
        <div className='producto'>
            <img className='imagen' 
                src={img} />
                <div className='div-titulo'>
                    <span className='titulo'>{title}</span>
                </div>
            <div className='div-precios'>
                <div className='div-pre-desc'>
                    <span className='precio'>${real_price}</span>
                    <span className='descuento'>{discount}% OFF</span>
                </div>
                <span className='preciofinal'>${final_price}</span>
            </div>
            <span className='span-precio-especial'>Precio Especial</span>
            <span className='span-cuotas'>¡Hasta 12 Cuotas Fijas!</span>
            <Link className='link-ver-mas' 
                to={`/product/${id}`}>
                    <div className='div-ver-mas'>Ver mas</div>
            </Link>
        </div>
    )
}

export default ProductCard