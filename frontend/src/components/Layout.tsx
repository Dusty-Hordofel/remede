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