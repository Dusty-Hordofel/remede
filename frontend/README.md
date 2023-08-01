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

### 6. Feature Item
- create [FeatureItem](frontend/src/components/featureItem/FeatureItem.tsx) && [Home](frontend/src/pages/home/Home.tsx)

```ts
import React from 'react'
import styles from './featureItem.module.scss'

interface FeatureItemProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    title: string
    description: string

}

const FeatureItem = ({ src, title, description, alt }: FeatureItemProps) => {
    return (
        <div className={styles.feature}>
            <img src={src} alt={alt} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default FeatureItem
```
- style [featureItem](frontend/src/components/featureItem/featureItem.module.scss)
```scss

.feature{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 531.336px;
padding: 4rem;

    .image{
        width: 100px;
        border: 10px solid #00bc77;
        border-radius: 50%;
        padding: 1.6rem;
    }

    .title{
        color: #222;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.8rem;
    }

    .description{
        margin: 1.6rem 0 1.6rem;
        color:rgb(44, 62, 80);
        font-size: 1.4rem;
    }

}
```
### 7. Hero
- create [Hero]()