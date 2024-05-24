import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom"
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";

export const AppRoutes = () => {

    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

    // Configurações de opções de Menu
    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Home',
                icon: 'home',
                path: '/home'
            },
            {
                label: 'Inventory',
                icon: 'inventory',
                path: '/inventory'
            }
        ]);
    }, []);
 
    return(
        // Componentes utilizados para direcionamento das páginas da aplicação
        <Routes>
            <Route path="/home" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />

            {/* Redireciona uma url diferente dos path's acima para a home-page*/}
            <Route path="*" element={<Navigate to="home" />} />
        </Routes>
    );
};