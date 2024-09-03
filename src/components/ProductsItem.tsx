import { AddShoppingCart } from '@mui/icons-material'
import { ButtonBase, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../interfaces/productos'



export const ProductsItem: React.FC<Product> = ({ id, title, thumbnail, description, price }) => {
  const hadleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('Button clicked');
  }
  return (
    <ListItem 
    key={id}
      sx={{
        marginY: 2,
        
      }}
    >
      <Card sx={{
        width: 'auto',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-center',
        flexWrap: 'wrap',
        margin: '10px',
        padding: '10px',
        backgroundColor: 'secondary.main',
      }}
      className='animate__animated animate__fadeIn animate__faster'
      >
        <CardActionArea sx={{flex:1}}>
          <CardMedia
            component="img"
            height="175"
            width="50"
            image={thumbnail}
            alt={title}
          />

          <CardContent sx={{flex:1}}>
            <Typography variant="h6" align='center'
              component="div" color="text.primary">
              {title}
            </Typography>


            <Typography variant="body1" color="text.primary" textAlign='justify' >
              {description}
            </Typography>
            <Typography variant="h6"
              color="text.primary"
              textTransform='uppercase' align='center'
              sx={{ fontWeight: 'bold' }}
            >
              ${price}
            </Typography>
          </CardContent>



        </CardActionArea>

        <ButtonBase
          component="div"
          sx={{
            display: 'block',
            width: '100%',
            borderRadius: '5px',
            backgroundColor: 'rgb(15,18,20,01)',

            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Cambia el color de fondo al hacer hover
            },
            '&:active': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)', // Cambia el color de fondo al hacer click
            },
            cursor: 'pointer', /// Cambia el cursor al pasar sobre el área
          }}
          

        >
          <CardActions onClick={(event) => hadleClick(event)} >
            <Stack display="flex"
              direction="row"
              justifyContent="center"
              alignItems='center'
              sx={{ width: '100%',
               }}
            >
              <IconButton color="primary" size="large" title='Add to cart"'  >
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
  )
}
