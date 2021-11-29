import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ( { children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantityToAdd) => {
        let found = cartList.find(product => product.itemId === item.id);
        if( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.imagen[0],
                    nameItem: item.name,
                    precioItem: item.precio,
                    qtyItem: quantityToAdd
                }
            ])
        }else{
            found.qtyItem += quantityToAdd;
        }
    }

    const removeList = () =>{
        setCartList([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.itemId !== id);
        setCartList(result);
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;