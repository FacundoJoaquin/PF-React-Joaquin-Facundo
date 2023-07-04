import React from 'react'
import carritoImage from '../../assets/carrito.png'
import './CartWidget.css'

const CartWidget = ({ items }) => {
  return (
    <div className='cart'>
      <img src={carritoImage} alt="Carrito de compras" />
      <div className='circle'>
        <p className='pcw'>{items.length}</p>
      </div>
    </div>
  )
}

export default CartWidget