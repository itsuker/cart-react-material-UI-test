// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import './products.css'
//import { Card, Typography } from '@mui/material'
import { Product, ProductosJSON } from '../interfaces/productos'
//import { AddToCartIcon } from '../components/Icons'

import { ProductsItem } from '../components/ProductsItem'
 
 const initialValue = {
  category: 'laptops',
  minPrice: 0,
}


export const Products = ({ products }: ProductosJSON) => {
  //console.log(typeof products);

  const [filters, setfilters] = useState(initialValue);

  //ESO PARA JUNIR
  const filterProducts = (products: ProductosJSON) => {
    return products.products.filter((product: Product) => {
      return (
        product.price >= filters.minPrice && // Precio mayor o igual al mínimo seleccionado
        (
          filters.category === 'all' || // Si la categoría seleccionada es 'all' entonces se muestran todos los productos
          product.category === filters.category // Si no, se muestran los productos de la categoría seleccionada
        )
      )

    })
  }
  



  



  return (
    <>
    
      <Typography variant="h2" align="center">Products</Typography>
      

      <main  >{/**className='products' */}
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"

        >
          <List sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)', // Pantallas pequeñas
              sm: 'repeat(2, 1fr)', // Pantallas medianas
              md: 'repeat(3, 1fr)', // Pantallas grandes
            },



          }}>
           {
              products.slice(0,6).map((product:Product ,index) => (
               <ProductsItem key={index} {...product} 
           
               />
               
                
            
              ))
            }


       
            
          </List>

        </Grid>





      </main>





    </>
  )
}
