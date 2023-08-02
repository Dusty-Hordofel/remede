import Logo from './logo/Logo'

import logo from "../../assets/argentBankLogo.png"
import { NavLink } from 'react-router-dom'
import { BiSolidUserCircle } from 'react-icons/bi'
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'
import styles from './header.module.scss'
import { useSelector } from 'react-redux'
import { StateProps } from '../login/LoginForm'


const Header = () => {
    const { firstName, token } = useSelector((state: StateProps) => state.auth)
    return (
        <nav className={styles.nav}>
            <Logo src={logo} title='Argent Bank' alt="Argent Bank Logo" width={200} height={54.383} />
            {!token ? (<NavLink to="/login" className={styles.navLink} >
                <BiSolidUserCircle style={{ fontSize: '24px' }} /> Sign In
            </NavLink>) : (
                <div className={styles.links}>

                    <NavLink to="/" className={styles.navLink}  >
                        <div className={styles.logout}>
                            <FaUserCircle style={{ fontSize: '24px' }} /> {firstName}
                        </div>

                    </NavLink>
                    <NavLink to="/" className={styles.navLink}  >

                        <div className={styles.logout}>
                            <FaSignOutAlt style={{ fontSize: '24px' }} /> Sign Out
                        </div>
                    </NavLink>
                </div>
            )}
        </nav>
    )
}

export default Header