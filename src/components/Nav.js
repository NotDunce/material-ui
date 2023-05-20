
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SettingsIcon from '@mui/icons-material/Settings';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import home from './Home';
import { useNavigate } from 'react-router';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const BottomNavBar = (props) => {
    const navigate = useNavigate();

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={props.currentPage}
            >
                <BottomNavigationAction onClick={() => navigate('/home')} label='Home' value='home' icon={<HomeIcon />} />
                <BottomNavigationAction onClick={() => navigate('/menu')} label='Menu' value='Menu' icon={<RestaurantMenuIcon />} />
                <BottomNavigationAction onClick={() => navigate('/basket')} label='Basket' value='Basket' icon={<ShoppingBasketIcon />} />
                <BottomNavigationAction onClick={() => navigate('/login')} label='Login' value='Login' icon={<PersonIcon />} />
                
            </BottomNavigation>
        </Paper>
    )
}

export default BottomNavBar;