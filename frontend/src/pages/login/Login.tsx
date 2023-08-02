import { BiSolidUserCircle } from 'react-icons/bi'
import LoginForm from '../../components/login/LoginForm'
import styles from './login.module.scss'

const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.forms}>
                <BiSolidUserCircle className={styles.icon} />
                <h1 className={styles.title}>Sign In</h1>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login