import './RegisterForm.css'

export const RegisterForm = () => {
    return (
    <>
        <div className='div0'>
            <h2 className='h2'>Create an account</h2>
            <h5 className='h5'>Enter your information to register</h5>
        
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

                <form className='form3'>
                    <label className='label3'>Email</label>
                    <input  className='email' type="text" placeholder='cata.vaz@example.com' />
                </form>

                <form className='form4'>
                    <label className='label4'>Telefono</label>
                    <input className='telefono' type="text" placeholder='+54 11 2345 6789' />
                </form>

                <form className='form5'>
                <label className='label5'>Contraseña</label>
                    <input className='contraseña' type="password" placeholder='**********' />
                    <button className='eye'><i class="bi bi-eye"></i></button>
                </form>

                <form className='form6'>
                    <label className='label6'>Confirmar contraseña</label>
                    <input className='conf-contraseña' type="password" placeholder='**********'/>
                    <button className='eye2'><i class="bi bi-eye"></i></button>
                </form>

                <button className='register'>Register</button>
        </div>
    </>
)
}