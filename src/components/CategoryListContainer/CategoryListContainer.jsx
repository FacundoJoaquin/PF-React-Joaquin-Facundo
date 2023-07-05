import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import { ItemsContext } from "../Context/ItemsContext";

const CategoryListContainer = () => {
  const { generacion } = useParams();
  const [pokemonGeneration, setPokemonGeneration] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(generacion, pokemonGeneration);

  useEffect(() => {
    const getPokemon = async () => {
      const q = query(
        collection(db, "pokemon"),
        where("generacion", "==", generacion)
      );
      const querySnapshot = await getDocs(q);
      let pokemons = [];
      querySnapshot.forEach((doc) => {
        console.log("DATA: ", doc.data(), "GENERACION: ", generacion);
        pokemons.push({ ...doc.data() });
      });
      setLoading(true);
      setPokemonGeneration(pokemons);
    };

    getPokemon();
  }, [generacion]);
  return (
    <div className="ilc">
      {generacion === 'primera' ? (
        <h2>Quien no soño tener un pikachu</h2>
      ) : (
        <h2>nuestros productos</h2>
      )}
      <div className="card-container">
        {loading ? (
          pokemonGeneration.map((product) => (
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

export default CategoryListContainer;
