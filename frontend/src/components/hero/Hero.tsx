import classNames from 'classnames'
import styles from './hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <section className={styles.content}>
                <h2 className={classNames("sr-only", styles.srOnly)}>Promoted Content</h2>
                <p className={styles.subtitle}>No fees.</p>
                <p className={styles.subtitle}>No minimum deposit.</p>
                <p className={styles.subtitle}>High interest rates.</p>
                <p className={styles.text}>Open a savings account with Argent Bank today!</p>
            </section>

        </div>
    )
}

export default Hero