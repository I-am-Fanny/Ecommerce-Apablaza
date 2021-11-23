import ItemDetail from './ItemDetail';
import Promesa from './Products/promesa';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Products from './Products/data';


const ItemDetailContainer = () => {

    const[dato, setDato] = useState({});
    const { idItem } = useParams();


    useEffect(() => {
        
        Promesa(2000, Products.find(item => item.id === parseInt(idItem)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={dato}/>
    );
}

export default ItemDetailContainer;

