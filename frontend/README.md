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
- create [Footer](frontend/src/components/footer/Footer.tsx)

```tsx
import styles from './footer.module.scss'

function Footer({ content }: { content: string }) {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>{content}</p>
        </footer>
    );
}

export default Footer;



```
- style [footer](frontend/src/components/footer/footer.module.scss)
  
```scss
@import "/src/styles/main.scss";


.footer{
display: flex;
justify-content: center;
border-top: 2px solid rgb(204, 204, 204);
padding: 3.2rem 0px 2.4rem;
}
```

### 5. Layout

- create [Layout](frontend/src/components/Layout.tsx) && [App](frontend/src/App.tsx)
```tsx
import { ReactNode } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer content="Copyright 2020 Argent Bank" />
        </div>
    )
}

export default Layout
```

### 6. 