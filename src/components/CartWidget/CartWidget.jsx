import React from 'react'
import carritoImage from '../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='cart'>
        <img src={carritoImage} alt="Carrito de compras" />
        <div className='circle'>
          <p className='pcw'>1</p>
        </div>
    </div>
  )
}

export default CartWidget