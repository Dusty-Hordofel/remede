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
- create [Hero](frontend/src/components/hero/Hero.tsx)
```tsx
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
```
- style [Hero](frontend/src/components/hero/hero.module.scss)
```scss
.hero{
background-image: url('../../assets/bank-tree.jpeg');
background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 400px;
  position: relative;
  width: 100%;

  @media (min-width: 920px) {
      height: 400px;
      background-position: 0% 33%;
    }
  .content{
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }

  .subtitle {
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: 920px) {
        font-size: 2.4rem;
    }
  }

  .text {
    margin-bottom: 0;
    margin-top: 1.9rem;
    font-size: 0.9rem;
    @media (min-width: 920px) {
        font-size: 1.8rem;
    }
  }
  }
}
```

### 8. Login

- install react-hook-form
```bash
$ npm install react-hook-form
```
- create [LoginForm](frontend/src/components/login/LoginForm.tsx) 
```ts
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
import { LoginFormSchema, LoginFormValues } from '../../validators/schema-validator';
import styles from './loginForm.module.scss';


const LoginForm: React.FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            rememberMe: false,
        },
    });

    const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
        // You can directly access the data object which includes the checkbox value
        console.log(data);
    };

    return (
        <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.input}>
                    <label>Nom d'utilisateur</label>
                    <input {...register('email')} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className={styles.input}>
                    <label>Mot de passe</label>
                    <input type="password" {...register('password')} />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>

                <div className={styles.souvenir}>
                    <input type="checkbox" {...register('rememberMe')} id="check" />
                    <label htmlFor='check'>
                        Se souvenir de moi
                    </label>
                </div>

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default LoginForm;

```
- create [login]() page
```ts
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
```

## Section 3: Backend

### 9. update loginUser
- update [loginUser](backend/controllers/userController.js)

```js

exports.loginUser = async (req, res) => {
  const {email,password} = req.body
 
  try{
    const user = await User.findOne({ email:email })
    console.log("🚀 ~ file: userController.js:31 ~ exports.loginUser= ~ user:", user.password)
    
    if (!user) {
      throw new Error('User not found!')
    }

     const isValid = await bcrypt.compare(password, user.password)
     console.log("🚀 ~ file: userController.js:38 ~ exports.loginUser= ~ isValid:", isValid)

    if (!isValid) {
      throw new Error('Password is invalid')
    }

    // creation of token
    const token = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY || 'default-secret-key',
      { expiresIn: '1d' }
    ) 

    res.cookie('token', token, { httpOnly: true, sameSite: 'strict' }).status(201).json({ message: 'Logged in successfully' });

  }  catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
}
```

### 10. update getUserProfile
- update [getUserProfile](backend/controllers/userController.js)

```js
exports.getUserProfile = async (req, res) => {
    try {
    const jwtToken = req.headers.authorization.split('Bearer')[1].trim()
     const decodedJwtToken = jwt.decode(jwtToken)
      const user = await User.findOne({ _id: decodedJwtToken.id })
      
      if (!user) {
        throw new Error('User not found!')
      }
      
      res.status(201).json({user});
  } catch (error) {
    console.error('Error in userService.js', error)
    throw new Error(error)
  }
  
}
```


## Section 3: Redux Toolkit

### 11. Store  

- install redux toolkit
  
```bash
$ npm i @reduxjs/toolkit react-redux redux-persist
```
- create [store](frontend/src/app/store.ts)
```ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
   storage: storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

```
- create [AuthSlice](frontend/src/features/auth/authSlice.ts)
```ts
import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'


interface UserState { 
    token:string
    email: string,
    password: string,
  }

const initialState: UserState = {
    token:"",
    email: "",
    password: "",
    
  };

  export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userInfos: (state, action) => {
        state.token = action.payload.token
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
  }})


  export const {
    userInfos
  } = authSlice.actions;
  export default authSlice.reducer;
  
```
- add Store [Provider](frontend/src/main.tsxfrontend/src/main.tsx)
```ts
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './app/store.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
)

``` 
  