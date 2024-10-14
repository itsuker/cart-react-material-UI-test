import { configureStore } from '@reduxjs/toolkit';
import {  filterProductsSlice, loadState,  loadStateFilters,  localStorageFilters,  localStorageProducts, productSlice } from "./index";


/*
 const preloadedState = {
    product: {
        cart: loadState()?.product.cart || [],
        filters: {
            category: "",
            minPrice: 0
        }
    } */


//const preloadedState = loadState();

/*
 const preloadedState = loadState();
 const preloadedStateFilters = loadStateFilters();*/
const preloadedState = {
     product : {
        cart: loadState()?.product.cart || []
     }/*,
     filters:loadStateFilters()?.filters || {}*/
}

 
 
export const store =  configureStore({
    reducer:{
        product: productSlice.reducer,
        filters:filterProductsSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(localStorageProducts/*, localStorageFilters*/),preloadedState
  
    
   
   
    
   

})

export type RootState = ReturnType<typeof store.getState>; //Exportamos el tipo RootState
export type AppDispatch = typeof store.dispatch; //Exportamos el tipo AppDispatch
