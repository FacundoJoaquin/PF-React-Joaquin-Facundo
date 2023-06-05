import React, { useEffect, useState } from 'react';
import CardPokemon from './CardPokemon';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data.results);
      })
      
      .catch((error) => {
        console.log("No hay más pokemones", error);
      });
  }, []);
  const pokemonIniciales = [0, 3, 6];                                      
  const pokemonFiltrados = pokemon.filter((pokemon, index) => pokemonIniciales.includes(index))    //los agarro del indice, los filtro, quedan en pFiltrados 


  return (
    <>
    <h1>Pokemon</h1>
      {pokemonFiltrados.map((pokemon, index) =>{
        
        return (
          <CardPokemon key={index} data={pokemon} index={index}/>
        )
      })}

    </>
  );
};

export default Pokemon;

/* {filter.map((poke, index) => (
        <div key={index}>
          {console.log(poke)}
          <h2>{poke.name}</h2>
            <p>{poke.moves}</p>
        </div>
      ))} */



/*   const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((error) => {
        console.log("No hay más Pokemones 😥");
      });
  }, []);
 */