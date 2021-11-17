 

 const ItemDetail = ({ item }) => {

    return(
        <>
        <div className="container m-5 border">
        <div className="d-flex justify-content-center">
            <img src={item.imagen} alt=""Producto/>
            <div className="d-flex align-self-center p-2 flex-fill bd-highlight  flex-column  flex-nowrap">
            <h1 className="align-self-center">{item.name}</h1>
            <h3 className="align-self-center">{item.precio}</h3>
            <p className="align-self-center">{item.stock} Unidades disponibles.</p>
            
            <div>
            <p className=" p-5 text-center">{item.descripcion}</p>
            </div>
            
            
            </div>
            
        </div>
        </div>
        
  
        </>
    );
 }

 export default ItemDetail;