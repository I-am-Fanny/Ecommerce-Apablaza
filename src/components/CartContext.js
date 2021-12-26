import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ( { children }) => {
    const [cartList, setCartList] = useState ([]);

    const addToCart = (item, quantityToAdd) => {
        let found = cartList.find(product => product.itemId === item.id);
        if( found === undefined) {
            setCartList([
                ...cartList,
                {
                    itemId: item.id,
                    imgItem: item.imagen[0],
                    nameItem: item.name,
                    precioItem: item.precio,
                    qtyItem: quantityToAdd
                }
            ])
        }else{
            found.qtyItem += quantityToAdd;
            setCartList([
                  ...cartList
            ]);
        }
    }

    const removeList = () =>{
        setCartList([]);
    }

    const deleteItem = (id) => {
        // eslint-disable-next-line eqeqeq
        let result = cartList.filter(item => item.itemId != id);
        setCartList(result);
    }

    const calculoTotalItem = (itemId) => {
        let index = cartList.map(item => item.itemId).indexOf(itemId);
        return cartList[index].precioItem * cartList[index].qtyItem;
    }

    const calculoSubTotal= () => {
        let totalItem = cartList.map(item => calculoTotalItem(item.itemId));
        return totalItem.reduce((valorPrevio, valorActual) => valorPrevio + valorActual);
    }

    const calculoImpuestos = () => {
        return calculoSubTotal() * 0.21;
    }

    const totalCompra = () => {
        return calculoSubTotal();
    }
     const calculoQuantity= () => {
         let quantity = cartList.map(item => item.qtyItem);
         return quantity.reduce(((valorPrevio, valorActual) => valorPrevio + valorActual), 0)
     }


    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            removeList,
             deleteItem,
             calculoTotalItem,
             calculoSubTotal,
             calculoImpuestos,
             totalCompra,
             calculoQuantity
             }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;