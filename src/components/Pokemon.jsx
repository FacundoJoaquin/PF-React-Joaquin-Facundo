import React from 'react'
import { useState, useEffect } from 'react'
import CardPokemon from './CardPokemon'
import { Link } from 'react-router-dom'
import "./pokemon.css"

const Pokemon = () => {

//tengo que crear algo que sea fetch realizado? si = muestro, no = mensaje cargando

const [loaded, setLoaded] = useState(false);
const [products, setProducts] = useState([]);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(resp=>resp.json())
      .then((data)=>{
        setProducts(data);
        setLoaded(true);
      })
      .catch((error)=> {
        console.error(error)
      })
  }, [])


  return (
  <>
      <h2>Productos</h2>
    <div className='card-container'>
    { loaded ? products.map((product) => {
      return (
        <div className='card'  key={product.id}>
            <CardPokemon data={product} />
        </div>
        )
      }) : <p> cargando producots </p>} {/* agregar loader */};
    </div>
    </>
  )
}

export default Pokemon