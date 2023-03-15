import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const BackBtn = () => {
    return (
        <nav>
            <NavLink to="/" >
                <Button
                    variant="contained"
                    startIcon={<KeyboardReturnIcon />}
                    sx={{ background: '#fc9a4f', color: 'black', marginTop: '2rem' }}
                >
                    Back to Main Page
                </Button>
            </NavLink>
        </nav >
    );
}

export default BackBtn;