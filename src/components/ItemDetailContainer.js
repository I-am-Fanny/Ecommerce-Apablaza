import ItemDetail from './ItemDetail';
import Promesa from './Products/Promesa';
import products from './Products/data';
import { useEffect, useState } from 'react';


const ItemDetailContainer = () => {

    const[dato, setDato] = useState({});

    useEffect(() => {
        Promesa(2000, products[1])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;

