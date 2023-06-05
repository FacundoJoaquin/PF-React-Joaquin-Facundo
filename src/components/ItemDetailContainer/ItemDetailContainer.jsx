import React from 'react';
import { useParams } from 'react-router-dom';
import CardPokemon from '../CardPokemon';
import { useState, useEffect } from 'react';
//ACA HAY QUE IMPORTAR LA CARD DETALLADA


const ItemDetailContainer = () => {
  let { id } = useParams();
  const [prod, setProd] = useState({})

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(resp=>resp.json())
      .then(data=>setProd(data))
  }, [id])

  return (
    <>
      <h1>Hola</h1>
        {prod && <CardPokemon data={prod} />}
    </>
  );
}

export default ItemDetailContainer;
