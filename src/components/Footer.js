import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css'

const Footer = () => {

    const { t } = useTranslation();

    const year = new Date().getFullYear();

    return (
        <>
            <footer className={styles.footer}>
                <h4>{t('footer')} {year}.</h4>
            </footer>
        </>
    );
}

export default Footer;