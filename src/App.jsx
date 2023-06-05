import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacto from "./components/Contacto/Contacto";
import Pokemon from "./components/Pokemon";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Pokemon />} />
          <Route exact path="/productos" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} /> {/*  */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;