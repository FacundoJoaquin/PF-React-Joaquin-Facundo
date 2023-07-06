import React, { useState, useEffect, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import Loader from "../utils/Loader/Loader";
import "./ItemListContainer.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import { ItemsContext } from '../utils/Context/ItemsContext'; 

const ItemListContainer = () => {
  const { setPokemonPull } = useContext(ItemsContext);

  const [pokemon, setPokemon] = useState([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    const getPokemon = async () => {
      const q = query(collection(db, "pokemon"));
      const querySnapshot = await getDocs(q);
      let pokemons = [];
      querySnapshot.forEach((doc) => {
        pokemons.push({id: doc.id, ...doc.data() });
      });
      setLoaded(true);
      setPokemon(pokemons);
      setPokemonPull(pokemons)
    };
    getPokemon();
  }, []);

  return (
    <div className="ilc">
      <h2>Nuestros productos</h2>
      <div className="card-container">
        {loaded ? (
          pokemon.map((product) => (
            <div className="card" key={product.id}>
              <ItemList data={product} />
            </div>
          ))
        ) : (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
