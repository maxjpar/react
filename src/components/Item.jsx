import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <div >
      <div className="containerProductos" key={item.id}>
        <img src={item.img} alt="" />
        <h2>{item.nombre}</h2>
        <p>Categoria: {item.categoria}</p>
          <Link className="linkOpenProduct" to={"/item/" + item.id}>ABRIR PRODUCTO</Link>
        <br />
        <br />
      </div>
    </div>
  );
}

