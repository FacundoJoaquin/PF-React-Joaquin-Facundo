import React, { useEffect, useState, useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ItemsContext } from '../Context/ItemsContext'

const NavBar = () => {
  const { items } = useContext(ItemsContext);
/* console.log(items);
 */
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(resp => resp.json())
    .then((data)=>{
      const categorias = [...new Set(data.map(item => item.category))];
      setCategories(categorias);
    });
  }, [])


  return (
    <div className='navBar'>
      <Link to="/">
        <h1 className='brand'>POKENO</h1>
      </Link>
      <ul>
        {categories.map((category, index) => (
          <li key={index}><Link to={`/category/${category}`}>{category}</Link></li>
        ))}
      </ul>
      <Link to="/cart">
        <CartWidget items={items}/>
      </Link>
    </div>
  );
}

export default NavBar
