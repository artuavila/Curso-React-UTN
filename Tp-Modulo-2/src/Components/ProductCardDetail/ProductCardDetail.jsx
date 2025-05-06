import React from 'react'
import Button from '../Button/Button'
import './ProductCardDetail.css'
import Contador from '../Contador/Contador'

const ProductCardDetail = ({img, title, real_price, final_price, discount, stockweb, stocklocal, descripcion}) => {
    return (
        <div className='contenedor-product-detail'>
            <div className='contenedor-product-description'>
                <div className='producto-detail'>
                    <div className='div-titulo-imagen-detail'>
                        <div className='div-titulo-detail'>
                            <span className='titulo-detail'>{title}</span>
                        </div>
                        <hr className='hr-titulo'/>
                        <div className='div-imagen'>
                            <img className='imagen-detail' 
                            src={img} />
                        </div>
                    </div>

                    <div className='div-precios-stock-descripcion-detail'>
                        <div className='div-precios-detail'>
                            <span className='precio-detail'>${real_price}</span>
                            <div className='div-pre-desc-detail'>
                                <span className='preciofinal-detail'>${final_price}</span>
                                <span className='descuento-detail'>{discount}% OFF</span>
                            </div>
                            <span className='span-precio-especial-detail'>Precio Especial</span>
                        </div>
                        <Button />
                        <Contador />
                        <div className='div-info-descripcion'>
                            <div className='div-stockweb-detail'>
                                <span className='stockweb-detail'>{stockweb}</span>
                            </div>
                            <hr className='hr'/>
                            <div className='div-stocklocal-detail'>
                                <span className='stocklocal-detail'>{stocklocal}</span>
                            </div>
                            <hr className='hr'/>
                            <div className='div-retiro-detail'>
                                <span className='span-retiro-detail'>RETIRO 
                                    <b className='b-gratis-detail'>¡GRATIS!</b>
                                </span>
                            </div>
                            <hr className='hr'/>
                            <div className='div-envio-detail'>
                                <span>Envío a todo el país</span>
                            </div>
                            <hr className='hr'/>
                            <div className='div-garantia-dias-detail'>
                                <span className='span-garantia-detail'>GARANTÍA
                                    <p className='p-dias-detail'>360 dias</p>
                                </span>
                            </div>
                            <hr className='hr'/>
                        </div>
                    </div>    
                </div>
                <hr className='hr-div-separador'/>
                <div className='div-descripcion'>
                    <span className='span-descripcion'>Especificaciones del producto</span>
                    <div className='descripcion'>{descripcion}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardDetail