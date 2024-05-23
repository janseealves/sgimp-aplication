import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";


interface IThemeContextData {
  themeName: "light" | "dark"; // definindo duas opções possíveis: "'light' OU 'dark'"
  toggleTheme: () => void; //função para troca de tema
  
}

type Props = {
    children? : React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {

    return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
    const [themeName, setThemeName] = useState<"light" | "dark">('light')

    const toggleTheme = useCallback(()=> {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        return (themeName === 'light') ? LightTheme : DarkTheme;
    }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
        <ThemeProvider theme={theme}>
            <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                {children}
            </Box>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};
