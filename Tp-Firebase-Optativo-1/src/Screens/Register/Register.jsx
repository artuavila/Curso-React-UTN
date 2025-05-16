import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { RegisterForm } from '../../Components/RegisterForm/RegisterForm'
import './Register.css'

const Register = () => {
    return (
        <div>
            <header className='header-register'>
                <h1 className='h1-header-register'>GamingHouse</h1>
                <Navbar />
            </header>
            <RegisterForm />
        </div>
    )
}

export default Register