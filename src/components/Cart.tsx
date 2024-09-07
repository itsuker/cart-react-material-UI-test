import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material"
import { Box, ButtonBase, Card, Divider, Drawer, IconButton, List, Paper, Stack } from "@mui/material"
import { useState } from "react"
import { CartItem } from "./CartItem"
import { useCart as useCartStyles } from "../styles"
import { useCart } from "../hooks/useCart"
import { Product } from "../interfaces/productos"


export const Cart = () => {
  const [open, setopen] = useState(false)
  const { cartPaper, cartIconButton } = useCartStyles();
  const { cart , addToCart , restToCart ,clearCart } = useCart();
  
  const towgglerDrawer = (isOpen: boolean) => () => {

    setTimeout(() => {
      setopen(isOpen)
    }, 700)
  }
/*
  const cartExist = () =>{
    if(!cart){
      return false;
    }else{
      return true;
    }
  }
  const isCartExist = cartExist();*/

  
 

  //const isProductInToCart = cheCkingProduct;

  const drawerList = (

    <Paper
      sx={cartPaper}
      role="presentation"
      onMouseLeave={towgglerDrawer(false)}   >
      <List>
        {
          cart?.map((item) => (
            <CartItem
            
            key={item.product.id} item={item.product} quantity={item.quantity}
             addTocart = { () => addToCart(item.product) }
              restToCart = { () => restToCart(item.product) }
              clearCart = { () => clearCart()}
            />

          ))
        }
        {/**<CartItem /> */}
      </List>
     {
      cart!.length > 0 &&(
        <Stack>
          <Divider 
       
       sx={{
         borderColor: 'white',
         borderWidth: '1px',
         borderStyle: 'solid',
         width: '80%',
         
       }}
       
       >
        

       </Divider>
       <Card>
       <ButtonBase color="primary"    title="clear cart" onClick={  clearCart} >
            <RemoveShoppingCart  fontSize="small" style={{
              color: 'white'
            }}   />
          </ButtonBase>
     </Card>
        </Stack>
        
        
        
      )
     }
     
     
    
      
    </Paper>
  )
  return (
    <div>
      <IconButton color="primary"
        size="large" title="Add to cart"
        onMouseEnter={towgglerDrawer(true)}
        sx={cartIconButton}>
        <AddShoppingCart fontSize="large" />

      </IconButton>
      <Drawer anchor="right" open={open} onClose={towgglerDrawer(false)}

        className="animate__animated animate__fadeInTopRight  animate__medium"
      >
        {drawerList}
      </Drawer>
    </div>
  )
}
