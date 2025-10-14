import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Headers/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />

    </>
  )
}

export default Layout
