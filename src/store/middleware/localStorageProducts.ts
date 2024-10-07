import { Middleware}  from '@reduxjs/toolkit';




export const localStorageProducts:Middleware  = store => next => action =>{
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('cart', JSON.stringify(state.product.cart));
    return result;
}
