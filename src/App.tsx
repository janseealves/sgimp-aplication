import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    // <ThemeProvider> -> aplica as especificações criadas na função LightTheme
    <ThemeProvider theme={LightTheme}> 
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
