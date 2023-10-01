import { BiSolidUserCircle } from 'react-icons/bi'
import LoginForm, { StateProps } from '../../components/login/LoginForm'
import styles from './login.module.scss'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet";

const Login = () => {
    const navigate = useNavigate()
    const { firstName, lastName, token } = useSelector((state: StateProps) => state.auth)
    // console.log("🚀 ~ file: LoginForm.tsx:30 ~ sto:", { lastName, firstName, token })

    useEffect(() => {
        if (token) {
            navigate("/profile")
        }
    }, [token])

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Argent Bank Home Page" />
                <meta name="keywords" content="argent, bank, home,login page" />
                <meta name="author" content="Argent Bank" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="robots" content="index, follow" />
                <title>Argent Bank Login Page</title>
                <link rel="canonical" href="http://localhost:5173/login" />
            </Helmet>
            <div className={styles.login}>
                <div className={styles.forms}>
                    <BiSolidUserCircle className={styles.icon} />
                    <h1 className={styles.title}>Sign In</h1>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login