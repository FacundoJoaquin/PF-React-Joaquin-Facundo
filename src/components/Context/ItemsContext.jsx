import React, { createContext, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {


  const [items, setItems] = useState([]); //seria el cart
  const [contador, setContador] = useState([])

  const [groupedItems, setGroupedItems] = useState([]);

  return (
    <ItemsContext.Provider
      value={{items, setItems, contador, setContador}}
    >
      {children}
    </ItemsContext.Provider>
  );
};

/* lo uso en itemlistcontainer */
