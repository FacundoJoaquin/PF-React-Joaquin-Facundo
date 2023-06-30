import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const itemsInStock = [
        { id: 1, name: 'Macbook Pro', price: 1800 },
        { id: 2, name: 'Iphone', price: 1324 },
        { id: 3, name: 'Motorola', price: 1276 },
        { id: 4, name: 'Nokia', price: 8912 }
    ];

    const [items, setItems] = useState(itemsInStock);

    return (
        <ItemsContext.Provider value={{ items, setItems }}>
            {children}
        </ItemsContext.Provider>
    );
};

/* lo uso en itemlistcontainer */