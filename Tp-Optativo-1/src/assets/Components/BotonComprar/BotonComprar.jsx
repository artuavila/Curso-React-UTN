import React, { useState} from 'react'
import './BotonComprar.css'

const ESTADOS_DISPONIBLES = Object.freeze({
    COMPRADO: 'COMPRADO',
    NO_COMPRADO: 'NO_COMPRADO'
})

const BotonComprar = () => {
    const initialState = ESTADOS_DISPONIBLES.NO_COMPRADO
    const [estado_Boton, setEstadoBoton] = useState(initialState)

    const comprar = () => {
        setEstadoBoton(ESTADOS_DISPONIBLES.COMPRADO)
        mensaje()
    }

    const mensaje = () => {
        alert('Gracias por su compra')
    }

    const reset = () => {
        setEstadoBoton(initialState)
    }

    let textoBoton
    if(estado_Boton === ESTADOS_DISPONIBLES.COMPRADO){
        textoBoton = <button className='boton-comprar'disabled>Comprado</button>
    } else if(estado_Boton === ESTADOS_DISPONIBLES.CARGANDO){
        textoBoton = <button className='boton-comprar' disabled>Cargando...</button>
    } else{
        textoBoton = <button className='boton-comprar' onClick={comprar}>Comprar</button>
    }


    return (
        <div className='boton'>
            {textoBoton}
            <button className='boton-reset' 
                onClick={reset} disabled = {
                    estado_Boton === ESTADOS_DISPONIBLES.CARGANDO
                    || estado_Boton === initialState
            }
            >Reset</button>
        </div>
    )
}

export default BotonComprar