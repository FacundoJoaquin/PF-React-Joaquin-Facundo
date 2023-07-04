import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Swal from 'sweetalert2';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';
import {db} from "../../firebase/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore";

import { ItemsContext } from '../Context/ItemsContext';


const ItemListContainer = ({}) => {
  //context
  const { items } = useContext(ItemsContext);

/*   console.log(items);
 */

  //codigo entrega 2
  const [pokemon, setPokemon] = useState([])
  const [loaded, setLoaded] = useState(false);

  const errorFetching = () => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      text: 'Error, no se pudo cargar los productos',
      showConfirmButton: true,
    });
  };


  useEffect(() => {
    const getPokemon = async () => { 
      const q = query(collection(db, "pokemon"));
      const querySnapshot = await getDocs(q);
      let pokemons = [];
      querySnapshot.forEach((doc) => {
        pokemons.push({...doc.data()})
      });
      setLoaded(true);
      setPokemon(pokemons);  //tengo almacenado los pokemon
      console.log(pokemons);
    };
    getPokemon()
  }, [])



  return (
    <div className='ilc'>
      <h2>Nuestros productos</h2>
      <div className='card-container'>
        {loaded ? (
          pokemon.map(product => (
            <div className='card' key={product.id}>
              <ItemList data={product} />
            </div>
          ))
        ) : (
          <div className='loader'>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
