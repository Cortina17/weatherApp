import LanguageIcon from '@mui/icons-material/Language';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import DEU from '../assets/germany.png';
import ESP from '../assets/spain.png';
import EN from '../assets/uk.png';
import FR from '../assets/french.png';
import IT from '../assets/italy.png';
import classes from './Header.module.css';

const lngs = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Español' },
    deu: { nativeName: 'Deutsch' },
    fr: { nativeName: 'French' },
    it: { nativeName: 'Italiano' },
};

const Header = () => {
    const { t, i18n } = useTranslation();

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
                    {t('title')}
                </NavLink>
            </nav>
            <div className={classes.languages}>
                <p>{t('languages')}</p>
                <LanguageIcon
                    className={classes.menuBtn}
                    onClick={handleMenuOpen}
                    color="inherit"
                    aria-label="menu"
                >
                </LanguageIcon>
                <Drawer
                    className={classes.drawer}
                    onClose={handleMenuClose}
                    open={isMenuOpen}
                    anchor="right"
                >
                    {Object.keys(lngs).map((lng) => (
                        <Button
                            key={lng}
                            style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                            type="submit"
                            onClick={() => i18n.changeLanguage(lng)}
                        >
                            {lngs[lng].nativeName}
                            {lng === 'en' && (
                                <img
                                    className={classes.img}
                                    src={EN}
                                    alt="English"
                                />
                            )}
                            {lng === 'es' && (
                                <img
                                    className={classes.img}
                                    src={ESP}
                                    alt="Español"
                                />
                            )}
                            {lng === 'deu' && (
                                <img
                                    className={classes.img}
                                    src={DEU}
                                    alt="Deutsch"
                                />
                            )}
                            {lng === 'fr' && (
                                <img
                                    className={classes.img}
                                    src={FR}
                                    alt="French"
                                />
                            )}
                            {lng === 'it' && (
                                <img
                                    className={classes.img}
                                    src={IT}
                                    alt="Italiano"
                                />
                            )}
                        </Button>
                    ))}
                </Drawer>
            </div>
        </header >
    );
}

export default Header;