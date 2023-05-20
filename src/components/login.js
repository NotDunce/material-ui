import React from 'react';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import BottomNavBar from './Nav';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MyAppbar from './appbar';
import { bgcolor } from '@mui/system';

const theme = createTheme();

const Login = () => {
    return (
        <div>
            <MyAppbar/>
            <BottomNavBar/>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box sx={
                        {
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }
                    }>
                        <Avatar sx={
                            {
                                m: 1,
                                bgcolor: '#9575cd'
                            }
                        }>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate
                            sx={
                                {mt: 1}
                        }>
                            <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
                            <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
                            <FormControlLabel control={
                                    <Checkbox
                                value="remember"
                                color="primary"/>
                                }
                                label="Remember me"/>
                            <Button type="submit" fullWidth variant="contained"
                                sx={
                                    {
                                        mt: 3,
                                        mb: 2,
                                        bgcolor: '#9575cd'
                                    }
                            }>
                                Sign In
                            </Button>
                        </Box>
                    </Box>

                </Container>
            </ThemeProvider>
            
        </div>
    );
}

export default Login;
