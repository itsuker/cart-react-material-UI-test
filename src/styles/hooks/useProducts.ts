import {SxProps,Theme} from '@mui/material'
let List: SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: {
        xs: 'repeat(1, 1fr)', // Pantallas pequeñas
        sm: 'repeat(2, 1fr)', // Pantallas medianas
        md: 'repeat(2, 1fr)', // Pantallas grandes
        lg: 'repeat(3, 1fr)', // Pantallas grandes
    },
    marginX:-3,
    
    };


export const useProducts = () => {
  return {
    List,

  }
}
