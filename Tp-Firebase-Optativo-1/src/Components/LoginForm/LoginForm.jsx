import React from 'react'
import './LoginForm.css'
const LoginForm = () => {
    return (
        <div className='contenedor-login'>
            <div className='div-login'>
                <div className='div-h2-login'>
                    <h2 className='h2-login'>Iniciar Sesion</h2>
                </div>

                <div className='div-email-contraseña-login'>
                        <form className='form-email'>
                            <input className='input-email-login' type="text" placeholder='Ingresar correo...' />
                        </form>
                    
                        <form className='form-contraseña-login'>
                            <input className='input-contraseña-login' type="password" placeholder='Ingresar contraseña...' />
                        </form>
                </div>

                <div className='div-0-login'>
                    <div className='div-1-login'>
                        <span className='span-registrarme-login'>Registrarme</span>
                    </div>

                    <div className='div-2-login'>
                        <span className='span-olvi-contr-login'>Olvide mi contraseña</span>
                    </div>
                </div>
                
                <div className='div-btn-login'>
                    <button className='btn-login'>INGRESAR</button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm