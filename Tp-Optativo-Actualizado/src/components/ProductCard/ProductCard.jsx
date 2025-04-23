import React from 'react'
import Button from '../Button/Button'
import './ProductCard.css'

const ProductCard = ({img, title, real_price, final_price, discount, stock}) => {
    return (
        <div className='producto'>
            <img className='imagen' 
                src={img} />
            <span className='titulo'>{title}</span>
            <div className='div-precios'>
                <div className='div-pre-desc'>
                    <span className='precio'>${real_price}</span>
                    <span className='descuento'>{discount}% OFF</span>
                </div>
                <span className='preciofinal'>${final_price}</span>
            </div>
            <span className='cantidad'>{stock} disponibles</span>
            <Button />
        </div>
    )
}

export default ProductCard