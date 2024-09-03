import React from "react"
import { Product, ProductosJSON } from '../interfaces/productos';
import { ProductsItem } from "./ProductsItem";
import { List } from "@mui/material";
import { useProducts } from "../styles/hooks/useProducts";
interface ProductsProps {
  products:ProductosJSON
}

export const Products:React.FC<ProductsProps> = ({products } ) => {
 const {products:productList} = products;
 const {List:Li} = useProducts();
  return (
    <>
      <List sx={Li}>
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
