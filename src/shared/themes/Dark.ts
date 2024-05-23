import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: green[700],
            dark: green[800],
            light: green[500],
            contrastText: '#fff'
        },
        background: {
            paper: '#303134',
            default: '#202124'
        }
    } 
})