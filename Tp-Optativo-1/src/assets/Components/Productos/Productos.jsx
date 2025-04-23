import React from 'react'
import './Productos.css'

const Productos = ({img, titulo, precio, precioFinal, descuento, cantidadDisponible}) => {
  return (
    <div className='producto'>
      <img  className ='imagen' 
        src={img} />
      <span className='titulo'>{titulo}</span>
      <div className='div-precios'>
        <div className='div-pre-desc'>
          <span className='precio'>{precio}</span>
          <span className='descuento'>{descuento}</span>
        </div>
        <span className='preciofinal'>{precioFinal}</span>
      </div>
      <span className='cantidad'>{cantidadDisponible}</span>

    </div>
  )
}

export default Productos