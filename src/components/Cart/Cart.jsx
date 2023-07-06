import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { ItemsContext } from "../utils/Context/ItemsContext";
import Oak from "../../assets/oak.png";
import FormCart from "../utils/FormCart/FormCart";

const Cart = () => {
  const { items, setItems } = useContext(ItemsContext);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleMessage = () => {
    if (items.length > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  };

  useEffect(() => {
    handleMessage();
  }, [items]);

  const incrementQty = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
    setItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const decrememtQty = (itemId) => {
    const updatedItems = items
      .map((item) => {
        if (item.id === itemId && item.qty > 0) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      })
      .filter((item) => item.qty > 0);

    setItems(updatedItems);
  };

  const removeItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
    const newTotal = items.reduce(
      (acc, item) => acc + item.precio * item.qty,
      0
    );
    handleMessage();
    setTotal(newTotal);
    if (items.length == 0) {
      localStorage.setItem("cart", []);
    }
  }, [items]);

  const callForm = () => {
    setShowForm(true);
  };
  const quitForm = () => {
    setShowForm(false);
  };
  return (
    <div className="main-container">
      {showForm ? (
        <FormCart handleBack={quitForm} />
      ) : (
        <>
          <h1>Carrito</h1>
          {loaded ? (
            items.map((item, index) =>
              item.qty > 0 ? (
                <div className="item-container" key={`${item.nombre}-${index}`}>
                  <div className="img-container">
                    <img
                      src={item.imagen}
                      className="imagen"
                      alt={item.nombre}
                    />
                  </div>
                  <div className="name-container">
                    <p>{item.nombre}</p>
                  </div>
                  <div className="qty-container">
                    <button
                      className="button-qty"
                      onClick={() => decrememtQty(item.id)}
                    >
                      -
                    </button>
                    <p>{item.qty}</p>
                    <button
                      className="button-qty"
                      onClick={() => incrementQty(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="extra-container">
                    <p>${item.precio * item.qty}</p>
                    <p className="delete" onClick={() => removeItem(item.id)}>
                      Eliminar
                    </p>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <img src={Oak} alt="" />
          )}
          {loaded ? (
            <div className="end">
              <p>Total: ${total}</p>
              <button className="button-confirm" onClick={callForm}>
                Confirmar compra
              </button>
            </div>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
