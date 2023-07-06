import { useContext, useEffect } from "react";
import { ItemsContext } from "../Context/ItemsContext";
const CartLoader = () => {
  const { setItems } = useContext(ItemsContext);

  useEffect(() => {
    const getCart = localStorage.getItem("cart");
    if (getCart) {
      const parsedCart = JSON.parse(getCart);
      const updatedCart = [];
      parsedCart.forEach((item) => {
        if (item.qty > 0) {
          updatedCart.push(item);
        }
      });
      const filteredCart = parsedCart.filter((item) => item.qty > 0);
      setItems(filteredCart);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
    }
  }, []);

  return null;
};

export default CartLoader;
