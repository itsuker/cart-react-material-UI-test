// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'
import {   Typography } from '@mui/material'
import { Products } from '../components/Products';
import { Header } from './Header'
import { ProductsLayout } from '../layout/ProductsLayout'
import { useFilter } from '../hooks/useFilter';
import { Footer } from './Footer';
import { Cart } from '../components/Cart';
import { CartProvider } from '../context/CartProvider';




export const ProductsPage = () => {
  const { filteredProducts} = useFilter();
  return (
    <>
      <Typography variant="h2" align="center">Products</Typography>
     
      <main  >
        <ProductsLayout>
          <CartProvider>
          <Cart/>
          <Header    />
          <Products products={filteredProducts} />
          {/*esto ayuda para ver lo rendirezimas de los elementos */}
          {/* <Footer  />*/ }
          </CartProvider>
          
        </ProductsLayout>
      </main>
    </>
  )
}
