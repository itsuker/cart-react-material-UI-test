import React, { useEffect, useRef, useState } from "react"
import {  RemoveShoppingCart, ShoppingCart } from "@mui/icons-material"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Badge,  ButtonBase, Card, Divider, Drawer,  IconButton, List, Paper, Stack, useTheme } from "@mui/material"
import { CartItem } from "./CartItem"
import { useCart as useCartStyles } from "../styles"
import { useCart } from "../hooks/useCart"
import classNames from "classnames"
import { TransitionGroup, CSSTransition } from "react-transition-group"


//import { Product } from "../interfaces/productos"


export const Cart = () => {
  const [open, setopen] = useState(false);
  const [animated, setanimated] = useState(false);
  const { cartPaper, cartIconButton, card, cardButtons, cardStack } = useCartStyles();
  const { cart, addToCart, restToCart, clearCart } = useCart();
  const theme = useTheme();
  const towgglerDrawer = (isOpen: boolean) => () => {

    setTimeout(() => {
      setopen(isOpen)
    }, 500)
  }

  const cartExist = () => {
    return cart!.length > 0;
  }
  const isCartExist = cartExist();

  useEffect(() => {
    if (cart!.length > 0) {
      setanimated(true);
      const timer = setTimeout(() => setanimated(false), 1000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart?.length]);

  const refs = useRef(new Map());

  const drawerList = (

    <Paper
      sx={{
        ...cartPaper,
        maxHeight: '90vh',
        overflowY: 'auto',
        padding:'10px',
      }}
      role="presentation"
      onMouseLeave={towgglerDrawer(false)}   >
      <List>
        <TransitionGroup>
          {
            cart?.map((item) => {
              if(!refs.current.has(item.product.id)){ // si no existe la key 
                refs.current.set(item.product.id, React.createRef());//creamos la key con su referencia 
              }
              const ref = refs.current.get(item.product.id); // obtenemos la referencia de la key


           
              return (
                <CSSTransition key={item.product.id} timeout={1000} nodeRef={ref}
                 classNames="animate__animated animate__backOutUp ">
                 <div ref={ref}>
                  <CartItem

                    key={item.product.id} item={item.product} quantity={item.quantity}
                    addTocart={() => addToCart(item.product)}
                    restToCart={() => restToCart(item.product)}
                    clearCart={() => clearCart()}
                    refButtonRemove={ref}
                  />
                  </div>
                </CSSTransition>

              )

            })
          }
        </TransitionGroup>
        {/**<CartItem /> */}
      </List>
      {/*
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
    */ }
      <Card sx={card} style={{
        margin:   (!isCartExist) ? 'auto 0' :  '-5px', //si no hay carrito lo centramos
       // position: (!isCartExist) ? 'relative' : 'absolute',
        backgroundColor: (!isCartExist) ? //si no hay carrito lo ponemos transparente
         theme.palette.secondary.main : 'rgb(15,18,20,01)',
         flexShrink: 0, //para que no se achique o se corten los elementos
      }
      } >
        <Stack sx={cardStack}>
          <ButtonBase color="primary" title="clear cart"
            disabled={!isCartExist}
            onClick={clearCart}
            sx={cardButtons} >
            <RemoveShoppingCart fontSize="large"
            
            style={{
              color: 'white'
            }} />
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
            'animate__animated animate__wobble': animated
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
