import { useState, useEffect } from "react";

const ItemCount = ( { stock = 0, initial = 1, onAdd}) => {

    const [cantidad, setCantidad] = useState(0);


    useEffect(() => {
        setCantidad(initial);
    }, [initial]);

    const increment = () =>{

        if (cantidad < stock ) {
            setCantidad(cantidad + 1);
    }
}


    function decrement() {
        if (cantidad > initial + 1) {
            setCantidad(cantidad - 1);
        }
    }


    return(
         <>
        <div className=" text-center d-block">
           <button className="btn btn-warning" onClick={decrement}>-</button>
            {cantidad}
            <button className="btn btn-warning" onClick={increment}>+</button>

            {
                stock && cantidad
                ?<div className="m-1">
                <button className="btn btn-success" onClick= {() => onAdd(cantidad)}>Agregar</button>
                </div>
                : <div>
                    <button className="btn btn-success"> Agregar</button>
                </div>

            }
            
            </div>
         </>
    );
}

export default ItemCount;