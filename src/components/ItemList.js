import ItemCount from '../components/ItemCount';


const Productos = ({name,imagen,precio,descripcion}) => {
    
    return(
        <>
        <div className="container d-flex justify-content-center">
        <div className="card ">
        <div>
        <img className="card-img-top" src={imagen} alt="imagen" />    
        </div>
        <div>
        <ItemCount max={5} initial={1}/>
        </div>
        <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <strong className="card-subtitle">{precio}</strong>
        <p className="card-text">{descripcion}</p>
        </div>
       
        </div>
        </div>
        
        
         
         
        
        
        </>
    )
}

export default Productos;