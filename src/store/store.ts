import { configureStore } from "@reduxjs/toolkit";
import { loadState, localStorageProducts, productSlice } from "./index";


//const preloadedState = loadState();
 const preloadedState = loadState();
 
export const store =  configureStore({
    reducer:{
        product: productSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(localStorageProducts),
    preloadedState
})

export type RootState = ReturnType<typeof store.getState>; //Exportamos el tipo RootState
export type AppDispatch = typeof store.dispatch; //Exportamos el tipo AppDispatch
