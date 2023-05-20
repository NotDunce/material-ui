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
    Container,
    List,
    ListItem,
    ListItemText,
    Divider
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
import {bgcolor} from '@mui/system';


const Basket = () => {
    const items = [
        {
            name: 'Cappuccino',
            price: 3.50
        },
        {
            name: 'Latte',
            price: 4.00
        },
        {
            name: 'Espresso',
            price: 2.50
        },
        {
            name: 'Mocha',
            price: 4.50
        }, {
            name: 'Americano',
            price: 3.00
        },
    ];
    return (
        <div>
            <MyAppbar/>
            <BottomNavBar/>
            <CssBaseline/>
            <Typography variant="h4"
                >
                Basket
            </Typography>
            <List>
                {
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <Grid container spacing={2} justifyContent="center">
                        
                        <ListItem>
                            <ListItemText primary={
                                    item.name
                                }
                                secondary={
                                    `$${
                                        item.price
                                    }`
                                }/>
                        </ListItem>
                        </Grid>
                        {
                        index < items.length - 1 && <Divider/>
                    } </React.Fragment>
                ))
            } </List>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                <Button variant="contained" color="primary" align="center" style={
                                        {background: '#b39ddb'}}>
                Checkout
            </Button>
                </Grid>
            </Grid>
            
        </div>
    );
}

export default Basket;
