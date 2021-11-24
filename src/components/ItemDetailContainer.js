/* eslint-disable react-hooks/exhaustive-deps */
import ItemDetail from './ItemDetail';
import Promesa from './Products/promesa';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const { products} = require('./Products/data')


const ItemDetailContainer = () => {

    const[dato, setDato] = useState({});
    const { idItem  }= useParams();


    useEffect(() => {
        Promesa(2000, products.find(item => {
            if(idItem === undefined) return item;
            return item.id === parseInt(idItem)
        }))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    
    }, [idItem]);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;

