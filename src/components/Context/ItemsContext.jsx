import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]); //seria el cart
  const [cart, setCart] = useState([]);

  return (
    <ItemsContext.Provider value={{ cart, setCart, items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

/* lo uso en itemlistcontainer */
