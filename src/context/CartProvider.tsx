import React, { createContext, useState } from 'react'
import { Product } from '../interfaces/productos';
import { Cart, CartContextProps, CartProviderProps } from '../interfaces/CartProviderProps';

export const CartContext = createContext({} as CartContextProps);


export const CartProvider = ({ children }:CartProviderProps) => {
    //const [cart, setCart] = useState<>([]);
    const [cart, setCart] = useState<Cart[]>([]);

    const addTocart =   (product: Product) => {
        /*
        const newProduct = {product, quantity: 1};
        setCart([...cart, newProduct]);*/


        const productCart = cart.findIndex((item) => item.product.id === product.id);
        //esto si el producto ya esta en el carrito
        if( productCart  >= 0){
            const newCart = [...cart]; //esto es para que no se modifique el carrito original
            newCart[productCart].quantity += 1; //esto es para que se sume uno a la cantidad
            return setCart(newCart); //esto es para que se actualice el carrito
        }
        /*
        else {
            const newProduct =  {product, quantity: 1};
            setCart([...cart, newProduct]);
        }
        return cart;*/
        //esto si el producto no esta en el carrito
        setCart([...cart, {product,quantity:1}]);
    }

    const restToCart = (product:Product) => {
        const productCart = cart.findIndex((item) => item.product.id === product.id);
        if(productCart >= 0){
            const newCart = [...cart];
            newCart[productCart].quantity -= 1;
            if(newCart[productCart].quantity === 0){
                newCart.splice(productCart, 1);
            }
            return setCart(newCart);
        }
    }


    const removeCart = (product:Product) =>{
        const newCart = cart.filter((item) => item.product.id !== product.id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }


    /*
    const removeCart = () => {
        setCart([]);
    }*/

    /*
    const addToCart = (product:Product) => {
        setCart([...cart, product]);
    }*/


    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            addToCart: addTocart,
            restToCart:restToCart,
            removeCart:removeCart,
            clearCart:clearCart
        }}  >
            {children}
        </CartContext.Provider>
    )
}
