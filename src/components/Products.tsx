import React from "react"
import { Product, ProductosJSON } from '../interfaces/productos';
import { ProductsItem } from "./ProductsItem";
import { List } from "@mui/material";
interface ProductsProps {
  products:ProductosJSON
}

export const Products:React.FC<ProductsProps> = ({products } ) => {
 const {products:productList} = products;


  return (
    <>
    

    
      <List sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)', // Pantallas pequeñas
          sm: 'repeat(2, 1fr)', // Pantallas medianas
          md: 'repeat(2, 1fr)', // Pantallas grandes
          lg: 'repeat(3, 1fr)', // Pantallas grandes
        },
        marginX:-3,
        
      }}>
        {
          productList.slice(0,6).map((product:Product ,index) => (
            <ProductsItem key={product.id} {...product} 
          
            />
          ))
        }
      </List>
    </>
  )
}
