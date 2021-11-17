import ItemList from './ItemList';

import Promesa from './Products/Promesa';
import products from './Products/data';
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
  const[datos, setDatos] = useState([]);

  useEffect(()=>{
    Promesa(2000, products)
    .then(result => setDatos(result))
    .catch(err=> console.log(err))
  }, []);


  return(
   <>
    <ItemList items={datos}/>
    
    </>
  );
  }

  export default ItemListContainer;
