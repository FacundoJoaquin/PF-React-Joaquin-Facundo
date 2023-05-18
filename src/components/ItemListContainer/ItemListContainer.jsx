import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='itc'><p>{greeting}</p></div>
  )
}

export default ItemListContainer