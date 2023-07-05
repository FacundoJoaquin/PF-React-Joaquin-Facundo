import React, { useEffect } from "react";
import carritoImage from "../../assets/cart.png";
import "./CartWidget.css";

const CartWidget = ({ items }) => {
  let totalQty = 0;
  const getTotalQty = () => {
    items.forEach((item) => {
      totalQty += item.qty;
    });
    return totalQty;
  };

  return (
    <div className="cart">
      <img src={carritoImage} alt="Carrito de compras" />
      <div className="circle">
        <p className="pcw">{getTotalQty()}</p>
      </div>
    </div>
  );
};

export default CartWidget;
