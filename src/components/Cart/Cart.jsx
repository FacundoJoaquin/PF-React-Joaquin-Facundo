import React, { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";

const Cart = () => {
  const { items, setItems } = useContext(ItemsContext);
  console.log(items);

  return <div>Cart</div>;
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
  const [groupedItems, setGroupedItems] = useState([]);

  console.log();

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
