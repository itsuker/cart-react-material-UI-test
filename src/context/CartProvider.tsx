import React, { createContext } from 'react'
import { CartContextProps, CartProviderProps } from '../interfaces/CartProviderProps';
import { Provider } from 'react-redux';

import { store } from '../store/store';
import { useActionsCart } from '../hooks/useActionsCart';
 
export const CartContext = createContext({} as CartContextProps);


export const CartProvider = ({ children }:CartProviderProps) => {
    return (
        <Provider store={store}>
            <CartProviderContent>
                {children}
            </CartProviderContent>
        </Provider>
    )
};
const CartProviderContent:React.FC <{children:React.ReactNode}> = ({children}) => {
    const {cart, addToCart,restToCart,removeCart,clearCart } = useActionsCart();
    return (
        <CartContext.Provider value={{
            cart,
           // setCart,
            addToCart,
           restToCart,
           removeCart,
           clearCart
        }}  >
            {children}
        </CartContext.Provider>
    )
};
