import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import LoginForm from '../../Components/LoginForm/LoginForm'
import './LoginScreen.css'

const LoginScreen = () => {
    return (
        <div>
            <header className='header-login'>
                <h1 className='h1-header-login'>GamingHouse</h1>
                <Navbar />
            </header>
            <LoginForm />
        </div>
    )
}

export default LoginScreen