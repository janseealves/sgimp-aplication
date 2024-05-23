import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRoutes = () => {

    return(
        // Componentes utilizados para direcionamento das páginas da aplicação
        <Routes>
            <Route path="/home" element={<Button variant="contained" color="primary">Home</Button>} />

            {/* Redireciona uma url diferente dos path's acima para a home-page*/}
            <Route path="*" element={<Navigate to="home" />} />
        </Routes>
    );
};