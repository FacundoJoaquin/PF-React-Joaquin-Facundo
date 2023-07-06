import * as React from "react";
import { useState, useContext } from "react";
import "./ItemDetail.css";
import { ItemsContext } from "../utils/Context/ItemsContext";
import Swal from "sweetalert2";

const CardDetail = ({ data }) => {
  const { setItems, items } = useContext(ItemsContext);

  const [qty, setQty] = useState(0);

  const Toast = Swal.mixin({
    toast: true,
    text: "Pokemon añadido al carrito",
    position: "bottom-right",
    iconColor: "green",
    icon: "success",
    customClass: {
      container: "custom-alert",
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
  });

  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrememtQty = () => {
    if (qty > 0){
      setQty(qty - 1);
    }
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
      Toast.fire();
      setQty(0);
      const updatedCart = [...items];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
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
          <div className="itd-qty">
            <button className="button-qty" onClick={decrememtQty}>
              -
            </button>
            <p>{qty}</p>
            <button className="button-qty" onClick={incrementQty}>
              +
            </button>
          </div>
        </div>
      </div>
      <div id="custom-target"></div>
    </div>
  );
};

export default CardDetail;
