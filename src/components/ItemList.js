import { CircularProgress } from '@mui/material';
import  Item from './Item';

const ItemList = ({items}) =>{
    return(
        
       <>
       {
           items.length > 0
           ? items.map(item => <Item id={item.id} title={item.name} price={item.precio} stock={item.stock} pictureUrl={item.imagen[0]}/>)
           : <CircularProgress color="secondary" sx={{display:'flex',alignItems:'center'}}/>
       }
       </>
    );
}

export default ItemList;