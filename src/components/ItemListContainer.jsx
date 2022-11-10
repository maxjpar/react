import React from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { productos} from "./data";
import { useState, useEffect } from "react";


export default function ItemListContainer({greeting}) {
  const { idcategoria } = useParams();

  const [totalProductos, setTotalProductos] = useState([]);

  useEffect(() => {
    const productosPromesa = new Promise((res, rej)=>{
      setTimeout(()=>{
          res(productos);
      }, 2000)
    });
  
    productosPromesa.then((res) => {
      if (idcategoria) {
        setTotalProductos(res.filter((item) => item.categoria == idcategoria));
      } else {
        setTotalProductos(res);
      }
    });
  }, [idcategoria]);
  
  return (
    <div className="container">
      <ItemList totalProductos={totalProductos} />;
    </div>
  );
}
