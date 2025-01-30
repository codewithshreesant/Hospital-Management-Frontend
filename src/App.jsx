import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import BottomContact from './components/BottomContact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <BottomContact />
      <Footer />
    </div>
  )
}


export default App  