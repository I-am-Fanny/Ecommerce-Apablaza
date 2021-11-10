import React from "react";
import data from "./data";
import Productos from "./ItemList";



const ItemListContainer = () => {
    return(
      <>
       <h1 className="text-center">Los mejores productos del mercado</h1>
       
       
       {
         data.map(producto =>(
          <Productos
          name={producto.name}
          imagen={producto.imagen}
          precio={producto.precio}
          descripcion={producto.descripcion}
          />
         ))
       }

      </>
    )
  }

  export default ItemListContainer;