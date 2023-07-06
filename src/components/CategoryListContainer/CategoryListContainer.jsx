import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../utils/Loader/Loader";

const CategoryListContainer = () => {
  const { generacion } = useParams();
  const [pokemonGeneration, setPokemonGeneration] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const q = query(
        collection(db, "pokemon"),
        where("generacion", "==", generacion)
      );
      const querySnapshot = await getDocs(q);
      let pokemons = [];
      querySnapshot.forEach((doc) => {
        pokemons.push({ id: doc.id, ...doc.data() });
      });
      setLoading(true);
      setPokemonGeneration(pokemons);
    };

    getPokemon();
  }, [generacion]);
  return (
    <div className="ilc">
      {generacion === "primera" ? (
        <h2>Reviví tu infancia</h2>
      ) : (
        <h2>Nuestros productos</h2>
      )}
      <div className="card-container">
        {loading ? (
          pokemonGeneration.map((product, index) => (
            <div className="card" key={`${product.id}-${index}`}>
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

export default CategoryListContainer;
