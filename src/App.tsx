import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { AppMenu } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    // <ThemeProvider> -> aplica as especificações criadas na função LightTheme
    <AppThemeProvider>
      {/* <DrawerProvider> -> aplica o contexto de mudança da variante do menu lateral */}
      <DrawerProvider>
        <BrowserRouter>
          <AppMenu >
            <AppRoutes />
          </AppMenu>

          
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider> 
  );
};
