import * as React from "react";
import { useState, useContext, useEffect } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton.jsx";
import { ItemsContext } from "../Context/ItemsContext";

const CardDetail = ({ data }) => {
  const { setItems, items } = useContext(ItemsContext);

  const [count, setCount] = useState(0);

  const addProdCart = () => {
    setItems([...items, data]);

    localStorage.setItem("cart", JSON.stringify([...items, data]));
  };

  const deleteProductCart = () => {
    if (items.length > 0 && items[items.length - 1][0].id === data[0].id) {
      setItems(items.slice(0, items.length - 1));
    }
  };

  useEffect(() => {
    const filteredItems = items.filter((item) => item[0].id === data[0].id);
    setCount(filteredItems.length);
  }, [items, data]);

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
            <div className="qty-container">

              <button className="button-qty" onClick={deleteProductCart}>
                -
              </button>
              <p> {count}</p>
              <button className="button-qty" onClick={addProdCart}>
                +
              </button>
            </div>
            <Link to={'/cart'}><button className="button-add">Ir al carrito</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
