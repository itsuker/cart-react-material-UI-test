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
  }

export const useCart = () => {
  return {
    cartPaper,
    cartIconButton

  }
}
