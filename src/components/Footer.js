import styles from './Footer.module.css'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className={styles.footer}>
                <h4>All rights reserved. {year}.</h4>
            </footer>
        </>
    );
}

export default Footer;