import {SxProps,Theme} from '@mui/material'

let cartPaper : SxProps<Theme> = {
   width: {
    xs:250,
    sm:300,
    md:350,
    lg:325,
   },
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  let cartIconButton : SxProps<Theme> = {
    
    color: 'white',
    position: 'fixed',
    top: { xs: 'calc(50% - 25px)', sm: 'calc(50% - 25px)', md: 50, lg: 50 },
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
  }

  let card:SxProps<Theme> = {
    width: 'auto',
   // height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-center',
    flexWrap: 'wrap',
   // margin: '12px',
    padding: '10px',
   // backgroundColor: 'primary.main',
    
}

let cardButtons:SxProps<Theme> = {
    display:'block',
    width: '100%',
    borderRadius: '5px',
    //backgroundColor: 'rgb(15,18,20,01)',
    '&:hover': {
        backgroundColor: 'rgb(255, 255, 255, 0.1)',
    },
    '&:active': {
        backgroundColor: 'rgb(15,18,20,0.7)',
    },
    cursor: 'pointer',

}
let cardStack:SxProps<Theme> = {  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',  
}
 
export const useCart = () => {
  return {
    cartPaper,
    cartIconButton,
    card,
    cardButtons,
    cardStack
  }
}
