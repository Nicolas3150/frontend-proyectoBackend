import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <ul>
                <li>
                    <NavLink to={'/'}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to={'/cart'}>Carrito</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default NavBar