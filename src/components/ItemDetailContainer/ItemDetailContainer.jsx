import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import Loader from "../utils/Loader/Loader";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [prod, setProd] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const q = query(
        collection(db, "pokemon"),
        where("id", "==", parseInt(id))
      );
      const querySnapshot = await getDocs(q);
      let pokemons = [];
      querySnapshot.forEach((doc) => {
        pokemons.push({ ...doc.data() });
      });
      setLoading(true);
      setProd(pokemons);
    };

    getPokemon();
  }, [id]);

  return (
    <section className="detail">
      {loading ? (
        <ItemDetail data={prod} />
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
    </section>
  );
};

export default ItemDetailContainer;
