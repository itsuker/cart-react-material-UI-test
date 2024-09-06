import {SxProps,Theme} from '@mui/material'
let stack: SxProps<Theme> = {
    display: 'flex',
    flexDirection: {
        xs: 'column',
        sm: 'row'
    },
    justifyContent:{
        xs: 'center',
        sm: 'space-between'
    },
    alignItems: {
        xs: 'center',
        sm: 'center'
    },
    width: '100%'
}

let slider: SxProps<Theme> = {
    backgroundColor: 'secondary.main',
    color: 'white',
}





export const useFilterProducts = () => {
  return {
    stack,
    slider

  }
}
