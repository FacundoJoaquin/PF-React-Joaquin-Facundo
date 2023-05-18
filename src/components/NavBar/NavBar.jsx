import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <h1>Pastelete</h1>
        <ul>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Quienes Somos</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        <CartWidget />
    </div>
  )
}

export default NavBar