import React from 'react'
// import NavbarHero from '../components/NavbarHero'
import Navbar from '../components/Navbar' 
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function index() {
  return (
    <div>
         {/* <NavbarHero /> */}
         <Navbar/>
      <main>
        <Outlet />
      </main>
        <Footer/>
    </div>
  )
}

export default index
