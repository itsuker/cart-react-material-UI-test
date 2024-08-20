import { createTheme } from "@mui/material";
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
        text:{
            primary: "#ffffff",
            secondary: "#000000"
        }
    } 
    });