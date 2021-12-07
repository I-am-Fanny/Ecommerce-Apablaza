/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ItemDetail  from './ItemDetail';
import { firestorePromesa } from './Products/fireStore';



const ItemDetailContainer = () => {

    const [dato, setDato] = useState({});
    const { itemId  } = useParams();
    

    useEffect(() => {
       firestorePromesa(itemId)
        .then(result => setDato(result))
        .catch(err => console.log(err))
        
    
    }, []);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;

