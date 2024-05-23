import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import { useDrawerContext } from "../../contexts";

type Props = {
    children?: React.ReactNode;
}

export const AppMenu = ({ children }:Props) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();


    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(25)} height='100%' display='flex' flexDirection='column'>
                    {/* Íconde do Usuário */}
                    <Box 
                        width='100%' 
                        height={theme.spacing(20)} 
                        display='flex' 
                        alignItems='center' 
                        justifyContent='center'
                    >
                        <Avatar 
                            sx={{width: theme.spacing(10), height: theme.spacing(10)}}
                            src="logo512.png"
                        />
                    </Box>

                    <Divider />
                    {/* Seleção das de páginas */}
                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton >
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Home'/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown? 0 : theme.spacing(25)}>
                {children}
            </Box>

        </>
    );
}

