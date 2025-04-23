import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { RegisterForm } from '../../Components/RegisterForm/RegisterForm'

const Register = () => {
    return (
        <div>
            <header>
                <h1>Registrarse</h1>
            </header>
            <Navbar />
            <RegisterForm />
        </div>
    )
}

export default Register