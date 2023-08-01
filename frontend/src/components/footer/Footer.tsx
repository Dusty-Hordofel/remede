import styles from './footer.module.scss'

function Footer({ content }: { content: string }) {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>{content}</p>
        </footer>
    );
}

export default Footer;

{/* */ }
