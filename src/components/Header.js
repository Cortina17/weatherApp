import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import EN from '../assets/uk.png';
import ESP from '../assets/spain.png';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={classes.header}>
            <nav>
                <NavLink to="/" className={classes.link}>
                    <ThermostatIcon />
                    The Weather APP
                </NavLink>
            </nav>
            <LanguageIcon
                className={classes.menuBtn}
                onClick={handleMenuOpen}
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon />
            </LanguageIcon>
            <Drawer
                className={classes.drawer}
                onClose={handleMenuClose}
                open={isMenuOpen}
                anchor="right"
            >
                <Button
                    endIcon={
                        <img className={classes.img} src={EN} alt='English Language' />
                    }
                >
                    English
                </Button>
                <Button
                    endIcon={
                        <img className={classes.img} src={ESP} alt='Spanish Language' />
                    }
                >
                    Spanish
                </Button>
            </Drawer>
        </header >
    );
}

export default Header;