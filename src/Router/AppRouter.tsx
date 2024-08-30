import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {  ProductsPage } from '../pages/ProductsPage'



export const AppRouter = () => {
    

    return (
      
        <Routes>
            <Route path='/products' element={<ProductsPage/>} />
            
            <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
    )
}
