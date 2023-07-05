import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { ItemsContext } from "../Context/ItemsContext";
import Oak from "../../assets/oak.png";

const Cart = () => {
  const { items, setItems } = useContext(ItemsContext);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);


  const handleMessage = () => {
    if (items.length > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  };

useEffect(() => {
  handleMessage()
},[items])

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
    handleMessage()
    setTotal(newTotal);
    console.log(items.length);
      if(items.length ==0){
        localStorage.setItem("cart", [])
      }
  }, [items]);

  return (
    <div className="main-container">
      <h1>Carrito</h1>
      {loaded ? (items.map((item, index) =>
        item.qty > 0 ? (
          <div className="item-container" key={`${item.nombre}-${index}`}>
            <div className="img-container">
              <img src={item.imagen} className="imagen" alt={item.nombre} />
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
      )) : (
        <img src={Oak} alt="" />
      )
      }
        {loaded? (<div className="end">
          <p>Total: ${total}</p>
          <button className="button-confirm">Confirmar compra</button>
        </div>) : ('')}

    </div>
  );
};

export default Cart;

/* import React, { useContext, useState, useEffect } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import Oak from "../../assets/oak.png";

const Cart = () => {
  const { items, setItems } = useContext(ItemsContext);
  const [amount, setAmount] = useState(0);
  const [loaded, setLoaded] = useState(false);



  const handleMessage = () => {
    if (items.length > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
    handleMessage();
    groupItems();
  }, [items]);

  const calculateTotalPrice = () => {
    const totalPrice = items.flat().reduce((acc, item) => acc + item.precio, 0);
    setAmount(totalPrice);
  };

  const handleRemoveItems = (index) => {
    const deleteItem = [...items];
    deleteItem.splice(index, 1);
    setItems(deleteItem);
    localStorage.setItem("cart", JSON.stringify(deleteItem));
  };

  const handleIncreaseQuantity = (index) => {
    setGroupedItems((prevGroupedItems) => {
      const updatedGroupedItems = [...prevGroupedItems];
      updatedGroupedItems[index].cantidad += 1;
      return updatedGroupedItems;
    });
  };

  const getStorage = () => {
    const getCart = localStorage.getItem("cart");
    if (getCart) {
      const cartParseado = JSON.parse(getCart);
      setItems(cartParseado);
    }
  };

  const groupItems = () => {
    const grouped = items.flat().reduce((acc, item) => {
      const existingItem = acc.find((i) => i.nombre === item.nombre);
      if (existingItem) {
        existingItem.cantidad += 1;
      } else {
        acc.push({ ...item, cantidad: 1 });
      }
      return acc;
    }, []);
    setGroupedItems(grouped);
  };

  console.log("groupedItems: ", groupedItems);
  return (
    <>
      <h1>Carrito de compras</h1>
      <div className="container">
        {loaded ? (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Generacion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {groupedItems.map((item, index) => (
                <tr key={`${item.nombre}-${index}`}>
                  <td>
                    <Link className="item-link" to={`/item/${item.id}`}>
                      {item.nombre}
                    </Link>
                  </td>
                  <td>{item.tipo}</td>
                  <td>{item.generacion}</td>
                  <td>${item.precio}</td>
                  <td>{item.cantidad}</td>
                  <td>
                    <button
                      className="button-delete"
                      onClick={() => handleRemoveItems(index)}
                    >
                      -
                    </button>
                    <button
                      className="button-increase"
                      onClick={() => handleIncreaseQuantity(index)}
                    >
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="oak">
            <img src={Oak} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
 */
