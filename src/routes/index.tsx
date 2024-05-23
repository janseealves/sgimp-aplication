import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {

    const { toggleTheme } = useAppThemeContext();

    return(
        // Componentes utilizados para direcionamento das páginas da aplicação
        <Routes>
            <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Toggle Theme</Button>} />

            {/* Redireciona uma url diferente dos path's acima para a home-page*/}
            <Route path="*" element={<Navigate to="home" />} />
        </Routes>
    );
};