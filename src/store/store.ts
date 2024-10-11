import { configureStore } from '@reduxjs/toolkit';
import { filterProductsSlice, loadState,  localStorageProducts, productSlice,loadStateFilters,localStorageFilters } from "./index";




//const preloadedState = loadState();
 const preloadedState = loadState();
 //const preloadedStateFilters = loadStateFilters();
 
 
export const store =  configureStore({
    reducer:{
        product: productSlice.reducer,
        //filters:filterProductsSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(localStorageProducts),
    preloadedState,
   
    
   

})

export type RootState = ReturnType<typeof store.getState>; //Exportamos el tipo RootState
export type AppDispatch = typeof store.dispatch; //Exportamos el tipo AppDispatch
