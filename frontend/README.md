# REMEDE

## Section 1: Project folder structure

### 1. Remede Project Structure

- create [Remede]() project

```bash
$ npm create vite@latest
```

- install dependencies

```bash
$ npm i bash sass classnames @tanstack/react-query @tanstack/router axios prop-types
```

### 2. Backend
- add backend folder
- install dependencies and content
- add MongoDB database 


## Section 2: Components
### 3. Header 
- create [Logo](frontend/src/components/logo/Logo.tsx)
```tsx
import { FC } from 'react'
import { Link } from "react-router-dom";


const Logo: FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ src,
  alt,
  title,
  width,
  height,
  className,
  style,
  onClick, }) => {
  return <Link to="/">
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      className={className}
      style={style}
      onClick={onClick}
      tabIndex={0}
    />
    <h1 className="sr-only">{title}</h1>
  </Link>
}

export default Logo
```
- create [Header](frontend/src/components/Header.tsx)
  
```tsx
import Logo from './logo/Logo'

import logo from "../assets/argentBankLogo.png"
import { NavLink } from 'react-router-dom'
import { UserCircle } from 'lucide-react'
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
```
### 4. Footer
### 5. Layout
### 6. 