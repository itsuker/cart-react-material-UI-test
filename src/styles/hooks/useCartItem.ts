
import {SxProps,Theme} from '@mui/material'
let card:SxProps<Theme> ={
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-center',
    flexWrap: 'wrap',
    margin: '10px',
    padding: '10px',
    backgroundColor: 'secondary.main',
  } 

  let cardButtons: SxProps<Theme> = {
    flex: 1,
    borderRadius: '2px',
    backgroundColor: 'rgb(15,18,20,01)',

    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Cambia el color de fondo al hacer hover
    },
    '&:active': {
        backgroundColor: 'rgba(0, 0, 0, 0.12)', // Cambia el color de fondo al hacer click
    }

  };

 let cardStack: SxProps<Theme> = {
   display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
 }





export const useCartItem = () => {
  return {
    card,
    cardButtons,
    cardStack
  }
}
