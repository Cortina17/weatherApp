import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

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
                        backgroundColor: '#87B0C0',
                        '&:hover': {
                            backgroundColor: '#67AFCB'
                        }

                    }}
                >
                    {t('backBtn')}
                </Button>
            </NavLink>
        </nav >
    );
}

export default BackBtn;