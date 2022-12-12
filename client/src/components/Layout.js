import React from 'react'
import { Outlet } from 'react-router-dom'
import CopyRight from './CopyRight'
import Footer from './Footer'
import Header from './Header'
import NavBar from './NavBar'





const Layout = () => {
    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
            <Footer />
            <CopyRight />
        </>
    )
}

export default Layout