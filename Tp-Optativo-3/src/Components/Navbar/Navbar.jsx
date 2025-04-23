import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Registrarse</Link>
            </nav>
        </header>
    )
}

export default Navbar