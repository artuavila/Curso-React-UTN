import './RegisterForm.css'

export const RegisterForm = () => {
    return (
    <div className='contenedor-register'>        
        <div className='div0'>
            <div className='div-top-register'>
                <h2 className='h2'>Create an account</h2>
                <h5 className='h5'>Enter your information to register</h5>
            </div>
                
            <div className='div-nom-ape'>
                <div className='div1'>
                    <form className='form1'>
                        <label className='label1'>Nombre</label>        
                        <input  className = 'nombre' type="text" placeholder='Catalina' />
                    </form>
                </div>

                <div className='div1'>
                    <form className='form2'>
                        <label className='label2'>Apellido</label>
                        <input className='apellido' type="text" placeholder='Vazquez' />
                    </form>
                </div>
            </div>

                <div className='div-email'>
                    <form className='form3'>
                        <label className='label3'>Email</label>
                        <input  className='email' type="text" placeholder='cata.vaz@example.com' />
                    </form>
                </div>

                <div className='div-telefono'>
                    <form className='form4'>
                        <label className='label4'>Telefono</label>
                        <input className='telefono' type="text" placeholder='+54 11 2345 6789' />
                    </form>
                </div>
                
                <div className='div-contraseña'>
                    <form className='form5'>
                    <label className='label5'>Contraseña</label>
                        <input className='contraseña' type="password" placeholder='**********' />
                        <i class="bi-eye"> </i>
                    </form>
                </div>

                <div className='div-conf-contraseña'>
                    <form className='form6'>
                        <label className='label6'>Confirmar contraseña</label>
                        <input className='conf-contraseña' type="password" placeholder='**********'/>
                        <i class="bi-eye"> </i>
                    </form>
                </div>

                <div className='div-button'>
                    <button className='button-register'>Register</button>
                </div>
        </div>
    </div>
)
}