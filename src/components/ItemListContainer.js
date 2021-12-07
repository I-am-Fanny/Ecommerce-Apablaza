import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { firestore } from './Products/fireStore';

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCat } = useParams();



  useEffect(() => {
    firestore(idCat)
    .then((result) => setDatos(result))
    .catch(err => console.log(err))
  },[ datos, idCat]);


   useEffect(() => {
     return (() => {
       setDatos([]);
     })
   }, [])

  return(
   <>
    <ItemList items={datos}/>
    
    </>
  );
  }

  export default ItemListContainer;
