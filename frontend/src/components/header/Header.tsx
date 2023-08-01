import Logo from './logo/Logo'

import logo from "../../assets/argentBankLogo.png"
import { NavLink } from 'react-router-dom'
import { BiSolidUserCircle } from 'react-icons/bi'
import styles from './header.module.scss'


const Header = () => {
    return (
        <nav className={styles.nav}>
            <Logo src={logo} title='Argent Bank' alt="Argent Bank Logo" width={200} height={54.383} />
            <NavLink to="/" className={styles.navLink} >
                <BiSolidUserCircle style={{ fontSize: '24px' }} /> Sign In
            </NavLink>
        </nav>
    )
}

export default Header