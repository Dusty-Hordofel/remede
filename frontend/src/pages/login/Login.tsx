import { BiSolidUserCircle } from 'react-icons/bi'
import LoginForm, { StateProps } from '../../components/login/LoginForm'
import styles from './login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { firstName, lastName, token } = useSelector((state: StateProps) => state.auth)
    // console.log("🚀 ~ file: Login.tsx:9 ~ Login ~ token:", token)
    console.log("🚀 ~ file: LoginForm.tsx:30 ~ sto:", { lastName, firstName, token })
    useEffect(() => {
        if (token) {
            navigate("/profile")
        }
    }, [token])

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