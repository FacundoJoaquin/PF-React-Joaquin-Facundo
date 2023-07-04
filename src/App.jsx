import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemsProvider } from './components/Context/ItemsContext';
/* import {db} from "./firebase/firebaseConfig"
import { collection, query, where, getDocs } from "firebase/firestore"; */



const App = () => {

/*   const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    const getPokemon = async () => {
      const q = query(collection(db, "pokemon"));
      const querySnapshot = await getDocs(q);
      //console.log(querySnapshot);
      let pokemons = [];
      querySnapshot.forEach((doc) => {
        //console.log(doc.id, " => ", doc.data());
        pokemons.push({...doc.data()})
      });
      setPokemon(pokemons);
    };
    getPokemon()
  }, []) */

  return (
    <ItemsProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ItemsProvider>
  );
};

export default App;