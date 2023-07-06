import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [contador, setContador] = useState([]);

  const [pokemonPull, setPokemonPull] = useState([]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        contador,
        setContador,
        pokemonPull,
        setPokemonPull,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
