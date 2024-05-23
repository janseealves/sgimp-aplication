import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: green[700],
            dark: green[800],
            light: green[500],
            contrastText: '#fff'
        },
        background: {
            paper: '#fff',
            default: '#f7f6f3'
        }
    } 
});