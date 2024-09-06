import { SxProps, Theme,  } from '@mui/material';

let card:SxProps<Theme> = {
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

let cardButtons:SxProps<Theme> = {
    display:'block',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: 'rgb(15,18,20,01)',
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
let cardPrice:SxProps<Theme> = {
    textAlign: 'center',
    color: 'text.primary',
    textTransform: 'uppercasse',
    fontWeight: 'bold',
}

let cardTitle:SxProps<Theme> = {
    textAlign:'center',
    color:'text.primary',

}

let cardDescription:SxProps<Theme> = {
    textAlign:'justify',
    color:'text.primary',
}
 
export const useProductsItem = ( ) => {
  return {
    card,
    cardButtons,
    cardStack,
    cardPrice,
    cardTitle,
    cardDescription,
  }
}
