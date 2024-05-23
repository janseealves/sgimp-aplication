import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"

type Props = {
    children?: React.ReactNode;
}

export const AppMenu = ({ children }:Props) => {

    const theme = useTheme();

    return (
        <>
            <Drawer variant="permanent">
                <Box width={theme.spacing(25)} height='100%' display='flex' flexDirection='column'>
                    <Box 
                        width='100%' 
                        height={theme.spacing(20)} 
                        display='flex' 
                        alignItems='center' 
                        justifyContent='center'
                    >
                        {/* Íconde do Usuário */}
                        <Avatar 
                            sx={{width: theme.spacing(10), height: theme.spacing(10)}}
                            src="logo512.png"
                        />
                    </Box>

                    <Divider />
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

            <Box height='100vh' marginLeft={theme.spacing(25)}>
                {children}
            </Box>

        </>
    );
}

