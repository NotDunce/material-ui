import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ResponsiveAppBar from './components/Nav';
import Home from './components/Home';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import BottomNavBar from './components/Nav';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const App = () => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
            },
        }),
        [prefersDarkMode],
    );
    return(
        <div>
            <ThemeProvider theme={theme}>
            <BottomNavBar/>
            </ThemeProvider>
            
            

            {/* <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Productivity manager
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Learn to manage your busy life
                        </Typography>
                    </Container>
                </div>
            </main> */}
            
        </div>
    );
}

export default App;