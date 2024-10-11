import { Middleware } from '@reduxjs/toolkit'

export const localStorageFilters:Middleware = store => next => action  =>{
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('filters',JSON.stringify(state.filters));
    return result;

}
