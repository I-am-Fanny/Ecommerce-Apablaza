import { useState } from "react";

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(1);

    const increment = () =>{

        if (cantidad < props.max)setCantidad(cantidad+1);
    }

    const decrement = () =>{
       if (cantidad > 1) setCantidad(cantidad-1);
    }

const agregar = () =>{
    console.log(`Se agregó ${cantidad} productos al carrito`)
}
    
    return(
         <>
        <div className=" text-center d-block">
           <button className="btn btn-warning" onClick={decrement}>-</button>
            {cantidad}
            <button className="btn btn-warning" onClick={increment}>+</button>
            
            <div className="m-1">
            <button className="btn btn-success" onClick={agregar}>Agregar</button>
            </div>
        </div>
         </>
    )
}

export default ItemCount;