import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Filters } from '../../interfaces/FilterProps'

 const initialState: Filters = {
    category: "",
    minPrice: 0,
}



export const filterProductsSlice =  createSlice({
    name:'filterProducts',
    initialState,
    reducers:{
        onChangeCategory:(state, action:PayloadAction<string>) =>{
            state.category = action.payload;
        },

     }

})
export const { onChangeCategory} =filterProductsSlice.actions;
   




