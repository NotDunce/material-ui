import React from 'react';
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    CardActionArea,
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
import {bgcolor} from '@mui/system';

const theme = createTheme();

const menuItems = [
    {
        name: 'Espresso',
        description: 'A single shot of our finest espresso.',
        price: '$3.00',
        image: 'https://source.unsplash.com/featured/?coffee'
    }, {
        name: 'Cappuccino',
        description: 'Our classic cappuccino with steamed milk and foam.',
        price: '$4.50',
        image: 'https://source.unsplash.com/featured/?cappuccino'
    }, {
        name: 'Latte',
        description: 'Our smooth and creamy latte with your choice of milk.',
        price: '$5.00',
        image: 'https://source.unsplash.com/featured/?latte'
    },
];

const Menu = () => {
    return (
        <div>
            <MyAppbar/>

            <CssBaseline/>
            <Container maxWidth="sm"
                style={
                    {marginTop: '50px'}
            }>
                {/* Typography heading and subheading  */}
                <Typography variant="h4" align="Center" color="textPrimary" gutterBottom>Menu</Typography>
                <Typography sx={
                        {fontSize: 14}
                    }
                    align="Center"
                    color="textSecondary"
                    style={
                        {marginBottom: '50px'}
                    }
                    gutterBottom>Here you can view all of our menu items.</Typography>


            </Container>
            <Grid container
                spacing={4}
                justifyContent="center"
                style={
                    {marginBottom: '50px'}
            }>
                {
                menuItems.map(item => (
                    <Grid item
                        xs={12}
                        sm={6}
                        md={4}
                        key={
                            item.name
                    }>
                        <Card>
                            <CardActionArea>
                                <CardMedia component="img" height="140"
                                    image={
                                        item.image
                                    }
                                    alt={
                                        item.name
                                    }/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {
                                        item.name
                                    } </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {
                                        item.description
                                    } </Typography>
                                    <Typography variant="body1"
                                        sx={
                                            {mt: 2}
                                    }>
                                        {
                                        item.price
                                    } </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                ))
            } </Grid>
            <BottomNavBar/>
        </div>
    );
};

export default Menu;
