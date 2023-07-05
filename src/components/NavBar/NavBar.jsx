import React, { useEffect, useState, useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ItemsContext } from '../Context/ItemsContext'
import ButtonDrop from '../utils/ButtonDrop/ButtonDrop'

const NavBar = () => {
  const { items, pokemonPull } = useContext(ItemsContext);

 console.log('navbar ', pokemonPull);
  const [categories, setCategories] = useState([]);




  return (
    <div className='navBar'>
      <Link to="/">
        <h1 className='brand'>POKENO</h1>
      </Link>
      <ButtonDrop data={pokemonPull}/>

      <Link to="/cart">
        <CartWidget items={items}/>
      </Link>
    </div>
  );
}

export default NavBar
