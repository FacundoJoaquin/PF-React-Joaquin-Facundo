import * as React from "react";
import "./ItemList.css";
import Button from "@mui/joy/Button";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="top">
          <img src={data.imagen} alt="" />
        </div>
        <div className="info">
          <div className="name">
            <p className="dataname">{data.nombre}</p>
            <div className="description">
              <p>{data.descripcion}</p>
            </div>
            <div className="link">
              <Link to={`/item/${data.id}`}>
                <Button color="warning">Ir a detalle</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="radius" />
      </div>
    </div>
  );
};

export default Cards;
