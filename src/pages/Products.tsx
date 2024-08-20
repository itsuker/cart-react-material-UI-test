// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box, Button, ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, IconButton, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import './products.css'
//import { Card, Typography } from '@mui/material'
import { Product, ProductosJSON } from '../interfaces/productos'
//import { AddToCartIcon } from '../components/Icons'
import { AddShoppingCart } from '@mui/icons-material'

export const Products = ({ products }: ProductosJSON) => {
  //console.log(typeof products);
  const hadleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Button clicked');
  }


  return (
    <>
      <Typography variant="h2" align="center">Products</Typography>


      <main  >{/**className='products' */}
        {/**
       * <ul>
        {
          products.map((product: Product) =>(
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title}/>
              <div>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              </div>
              
            </li>
          ))
        }
        
      </ul>
       * 
       *   <Card sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        <CardActionArea>
         


        </CardActionArea>
        </Card>
       * 
       */}


        {/**
     * <Typography variant="h1" align="center">Products</Typography>
    <main  className='products'>
      <ul>
        {
          products.map((product: Product) =>(
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
              
            </li>
          ))
        }
        
      </ul>

    </main>
     * 
     */}
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



          }}


          >
            {
              products.map((product: Product) => (
                <ListItem key={product.id}>
                  <Card sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-center',
                    flexWrap: 'wrap',
                    margin: '10px',
                    padding: '10px',
                    backgroundColor: 'secondary.main',
                  }} >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100"
                        width="70"
                        image={product.thumbnail}
                        alt={product.title}
                      />

                      <CardContent>
                        <Typography variant="h5" align='center'
                          component="div" color="text.primary">
                          {product.title}
                        </Typography>


                        <Typography variant="body2" color="text.primary" textAlign='justify' >
                          {product.description}
                        </Typography>
                        <Typography variant="h6"
                          color="text.primary"
                          textTransform='uppercase' align='center'
                          sx={{ fontWeight: 'bold' }}
                        >
                          ${product.price}
                        </Typography>
                      </CardContent>



                    </CardActionArea>

                    <ButtonBase
                      component="div"
                      sx={{
                        display: 'block',
                        width: '100%',
                        borderRadius: '5px',
                        backgroundColor:'rgb(15,18,20,01)',
                       
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Cambia el color de fondo al hacer hover
                        },
                        '&:active': {
                          backgroundColor: 'rgba(0, 0, 0, 0.12)', // Cambia el color de fondo al hacer click
                        },
                        cursor: 'pointer', // Cambia el cursor al pasar sobre el área
                      }}

                    >
                      <CardActions onClick={(event) => hadleClick(event)} >
                        <Stack display="flex"
                          direction="row"
                          justifyContent="center"
                          alignItems='center'
                          sx={{ width: '100%' }}
                        >
                          <IconButton color="primary" size="large"  >
                            <AddShoppingCart fontSize="large" style={{
                              color: 'white',
                            }}

                            />
                          </IconButton>
                        </Stack>

                      </CardActions>
                    </ButtonBase>
                  </Card>
                </ListItem>
              ))
            }
          </List>

        </Grid>





      </main>





    </>
  )
}
