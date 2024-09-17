import { AddShoppingCart, RemoveShoppingCart } from '@mui/icons-material'
import { ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../interfaces/productos'
import { useProductsItem } from '../styles'
import { useCart } from '../hooks/useCart'

  //{ id, title, thumbnail, description, price }

export const ProductsItem: React.FC<Product> = ( product ) => {
  const { id, title, thumbnail, description, price } = product;

  const { card, cardButtons, cardStack,
    cardPrice, cardTitle, cardDescription } = useProductsItem();
  const {cart , addToCart ,removeCart} = useCart();
 // console.log(cart);

    const cheProductExist = (product:Product) =>{ // si el producto esta en el carrito
        return cart?.some((item) => item.product.id === product.id); // si el producto esta en el carrito que regrese true o false
    }
   // console.log(cheProductExist(product));
    const isProductInCart = cheProductExist(product); 


    /*
  const hadleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Button clicked');
  }*/
  return (
    <ListItem
      key={id} sx={{ marginY: 2, }}   >
      <Card sx={card} className='animate__animated animate__fadeIn animate__faster' >
        <CardActionArea sx={{ flex: 1 }}>
          <CardMedia
            component="img"
            height="175"
            width="50"
            image={thumbnail}
            alt={title}
          />
          <CardContent sx={{ flex: 1 }}>

            <Typography variant="h6"  component="div" sx={ cardTitle}>
              {title}
            </Typography>
            <Typography variant="body1" sx={cardDescription} >
              {description}
            </Typography>
            <Typography variant="h6" sx={cardPrice}>
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>

        <ButtonBase
          component="div"
          style={{
           opacity:( isProductInCart) ? 0.8 : 1 ,
           boxShadow:( isProductInCart) ? '-1px 1px 0px 1px rgba(255, 255, 255, 0.5)' : 'none' ,
           
          }}
          sx={cardButtons}>
          <CardActions onClick={() =>  isProductInCart ? 
          removeCart(product) : addToCart(product)
           } >
            <Stack sx={cardStack}>
              <IconButton color="primary" size="large" title='Add to cart"' >
              
                {
                  isProductInCart ? <RemoveShoppingCart fontSize="large" style={{ color: 'white' }} /> : <AddShoppingCart fontSize="large" style={{
                    color: 'white',
                  }}
                  />
                }
              </IconButton>
            </Stack>
          </CardActions>
        </ButtonBase>
      </Card>
    </ListItem>
  )
}
