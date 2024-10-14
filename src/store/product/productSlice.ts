import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../interfaces/productos';
//import { Filters } from '../../interfaces/FilterProps';

export interface CartStore {
    product: Product;
    quantity: number;

}



export const productSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [] as CartStore[],
        /*
        filters: {
            category: "",
            minPrice: 0
        } as Filters*/
    },
    reducers:{

        onAddToCart:(state, action:PayloadAction<Product> ) =>{
            const product = action.payload;
            const productCart = state.cart.findIndex((item) => item.product.id === product.id)
            if( productCart  >= 0){
                /*
                const newCart = [...cart]; //esto es para que no se modifique el carrito original
                newCart[productCart].quantity += 1; //esto es para que se sume uno a la cantidad
                return setCart(newCart); //esto es para que se actualice el carrito*/
                const newCart = [...state.cart]; //esto es para que no se modifique el carrito original
                newCart[productCart].quantity += 1; //esto es para que se sume uno a la cantidad
               // state.cart = newCart;
              // return {...state, cart: newCart};
            }else{
                state.cart.push({product, quantity: 1});
            }
            

        },
        onRestToCart:(state, action:PayloadAction<Product>) =>{
            const product = action.payload;
            const productCart = state.cart.findIndex((item) => item.product.id === product.id);
            if(productCart >= 0){
               if(state.cart[productCart].quantity > 1){
                   state.cart[productCart].quantity -= 1;
               }
               else{
                state.cart.splice(productCart, 1);
               }
              //  return {...state, cart: newCart};
            }

        },
        onRemoveCart:(state,action:PayloadAction<Product>) =>{
            const  newCart = state.cart.filter((item) => item.product.id !== action.payload.id);
            return {...state, cart: newCart};
        },
        onClearCart:(state) =>{
            return {...state, cart: []};
        },
       /* onChangeCategory:(state, action:PayloadAction<string>) =>{
            state.filters.category = action.payload;
        },*/
      
        
    }

    
});
export const { 
    onAddToCart,
    onRestToCart,
    onRemoveCart,
    onClearCart

 } = productSlice.actions;