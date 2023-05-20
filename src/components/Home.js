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
    Button

} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {useNavigation} from 'react-router';
import BottomNavBar from './Nav';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import MyAppbar from './appbar';
import {LineChart, Line} from "recharts";
import Example from "./piechart";
import {PieChart} from '@mui/icons-material';


const home = () => {

    const navigate = useNavigation();


    return (
        <div>
            <MyAppbar/>
            
            <CssBaseline/>
            <main> {/* padding for the top of the container holding the heading and the subheading  */}
                <Container maxWidth="sm"
                    style={
                        {marginTop: '50px'}
                }>
                    {/* Typography heading and subheading  */}
                    <Typography variant="h4" align="Center" color="textPrimary">Coffee News!</Typography>
                    <Typography variant="h6" align="Center" color="textSecondary" paragraph>The lastest and greatest news to keep you up to date with our coffee store.</Typography>


                </Container>

                {/* cta button for the menu */}
                <div>
                    <Container>
                        <Grid container
                            spacing={2}
                            justifyContent="center">
                            <Grid item>
                                <Button variant="contained"
                                    style={
                                        {background: '#b39ddb'}
                                }>
                                    View the menu
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                {/* cards on the main page */}
                <div>
                    <Container style={
                        {marginTop: '50px'}
                    }>
                        <Grid container
                            spacing={4}
                            justifyContent="center">
                            <Grid item
                                xs={12}
                                sm={6}>
                                <Card>
                                    <CardMedia sx={
                                            {height: 140}
                                        }
                                        component="img"
                                        image={
                                            require('./images/Strawberry.jpg')
                                        }
                                        title="strawberry mocha"/>
                                    <CardContent>
                                        <Typography sx={
                                                {fontSize: 14}
                                            }
                                            color="textSecondary"
                                            gutterBottom>Coffee of the day</Typography>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>Strawberry mocha!</Typography>
                                        <Typography sx={
                                                {fontSize: 14}
                                            }
                                            color="textSecondary"
                                            paragraph
                                            gutterBottom>A strawberry mocha coffee of the day is a delicious and unique drink that combines the rich and chocolatey flavors of a classic mocha with the sweet and fruity taste of fresh strawberries. This refreshing and indulgent beverage is perfect for anyone looking to try something new and exciting, and it's sure to satisfy your sweet tooth while leaving you with a smile on your face, try one today!</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                            <Grid item
                                xs={12}
                                sm={6}>
                                <Card>
                                    <CardMedia sx={
                                            {height: 140}
                                        }
                                        component="img"
                                        image={
                                            require('./images/Latte_and_dark_coffee.jpg')
                                        }
                                        title="strawberry mocha"/>
                                    <CardContent>
                                        <Typography sx={
                                                {fontSize: 14}
                                            }
                                            color="textSecondary"
                                            gutterBottom>Welcome to Designer Coffee!</Typography>
                                        <Typography variant="h5" color="textPrimary" gutterBottom>Designed for you!</Typography>
                                        <Typography sx={
                                                {fontSize: 14}
                                            }
                                            color="textSecondary"
                                            paragraph
                                            gutterBottom>Looking for a way to enjoy the perfect cup of coffee on-the-go? Look no further than FreshBrew! Our app allows you to order your favorite coffee drinks from your favorite cafes and coffee shops, all from the convenience of your phone.
                                            
                                            Whether you're a fan of a classic espresso, a creamy latte, or something a little more adventurous, we've got you covered.</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        </Grid>
                    </Container>
                    <BottomNavBar/>
                </div>

            </main>


        </div>
    );
}

export default home;
