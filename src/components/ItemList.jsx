import React from "react";
import Item from "./Item";
export default function ItemList({ totalProductos }) {
  return (
    <>
      {!totalProductos.length && "Loading..."}
      {totalProductos.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
}