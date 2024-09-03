import { createTheme, MenuItem } from '@mui/material';
import { red } from "@mui/material/colors";

export const blackTheme = createTheme({
    palette: {
        primary: {
            main: "#0F1214"
        },
        secondary: {
            main: "#1E1E1E"
        },
        error: {
            main: red.A400
        },
        background: {
            // default: "#212121" 
            default: "#0F1214"
        },
        text: {
            primary: "#ffffff",
            secondary: "#000000"
        },


    },

    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&.Mui-focused': {
                        color: 'white',
                    },
                    '&.MuiInputLabel-shrink': {
                        color: 'white',
                    },
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: 'white',
                },
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'white',
                        
                    },
                    backgroundColor: 'black',
                },
            }
        },

        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: 'white',
                    backgroundColor:'black',
                },
                root: {
                    color: 'white',
                    backgroundColor: 'black',
                    
                },
            },
        },


        MuiMenuItem: {
            styleOverrides: {
                root: ({ theme }) => (
                    {



                        color: 'white',
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        },
                        '&.Mui-selected': {
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            fontWeight: 'bold',

                        },
                        '&.Mui-selected:hover': {
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                        },
                        '&:first-of-type': {
                            backgroundColor: theme.palette.primary.main,

                        },

                    }
                )




            }
        },
        MuiPaper:{
            styleOverrides:{
                root:({ theme} ) =>({
                    backgroundColor:theme.palette.primary.main,
                  
                })
            }
        },
        
     




    }

});