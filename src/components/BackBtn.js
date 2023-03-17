import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useTranslation } from 'react-i18next';

const BackBtn = () => {

    const { t } = useTranslation();

    return (
        <nav>
            <NavLink to="/" >
                <Button
                    variant="contained"
                    startIcon={<KeyboardReturnIcon />}
                    sx={{
                        marginTop: '2rem',
                    }}
                >
                    {t('backBtn')}
                </Button>
            </NavLink>
        </nav >
    );
}

export default BackBtn;