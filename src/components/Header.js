import { NavLink } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <nav>
                <NavLink to="/" className={classes.link}>The Weather APP</NavLink>
            </nav>
        </header>
    );
}

export default Header;