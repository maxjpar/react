import React, { useState } from "react";

export default function ItemCount({ initial, stock, addItem }) {
  const [count, setCount] = useState(initial);
  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  return (
    <>
    <div className="buttonSumaResta">
      <button onClick={restar}>-</button> {count} <button onClick={sumar}>+</button>
    </div>
    <div>
      <button onClick={() => addItem(count)}>AGREGAR AL CARRITO</button>
    </div>
    </>

  );
}


