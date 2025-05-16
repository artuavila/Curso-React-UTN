import React, { useState } from 'react'
import './Contador.css'

const Contador = () => {
    const [valorEstado, setEstado] = useState(1)
    const sumar = () => {
        setEstado(valorEstado + 1)
    }

    const restar = () => {
        setEstado(valorEstado - 1)
    }
    return (
        <div className='div-contador'>
            <button
                className='boton-contador'
                onClick={restar}
                disabled = {valorEstado === 0}
            >-</button>

            <input className='input-contador' 
                type="text" 
                value={valorEstado} 
            />
            
            <button
                className='boton-contador' 
                onClick={sumar}
            >+</button>
        </div>
    )
}

export default Contador