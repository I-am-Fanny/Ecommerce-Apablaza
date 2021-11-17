import ItemCount from "./ItemCount";


 const Item = ({title, stock, price, pictureUrl }) => {
     return(
         <>
         <div className="container">
         <div className="card-body">
             <div className="card">
              <h2 className="card-title">{title}</h2>
              <img className="card-img" src={pictureUrl} alt="imagen producto"/>
              <strong className="card-text">{price}</strong>
                 <h4 className="card-text">{stock} Unidades</h4>
                 <ItemCount/>
             </div>
             
         </div>
         </div>
         </>
     );
 }

 export default Item;