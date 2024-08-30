import { AddShoppingCart } from "@mui/icons-material"
import {   Drawer, IconButton, Paper } from "@mui/material"
import { useState } from "react"


export const Cart = () => {
    const [open, setopen] = useState(false)
    const towgglerDrawer = (isOpen:boolean) => (  ) => {

     setTimeout(() =>{
        setopen(isOpen)
     }, 700)

       
        
    }
    


    const drawerList =  (
       
        <Paper
     
     
        sx={{ width: {
            xs:250,
            sm:300,
            md:350,
            lg:350,

        },
        height: '100vh',

            
        }}
        role="presentation"
        onMouseLeave={towgglerDrawer(false)}
        >
            <h1>Cart</h1>
            <ul>
                <li>Product 1</li>
                <li>Product 2</li>
                <li>Product 3</li>
            </ul>
        </Paper>

    )
  return (
    <div>
      <IconButton color="primary" size="large" title='Add to cart"'  onMouseEnter={towgglerDrawer(true )} 
      sx={{
        color: 'white',
        position: 'fixed',
        top: { xs: 15, sm: 15, md: 50, lg: 50 },
        right: { xs: 15, sm: 15, md: 50, lg: 50 },
        zIndex: 1000,
        borderRadius: '25px',
            backgroundColor: 'rgb(15,18,20,01)',

            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Cambia el color de fondo al hacer hover
            },
            '&:active': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)', // Cambia el color de fondo al hacer click
            }
      }}
      >
        <AddShoppingCart fontSize="large" 


        />
      </IconButton>
        <Drawer anchor="right" open={open} onClose={towgglerDrawer(false)} 
        >
            {drawerList}
        </Drawer>
    </div>
  )
}
