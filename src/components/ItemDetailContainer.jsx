import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { productos } from "./data";
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    const {iditem} = useParams();
    const [mostrarProducto, setmostrarProducto] = useState({});
  
    useEffect(() => {
      const productoPromesa = new Promise((res, rej) => {
        setTimeout(() => {
          
          res(productos.find((item) => item.id == iditem));
        }, 2000);
      });
  
      productoPromesa.then((res) => {
        setmostrarProducto(res);
        
      });
      console.log(mostrarProducto);
    }, [iditem]);
  
    return (
      <div>
        <ItemDetail mostrarProducto={mostrarProducto} />
        
      </div>
    );
  }