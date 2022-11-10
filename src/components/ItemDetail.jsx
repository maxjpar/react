import React from "react";
import ItemCount from "./ItemCount";

export default function ItemDetail({mostrarProducto}) {
    function addItem(x) {
        alert("Agrego " + x + " " + mostrarProducto.nombre + " al carrito");
    }
    
return (
        <div className="itemDetail">
        <img src={mostrarProducto.img} alt="" />
        <h2>{mostrarProducto.nombre}</h2>
        <p>Categoria: {mostrarProducto.categoria}</p>
        <p>Peso en gramos: {mostrarProducto.peso_gr}</p>
        <p>Cantidad: {mostrarProducto.cantidad}</p>
        <p>Precio: {mostrarProducto.precio}</p>
        <ItemCount initial={1} stock={mostrarProducto.stock} addItem={addItem} />
        </div>
  );
}

