import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AppMenu } from "./shared/components";

export const App = () => {
  return (
    // <ThemeProvider> -> aplica as especificações criadas na função LightTheme
    <AppThemeProvider>
      <BrowserRouter>
        <AppMenu>
          <AppRoutes />
        </AppMenu>

        
      </BrowserRouter>
    </AppThemeProvider> 
  );
};
