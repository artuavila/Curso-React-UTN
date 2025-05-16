import React, { useState } from 'react'
import './Button.css'

const ESTADOS_DISPONIBLES = Object.freeze({
    COMPRADO: 'COMPRADO',
    NO_COMPRADO: 'NO_COMPRADO'    
})

const Button = () => {
    const initialState = ESTADOS_DISPONIBLES.NO_COMPRADO
    const [estado_Boton, setEstadoBoton] = useState(initialState)

    const handleClick = () =>{
        alert('Gracias por su compra!!')
        setEstadoBoton(ESTADOS_DISPONIBLES.COMPRADO)
    }

    let boton
    if(estado_Boton === ESTADOS_DISPONIBLES.COMPRADO){
        boton = <button className='boton-comprado' disabled>Comprado</button>
    } else {
        boton = <button className='boton-comprar' onClick={handleClick}>Comprar</button>
    }

    return (
        <div className='boton'>
            {boton}
        </div>
    )
}

export default Button