import {  RemoveShoppingCart, ShoppingCart } from "@mui/icons-material"
import { Badge,  ButtonBase, Card, Divider, Drawer,  IconButton, List, Paper, Stack, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { CartItem } from "./CartItem"
import { useCart as useCartStyles } from "../styles"
import { useCart } from "../hooks/useCart"
import classNames from "classnames"

//import { Product } from "../interfaces/productos"


export const Cart = () => {
  const [open, setopen] = useState(false);
  const [animated, setanimated] = useState(false);
  const { cartPaper, cartIconButton  , card ,cardButtons ,cardStack } = useCartStyles();
  const { cart , addToCart , restToCart ,clearCart } = useCart();
  const theme = useTheme();
  const towgglerDrawer = (isOpen: boolean) => () => {

    setTimeout(() => {
      setopen(isOpen)
    }, 500)
  }

  const cartExist = () =>{
       return cart!.length > 0;
  }
  const isCartExist = cartExist();

  useEffect(() =>{
    if(cart!.length > 0){
      setanimated(true);
      const timer = setTimeout(() => setanimated(false), 1000);
      return () => clearTimeout(timer);
    }
  },[cart?.length]);



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

       
          <Divider 
       sx={{
         borderColor: 'white',
         borderWidth: '1px',
         borderStyle: 'solid',
         width: '80%',
         
       }}
       >
       </Divider>
      
      
     
        
        
        
      )
     }
      <Card sx={card} style={ {
        margin:  (!isCartExist) ? 'auto 0' : '10px',
        backgroundColor:  (!isCartExist) ?  
        theme.palette.secondary.main : 'rgb(15,18,20,01)'
      }
      } >
        <Stack sx={cardStack}>
       <ButtonBase color="primary"    title="clear cart"
       disabled={!isCartExist}
        onClick={  clearCart} 
        sx={cardButtons} >
            <RemoveShoppingCart  fontSize="large" style={{
              color: 'white'
            }}   />
          </ButtonBase>
          </Stack>
     </Card>
     
    
      
    </Paper>
  )
  return (
    <div>
      <IconButton color="primary"
        size="large" title="Add to cart"
        onMouseEnter={towgglerDrawer(true)}
        sx={cartIconButton}>
          <Badge badgeContent={cart?.length} color="error"
          //"animate__animated animate__bounce animate__infinite animate__slow
          className={classNames({
            'animate__animated animate__wobble' : animated
          })}
          >
        <ShoppingCart fontSize="large" />
        </Badge>

      </IconButton>
      <Drawer anchor="right" open={open} onClose={towgglerDrawer(false)}

        className="animate__animated animate__fadeInTopRight  animate__medium"
      >
        {drawerList}
      </Drawer>
    </div>
  )
}
