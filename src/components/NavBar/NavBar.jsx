import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navBar'>
      <Link to="/">
        <h1>Pastelete</h1>
      </Link>
      <ul>
        <li><Link to ="/productos">Productos</Link></li>
        <li><Link to ="/about">Quienes Somos</Link></li>
        <li><Link to ="/contacto">Contacto</Link></li>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  )
}

export default NavBar