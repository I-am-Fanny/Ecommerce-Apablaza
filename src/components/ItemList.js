import Item from './Item';

const ItemList = ({items}) =>{
    return(
        
       <>
       {
           items.length > 0
           ? items.map(item => <Item key={item.id} title={item.name} price={item.precio} stock={item.stock} pictureUrl={item.imagen}/>)
           : <p>Loading </p>
       }
       </>
    );
}

export default ItemList;