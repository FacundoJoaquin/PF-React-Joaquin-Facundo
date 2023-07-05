//AGREGAR TOAST DE QUE SE AÑADIO AL CARRITO

import * as React from "react";
import { useState, useContext, useEffect } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton.jsx";
import { ItemsContext } from "../Context/ItemsContext";

const CardDetail = ({ data }) => {
  const { setItems, items } = useContext(ItemsContext);

  const [count, setCount] = useState(0);

  const [qty, setQty] = useState(0);

  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrememtQty = () => {
    setQty(qty - 1);
  };
  const addProdCart = () => {
    if (qty > 0) {
      const existingItem = items.find((item) => item.id === data[0].id);
      if (existingItem) {
        existingItem.qty += qty;
        setItems([...items]);
      } else {
        const newItem = { ...data[0], qty };
        setItems([...items, newItem]);
      }
      setQty(0);
  
      const updatedCart = [...items];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const deleteCart = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <div className="container-img">
        <img src={data[0].imagen} alt="" />
      </div>
      <div className="container-info">
        <h1>{data[0].nombre}</h1>
        <div className="glass">
          <div>
            <p className="precio">${data[0].precio}</p>
            <p>{data[0].descripcion}</p>
          </div>
          <div>
            <ul className="ul-pokemon">
              <li>
                <strong>Tipo:</strong> {data[0].tipo}
              </li>
              <li>
                <strong>Generación:</strong> {data[0].generacion}
              </li>
              <li>
                <strong>Mejor ataque:</strong> {data[0].ataque}
              </li>
            </ul>
          </div>
          <div className="btn-container">
            <button onClick={addProdCart} className="button-add">
              Agregar al carrito
            </button>
          </div>
          <button className="button-qty" onClick={incrementQty}>+</button>
          <button className="button-qty" onClick={decrememtQty}>-</button>
          {qty}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
