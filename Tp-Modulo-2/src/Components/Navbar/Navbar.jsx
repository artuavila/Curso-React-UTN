import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='div-navbar'>
                    <Link className='link-home' 
                        to='/'>Home</Link>
                    <Link className='link-login'
                        to='/login'>Ingresar</Link>
                    <Link className='link-register'
                        to='/register'>Registrarse</Link>
                </div>
            </nav>
    )
}

export default Navbar