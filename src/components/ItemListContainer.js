import ItemList from './ItemList';
import Promesa from './Products/promesa';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products} = require('./Products/data')

const ItemListContainer = () => {
  const[dato, setDatos] = useState([]);
  const { idCat } = useParams();



  useEffect(() => {
    Promesa(2000, products.filter(item =>{
      if(idCat === undefined) return item;
      return item.categoryId === parseInt(idCat)
    }))
    .then(result => setDatos(result))
    .catch(err=> console.log(err))
  },[dato, idCat]);


  return(
   <>
    <ItemList items={dato}/>
    
    </>
  );
  }

  export default ItemListContainer;
