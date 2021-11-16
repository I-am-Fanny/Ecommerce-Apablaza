import Item from "./Item";
import products from "./Products/data"


 const ItemList = (time, task) => {
      return new Promise((resolve, reject)=>{
          if(Item.length>0){
             setTimeout(()=>{
                 resolve(task)
             },time);
          }else{
              reject("No pueden cargarse los productos")
          }
      });
    
 }

 ItemList(0,Item)
 .then(() => ItemList(2000, 
    Item.map((<Item name={products.name} imagen={products.imagen} precio={products.precio} descripcion={products.descripcion}/>))))
.catch((err)=>alert(err))
.finally(()=>console.log("Finalizado"));


 export default ItemList;