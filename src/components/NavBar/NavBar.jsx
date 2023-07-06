import React, { useContext } from "react";
import CartWidget from "../utils/CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ItemsContext } from "../utils/Context/ItemsContext";
import ButtonDrop from "../utils/ButtonDrop/ButtonDrop";

const NavBar = () => {
  const { items, pokemonPull } = useContext(ItemsContext);

  return (
    <div className="navBar">
      <Link to="/">
        <h1 className="brand">POKENO</h1>
      </Link>
      <ButtonDrop data={pokemonPull} />

      <Link to="/cart">
        <CartWidget items={items} />
      </Link>
    </div>
  );
};

export default NavBar;
