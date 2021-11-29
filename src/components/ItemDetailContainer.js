/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Promesa from './Products/promesa';
import ItemDetail  from './ItemDetail';
const { products } = require('./Products/data')


const ItemDetailContainer = () => {

    const[dato, setDato] = useState({});
    const { itemId  } = useParams();
    

    useEffect(() => {
        Promesa(2000, products.find(item => item.id === parseInt( itemId)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
        
    
    }, [dato, itemId]);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;

