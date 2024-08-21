import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Products } from '../pages/Products'
import products   from '../mocks/products.json'


export const AppRouter = () => {
    

    return (
        //<Route path='/products' element={<Products products={products}  total={0} skip={0} limit={10} />} />
        <Routes>
            <Route path='/products' element={<Products {...products} />} />
            
            <Route path='/*' element={<Navigate to='/products' />} />
        </Routes>
    )
}
